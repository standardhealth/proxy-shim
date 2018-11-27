
/*
  Decompose a FHIR bundle into an array of resources.
*/
let bundleToResourceList = (bundle) => {
  if(!bundle || !bundle.entry || bundle.entry.length > 1) return [];
  return bundle.entry.map(i => i.resource)
}


module.exports = {
  bundleToResourceList
}
