'use strict';
require('dotenv').config();
require('./events.js');
require('../caps/caps.js');
//Declare your store name
const myStoreName = process.env.MY_STORE_NAME;
const faker = require('faker');



// Create a fake order, as an object:
// storeName, orderId, customerName, address
// Emit a ‘pickup’ event and attach the fake order as payload


module.exports = function generateFake(){
  let fakeOrder =
   { store: myStoreName,
     orderID : faker.random.number(),
     customer : faker.name.findName(),
     address :  `${faker.address.city()}, ${faker.address.country()}`};
  return fakeOrder;
};

//   Whenever the ‘delivered’ event occurs
//   Log “thank you” to the console

