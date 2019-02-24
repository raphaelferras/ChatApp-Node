var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () =>{
  it('should generate the correct message object', () => {
    var from = 'test';
    var text = 'myText';
    var message = generateMessage(from,text);
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(typeof message.createAt).toBe('number');
  });
});


describe('generateLocationMessage', () =>{
  it('should generate the correct location message object', () => {
    var from = 'test2';
    var lat = '43.5187456';
    var lng = '-79.6186987';
    var url =`https://www.google.com/maps?q=${lat},${lng}`;
    var message = generateLocationMessage(from, lat, lng);
    expect(message.from).toBe(from);
    expect(message.url).toBe(url);
    expect(typeof message.createAt).toBe('number');
  });
});
