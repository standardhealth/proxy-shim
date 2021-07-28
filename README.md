# proxy-shim (WIP)

A FHIR server that acts as middleware between clients and EHR FHIR servers

## Usage for mCODE Extraction

The `proxy-shim` comes with services that use the [mcode-extraction-framework](https://github.com/mcode/mcode-extraction-framework) to extract mCODE data from CSV files. These services live on top of the shim server and can be accessed with FHIR search operations.

To run the `proxy-shim` with mCODE extraction-enabled services:

```
npm start
```

## Usage for Authentication Middleware

The `proxy-shim` comes with services that act as a layer of middleware that deals with token introspection and authentication to auth-enabled FHIR servers.

To run the `proxy-shim` with auth-enabled services:

```
npm run start:auth
```

## Local Development

This repository is configured with [eslint](https://eslint.org/), [prettier](https://prettier.io/), and [jest](https://jestjs.io/). See scripts in `package.json` to run these individually. They can also be run together:

```
npm run check
```
