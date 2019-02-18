var expect = require('expect');

var {generateMessage} = require('./message');

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
