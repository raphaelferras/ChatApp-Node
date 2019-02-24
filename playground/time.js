// jan 1st 1970 00
var moment = require('moment');


// var date = new Date();
//
// console.log(date.getMonth())

var createAt= 1234;
var date = moment(createAt);
//date.add(1, 'year').subtract(9,'months');
console.log(date.format('h:mm a'));
console.log(date.format());
