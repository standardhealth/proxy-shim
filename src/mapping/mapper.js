const fhirpath = require('fhirpath');
const _ = require("underscore");

let isTrue = (arg) => {
  if(Array.isArray(arg) ){
    return arg.find(i => isTrue(i));
  }else if(typeof arg === "object"){
    return !_.isEmpty(arg);
  }else if(typeof arg === "string" && arg ==="false"){
    return false;
  }
  return arg;
}

let buildProcessor = (arg) => {
  let processor = null;
  switch(typeof arg) {
    case "string":
      processor = require(arg);
      break;
    case "function":
      processor = arg;
      break;
  }
  return processor;
}

let buildFilter = (arg) => {
  // if string create a filter out of it
  if(Array.isArray(arg)){
    let filters = arg.map( f => buildFilter(f));
    return (resource) => {return filters.find( filter => isTrue(filter(resource)))}
  }
  let filter = null;
  switch(typeof arg) {
    case "string":
      let path = fhirpath.compile(arg);
      filter = (resource) => isTrue(path(resource));
      break;
    case "function":
      filter = arg;
      break;
  }
  return filter;
}

let buildFilterMappers = (arg) =>{
  if(Array.isArray(arg)){
    return arg.map(fm => buildFilterMappers(fm));
  }
  else{
    switch(typeof arg) {
      case "string":
        return require(arg);
        break;
      case "object":
        if(typeof arg.filter === 'function' && typeof arg.execute === 'function'){
          return arg;
        }
        return new FilterMapper(arg)
        break;
    }
  }
}


let buildResourceMappers = (args) => {
  let mappers = {};
  for(var resourceType in args){
    let mapper = args[resourceType];
    if(typeof mapper === 'string'){
      mappers[resourceType] = require(mapper);
    }else if(typeof mapper === 'object' && !mapper.constructor.name === "Object"){
      mappers[resourceType] = mapper;
    }else {
      mappers[resourceType] = new ResourceTypeMapper(mapper);
    }
  }
  return mappers;
}


class MappingEngine {

  constructor(args){
    this.mappers = buildResourceMappers(args.resourceMappers);
    this.defaultFn = buildProcessor(args.default);
    this.ignoreFn = buildFilter(args.filter)
    this.excludeFn = buildFilter(args.exclude)
  }

  ignore(resource){
    return this.ignoreFn ? this.ignoreFn(resource) : false
  }

  exclude(resource){
    return this.excludeFn ? this.excludeFn(resource) : false
  }

  default(resource){
    return this.defaultFn ? this.defaultFn(resource) : resource;
  }

  execute(resource){
    if(Array.isArray(resource)){
      return resource.map( r => this.execute(r)).filter(n => n)
    }else{
      if(this.ignore(resource)){return resource};
      if(this.exclude(resource)){return null;};
      let mapper = this.mappers[type];
      if(mapper){
        return mapper.execute(resource);
      }else{
        return this.default(resource);
      }
    }
  }
}

class ResourceTypeMapper {

  constructor(args){
    this.defaultFn = buildProcessor(args.default);
    this.ignoreFn = buildFilter(args.ignore);
    this.excludeFn = buildFilter(args.exclude);
    this.mappers = buildFilterMappers(args.mappers);
  }

  ignore(resource){
    return this.ignoreFn ? this.ignoreFn(resource) : false
  }

  exclude(resource){
    return this.excludeFn ? this.excludeFn(resource) : false
  }

  default(resource){
    return this.defaultFn ? this.defaultFn(resource) : resource;
  }

  execute(resource){
    if(Array.isArray(resource)){
      return resource.map( r => this.execute(r)).filter(n => n)
    }else{
      if(this.ignore(resource)){return resource};
      if(this.exclude(resource)){return null;};
      let mapper = this.mappers.find(map => map.filter(resource));
      if(mapper){
        return mapper.execute(resource);
      }else{
        return this.default(resource);
      }
    }
  }
}

class FilterMapper {

  constructor(args){
    this.args = args;
    this.filterFn = buildFilter(args.filter);
    this.execfn = buildProcessor(args.exec);
  }

  filter(resource){
    return (this.filterFn) ? this.filterFn(resource) : false;
  }

  execute(resource){
    if(Array.isArray(resource)){
      return resource.map( r => this.execute(r)).filter(n => n)
    }
    return this.execfn(resource);
  }
}

module.exports = {
  MappingEngine,
  ResourceTypeMapper,
  FilterMapper,
  buildFilter
}
