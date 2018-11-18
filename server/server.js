const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '/../public');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});

module.exports = {app};
