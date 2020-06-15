// Main Hub Application
const events = require('./events.js');

//Manages the state of every package (ready for pickup, in transit, delivere)

events.on('pickup', (payload) => logIt( 'pickup', payload));
events.on('in-transit',(payload) => logIt('in-transit', payload));
events.on('delivered',(payload) => logIt('delivered', payload));

//Logs every event to the console with a timestamp and the event payload
function logIt(event, payload){
  const time = new Date().toString().slice(3,25);
  console.log(`EVENT { event: "${event}", 
  time: ${time} \n`,
  'payload: \n',payload);
}
