
//Monitor the system for events 
// const events = require('../events.js');
// require('./driver.js');
// const vendor = require('../vendor/vendor.js');

const net = require('net');
const uuidv4 = require('uuid').v4;
const PORT = process.env.PORT || 3000;
const server = net.createServer();

server.listen(PORT, () => console.log(`server is up on port ${PORT}`));
const socketPool = {}; 
server.on('connection', (socket) => {
  const id = `socket-${uuidv4()}`;
  socketPool[id] = socket;
  socket.on('data', (buffer) => dispatchEvent(buffer));
  socket.on('error', (e) => console.log(`Socket error ${e.message}`));
  socket.on('end', (e) => delete socketPool[id]);
});
function dispatchEvent(buffer) {
  console.log('Buffer', JSON.parse(buffer));
  const message = JSON.parse(buffer.toString().trim());
  broadcast(message);
}
function broadcast(message) {
  console.log('Message', message);
  const payload = JSON.stringify(message);
  console.log('Payload', payload);
  for (let socket in socketPool) {
    socketPool[socket].write(payload); 
  }
}

server.on('error', (e) => console.log('SERVER ERROR', e.message));

// function readyForPickup(){
//   setTimeout(() => {
//     let fakeOrder = vendor();
    
//     setTimeout(() => {
//       events.emit('pickup',fakeOrder); 
//       console.log(`DRIVER: picked up ${fakeOrder.orderID}`);
      
//     }, 1000);
    
//     setTimeout(() => {
//       events.emit('in-transit', fakeOrder );
//       console.log(`DRIVER: delivered up ${fakeOrder.orderID}`);
//       console.log(`VENDOR: Thank you for delivering ${fakeOrder.orderID}`); 
//       events.emit('delivered',fakeOrder); 
//       console.log('Thank you');
//     }, 3000),
    
    
//     readyForPickup();
//   }, 5000); 
// }
// readyForPickup();

 