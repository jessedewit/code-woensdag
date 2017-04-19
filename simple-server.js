var http = require('http');

var person = require('./person');

var persons = [{
    voornaam : 'Jesse',
    achternaam : 'de Wit',
    tel : '06 12345678',
    woonplaats : 'Tilburg'
}, {
    voornaam : 'Niels',
    achternaam : 'van Dam',
    tel : '06 12345678',
    woonplaats : 'Breda'
}
]

http.createServer( function(req, res) {
   
    res.writeHead(200, {'Content-Type':'application/json'} );
    
    res.end( JSON.stringify(person.i18l('nl')) );
    
}).listen(8080);

console.log('Server is running.');