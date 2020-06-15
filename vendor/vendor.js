'use strict';
require('dotenv').config();
// require('../events.js');
const net = require('net');
const client = new net.Socket();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const myStoreName = process.env.MY_STORE_NAME;
const faker = require('faker');
require('../caps/caps.js');



client.connect(PORT, HOST, () => {
  console.log('Client Connected');
  generateFake();
  client.on('data', (data) => {
    const event = JSON.parse(data);
    if (event.event === 'delivered') {
      thanks();
    }
  });


});


module.exports = function generateFake(){
  let fakeOrder =
   { store: myStoreName,
     orderID : faker.random.number(),
     customer : faker.name.findName(),
     address :  `${faker.address.city()}, ${faker.address.country()}`};
  return fakeOrder;
};

module.exports = function thanks(){
  console.log('Thank you');
};