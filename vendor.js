'use strict';
require('dotenv').config();
const events = require('./events.js');
// require('./caps.js');
//Declare your store name
const myStoreName = process.env.MY_STORE_NAME;
const faker = require('faker');


// Create a fake order, as an object:
// storeName, orderId, customerName, address
// Emit a ‘pickup’ event and attach the fake order as payload


setTimeout(() => {
  let storeName = myStoreName;
  let orderId = faker.random.number();
  let customerName = faker.name.findName();
  let address = faker.address.city();
  events.emit('pickup',{storeName,orderId,customerName,address});}, 5000);


//   Whenever the ‘delivered’ event occurs
//   Log “thank you” to the console

