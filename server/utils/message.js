var generateMessage = (from, text) => {
  return {
    from: from,
    text: text,
    createAt: new Date().getTime()
  }
}

var generateLocationMessage = (from, lat, lng) => {
  return {
    from: from,
    url: `https://www.google.com/maps?q=${lat},${lng}`,
    createAt: new Date().getTime()
  }
}

module.exports = {generateMessage, generateLocationMessage};
