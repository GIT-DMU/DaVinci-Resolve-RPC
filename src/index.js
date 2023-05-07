/* Import davinci custom class */
const DRPC = require('./assets/discord');

/* Create new instance of davinci class */
const DAVINCI = new DRPC();

/* Create new instance for discord-client */
const RPC = require('discord-rpc');
const CLIENT = new RPC.Client({transport: 'ipc'});

/* run RPC */
DAVINCI.runRPC(CLIENT, '12345678987654321', [{label: "Github", test2: "https://github.com/GIT-DMU", test: "hallo"}]);
