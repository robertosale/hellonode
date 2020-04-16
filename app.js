var http = require('http');

http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Hello World con HTML</h1>");
    res.end();
}).listen(3000, function(){
    console.log("Servidor escuchando en puerto 30000")
});
