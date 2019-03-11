//written by Myungsik Kim 03/11/2019 Basic connection
var http = require('http');
var url = require('url');

var server = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    if(_url == '/'){
        title = 'Default';
    }
    if(_url == '/favicon.ico'){
        return response.writeHead(404);
    }

    response.writeHead(200);
    console.log(queryData.id);
    
    var template = `
    <!doctype html>
    <html>
    <head>
        <h2>${title}</h2>
    </head>

    <body>
        <ul>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
    </body>
    </html>
    `;

    response.end(template);
});

server.listen(3000);