var http = require('http');

http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    var url = req.url;

    if(url === '/contact')     res.write("<h1>Contacto<h1>");
    else if(url === '/about')  res.write("<h1>Acerca de<h1>"); 
    else                       res.write("<h1>Bienvenido<h1>"); 
    res.end();

  
}).listen(3000, function(){
    console.log("Servidor escuchando en puerto 30000")
});
