
//Monitor the system for events 
const events = require('./events.js');
require('./caps.js');
const vendor = require('./vendor.js');

// Wait 1 second
// Log “DRIVER: picked up [ORDER_ID]” to the console.
// Emit an ‘in-transit’ event with the payload you received

// Wait 3 seconds
// Log “delivered” to the console
// Emit a ‘delivered’ event with the same payload

function readyForPickup(){
  setTimeout(() => {
    let fakeOrder = vendor();
    
    setTimeout(() => {
      events.emit('pickup',fakeOrder); 
      console.log(`DRIVER: picked up ${fakeOrder.orderId}`);
      
    }, 1000);
    
    setTimeout(() => {
      events.emit('in-transit', fakeOrder );
      console.log(`DRIVER: delivered up ${fakeOrder.orderId}`);
      console.log(`VENDOR: Thank you for delivering ${fakeOrder.orderId}`); 
      events.emit('delivered',fakeOrder); 
      console.log('Thank you');
    }, 3000),
    
    
    readyForPickup();
  }, 5000); 
}
readyForPickup();

 