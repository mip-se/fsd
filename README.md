# Getting Started

## Information

- The front end and backend of this project is decoupled.
- node environment => `v16.16.0`
- npm => `8.11.0`

## Instructions

 1) clone repo: `git clone https://github.com/mip-se/fsd.git`
 2) install dependencies for both folders: 
 `cd fsd && cd ./api && npm i && cd .. && cd ./frontend && npm i`
 3) start express server for `./api` by running `npm run start`, this will open on on port `3000` however this can be changed by setting port by `export PORT=3001`
4) run react-app in `./frontend` by running `npm run start`
5) If you wish to see the loading element whilst a request is made to either `/metric` or `/time` endpoint, it is recommended to throttle the network to Slow 3G.


## `./api`

 
### `npm run start`
Runs the express server on [http://localhost:3000](http://localhost:3000)

Can also set a specified port by `export PORT=${number}`
  

## `./frontend`


### `npm start`
Runs the app in the development mode, can be viewed on the next available port

Open [http://localhost:3001](http://localhost:3001) to view it in your browser.


### `npm run build`
Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!
  