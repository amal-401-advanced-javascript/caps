'use strict';
//Monitor the system for events 
const events = require('./events.js');
// require('./caps.js');
// require('./vendor.js');

// Wait 1 second
// Log “DRIVER: picked up [ORDER_ID]” to the console.
// Emit an ‘in-transit’ event with the payload you received

// Wait 3 seconds
// Log “delivered” to the console
// Emit a ‘delivered’ event with the same payload




setTimeout(() => {
  console.log(`DRIVER: picked up`, payload.orderId);
  events.emit('in-transit',payload);   
}, 1000);



setTimeout(() => {
  console.log(`delivered`,payload);
  events.emit('delivered',payload);  
}, 3000); 
