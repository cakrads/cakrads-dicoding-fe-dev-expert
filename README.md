
# CodeceptJS
This project is a submission project Menjadi Front-End Web Developer Expert by Dicoding Indonesia.


## Install
Install dependencies
```sh
npm i
```

to use @codeceptjs/mock-request, we need `npm-force-resolutions`, and npm install again
```sh
npm run init-e2e
# will run: npx npm-force-resolutions && npm i
```  

## Run and Build Application
#### 1. Run Application in local
Application will run in development mode and can be access in https://localhost:8080 
```sh
npm run start-dev
```

#### 2. Build Application
Application will build  in production mode and stored in `dist` folder
```sh
npm run build
```

#### 3. Run Bundle Analyze
Same as `npm run build` but will show bundle-analyze (webpack-bundle-analyzer)
```sh
npm run analyze
```

## Testing
#### 1. Check Lint Code
```sh
npm run lint
```
#### 2. Integration Test
```sh
npm run test
```
#### 3. End-to-End Test
```sh
npm run e2e
```
**Important:** we should do ```npm run init-e2e``` first and make sure to application run in https://localhost:8080 