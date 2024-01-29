const url = require('url')
const route = "http://localhost:5300/userRec?username=David&age=15"
console.log(route);

let ul = url.parse(route);
console.log(ul.hostname);
console.log(ul.pathname);
console.log(ul.search);
console.log(ul.hostname);