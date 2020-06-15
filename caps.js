
//Monitor the system for events 
const events = require('./events.js');
require('./driver.js');
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
      console.log(`DRIVER: picked up ${fakeOrder.orderID}`);
      
    }, 1000);
    
    setTimeout(() => {
      events.emit('in-transit', fakeOrder );
      console.log(`DRIVER: delivered up ${fakeOrder.orderID}`);
      console.log(`VENDOR: Thank you for delivering ${fakeOrder.orderID}`); 
      events.emit('delivered',fakeOrder); 
      console.log('Thank you');
    }, 3000),
    
    
    readyForPickup();
  }, 5000); 
}
readyForPickup();

 