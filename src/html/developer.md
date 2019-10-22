# Developer Notes

## Contribute

- Clone Repo ***Note the location of this repo is probably tempory.**
```cmd
git clone https://apps.gcpe.gov.bc.ca/bitbucket/scm/~sturple/bcgov-web-components.git
```
- Repo maintainer [Shawn.Turple@gov.bc.ca](mailto:Shawn.Turple@gov.bc.ca)


## Development Setup

```npm
git clone https://apps.gcpe.gov.bc.ca/bitbucket/scm/~sturple/bcgov-starter-kit.git
mv bcgov-starter-kit my-project
cd my-project
npm install
npm run start

```

### Start Dev Server
```npm run start```

### Build Prod Version
```npm run build```


## File Structure
```
./src/
├── bcgov <--       //Components
│   ├── beta
│   ├── button
│   ├── callout
│   ├── footer
│   ├── header
│   ├── menu
│   └── sandbox
├── html <--        //Website
│   └── partials
├── lib <--         //Helper Libraries and BcgovElement class
├── scripts <--     //Main script for Webpack
└── styles  <--     //Sass include files, and generic SASS files.
    └── mixins

```

### Component Structure
```
├── button              
│   ├── README.md       //Documentation
│   ├── _button.scss    //Styles for element, and included to /src/styles/index.scss
│   └── index.js        //Main entry point, and included to /src/bcgov/index.js
```

