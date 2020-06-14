'use strict';
// Main Hub Application
const events = require('./events.js');

require('./driver');
require('./vendor');
//Manages the state of every package (ready for pickup, in transit, delivere)

events.on('readyForPickup', (payload) => logIt( 'readyForPickup', payload));
events.on('transit',(payload) => logIt('transit', payload));
events.on('delivered',(payload) => logIt('delivered', payload));

//Logs every event to the console with a timestamp and the event payload
function logIt(event, payload){
  const time = new Date();
  console.log(` Time: ${time} , 
  Event: ${event}`,payload);
}