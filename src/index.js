#!/usr/bin/env node

/**
 * Module dependencies.
 ***/
var program = require('commander');
var pack = require('../package.json');
var shell = require('shelljs');

program
  .version(pack.version)
  .description('Let jschef do the work for you')
  .parse(process.argv);

process.on('uncaughtException', function(err){
  console.log("Err: ", err);
});

