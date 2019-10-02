const ee = require('@nauma/eventemitter');
const ENGINE = new ee.EventEmitter('engine');
const DATABASE = new ee.EventEmitter('database');

global.ENGINE = ENGINE;
global.DATABASE = DATABASE;