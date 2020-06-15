'use strict';
const events = require('../events');
require('../driver');
const myStoreName = process.env.MY_STORE_NAME;
const faker = require('faker');
jest.spyOn(global.console, 'log');

let fakeOrder = {
  store: myStoreName,
  orderId : faker.random.number(),
  customer : faker.name.findName(),
  address :  faker.address.country(), 
};

describe('Events', () => {

  it('pickup()', () => {
    events.emit('pickup', fakeOrder);
    expect(console.log).toHaveBeenCalled();
  });

  it('in-transit()', () => {
    events.emit('in-transit', fakeOrder);
    expect(console.log).toHaveBeenCalled();
  });

  it('delivered()', () => {
    events.emit('delivered', fakeOrder);
    expect(console.log).toHaveBeenCalled();
  });

});
