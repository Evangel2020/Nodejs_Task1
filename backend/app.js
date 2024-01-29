const cors = require('cors');

const http = require('http');
const userAc = require('./userRec')
const Url = require('url');

const server = http.createServer(function (req, res) {
    //To add Data
    const data = [
        { username: 'naomi', age: 30 },
        { username: 'sefa', age: 50 },
        { username: 'jane', age: 20 },
    ]

    if (req.url == '/') {
        res.writeHead(200, { 'Content_Type': 'text/html' });
        res.write('welcome');
        res.end();
    } else if (req.url == '/user') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, { 'Content_Type': 'application/json' });
        res.write(JSON.stringify(data));
        res.end();
        ///addUsers
    } else if (req.url == '/userRec?username=Jane&age=26') {
        const newUrl = Url.parse(req.url,true);
        const params = newUrl.query
        let username = params.username
        let age = params.age
        userAc(username,age);
        res.end("record added");
    }else if (req.url.startsWith('/addNewUser')) {
        const newUrl = Url.parse(req.url,true);
        const params = newUrl.query
        let username = params.username
        let age = params.age
        userAc(username,age);
        res.end("Names added successfully");
    }
    else if (req.url == '/contact') {
        res.writeHead(200, { 'Content_Type': 'text/html' });
        res.write('contact page');
        res.end();
    } else {
        res.writeHead(404, { 'Content_Type': 'text/html' });
        res.end();
    }
})
server.listen(5300, function () {
    console.log("server run")
});
