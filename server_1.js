var qs = require( 'querystring' );
require( 'http' ).createServer( function ( req, res ) {
  var body = '';
  req.on( 'data', function ( chunk ) { //
    body += chunk;
  })
  req.on( 'end', function (){//所有数据接收完毕
    res.writeHead( 200 );
    res.end( 'Done' );
    console.log( '\n got name: \033[90m' + qs.parse( body ).name + '\033[39m');
  })
}).listen( 3000 );