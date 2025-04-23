const global = {};

global.url =  'http://localhost:9000/api/v1';
global.token =  localStorage.getItem('Token-costControl');
global.user = localStorage.getItem('User-costControl');
// global.url='cajgyikcqs.loclx.io';

module.exports = global;