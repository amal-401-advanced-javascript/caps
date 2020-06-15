'use strict';
const events = require('../events');
require('../driver');

jest.spyOn(global.console, 'log');

let payload = {
  store: 'Amal',
  orderID: '16023',
  customer: 'Bailey Simonis MD',
  address: 'Portugal',
};

describe('Events Handlers', () => {

  it('pickup()', () => {
    events.emit('pickup', payload);
    expect(console.log).toHaveBeenCalled();
  });

  it('in-ransit()', () => {
    events.emit('in-transit', payload);
    expect(console.log).toHaveBeenCalled();
  });

  it('pickup()', () => {
    events.emit('delivered', payload);
    expect(console.log).toHaveBeenCalled();
  });

});
