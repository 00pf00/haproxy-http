//客户端
var
  http = require( 'http' ),
  qs = require( 'querystring' )
;

function send( theName ) {
  var data = qs.stringify({ name:theName });
  var request = require( 'http' ).request({// 初始化一个新的http.Client Request对象
    host: '127.0.0.1',
    port: 3000,
    url: '/',// 随意
    mehotd: 'POST',
    headers: {   
      'Content-Type':'application/x-www-form-urlencoded',
      'Content-Length': data.length,  
    } 
  }, function ( res ) {
    res.setEncoding( 'utf-8' );
//  var body = '';
    res.on( 'data', function ( chunk ) { 
//    body += chunk;
    })
    res.on( 'end', function () {
//     console.log(body);
       console.log('\n  \033[90m request complete! \033[39m');
       process.stdout.write( '\n your name: ');
    });
  })
  request.end( data ) ;

}
process.stdout.write( '\n your name: ');// 客户端启动后，输出your name
process.stdin.resume();// 等待输入
process.stdin.setEncoding( 'utf-8' );// 设置输入流编码
process.stdin.on( 'data', function ( name ) {
  send( name.replace( '\n', '' ) );
});