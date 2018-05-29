//http://keystonejs.com/getting-started/

var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product',{
   map: {name: 'title'},

});