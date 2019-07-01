var feature = {
    name: 'iman',
    star: 4,
    city: 'shiraz',
    rooms: [
        { name: 'single' },
        { name: 'twin' },
        { name: 'double' }
    ],
    facilities: ['pool', 'coffeeshop', 'resturant']
};
var q = prompt('Which hotel feature do you want to see?');
// console.log(feature[q]);

var b = prompt('The hotel ' + q + ' is: ' + feature[q] + ' Do you want to update (yes or no) ?');
(b == 'yes') ? feature[q] = (prompt('Please enter a new ' + q + '?')): feature['hotel'];
console.log(feature);