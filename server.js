//@formatter:off
// the above line tells the lint to not change the file
require('zone.js/dist/zone-node');
require('reflect-metadata');
const express = require('express');
const fs = require('fs');

const core = require('@angular/core');

const { platformServer, renderModuleFactory } = require('@angular/platform-server');
const { ngExpressEngine } = require('@nguniversal/express-engine');
// Import module map for lazy loading
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

// Import the AOT compiled factory for your AppServerModule.
// This import will change with the hash of your built server bundle.
const server = require('./dist/dist-server/main.bundle');

// Faster server renders w/ Prod mode (dev mode never needed)
//core.enableProdMode();

const app = express();

// Set the engine
app.engine('html', ngExpressEngine({

}));

app.set('view engine', 'html');

app.set('views', './dist/');
app.use('/', express.static('./dist', {index: false}));


app.get(/\/(.*)/, (req, res) => {
  res.render('./index', {
  req,
  res,
  bootstrap: server.AppServerModuleNgFactory,
  providers: [
    provideModuleMap(server.LAZY_MODULE_MAP)
  ]
});
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening at ${process.env.PORT || 3000}`);
})
