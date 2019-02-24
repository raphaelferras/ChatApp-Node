var moment = require('moment');

var generateMessage = (from, text) => {
  return {
    from: from,
    text: text,
    createAt: new moment().valueOf()
  }
}

var generateLocationMessage = (from, lat, lng) => {
  return {
    from: from,
    url: `https://www.google.com/maps?q=${lat},${lng}`,
    createAt: new moment().valueOf()
  }
}

module.exports = {generateMessage, generateLocationMessage};
