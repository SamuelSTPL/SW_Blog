// const http = require('http');
// const fs = require('fs');
// const _ = require('lodash')

// const server = http.createServer((req, res) => {
// //lodash
// const num = _.random(0, 20)
// console.log(num);

// const greet = _.once(() => {
//     console.log('hello')
// })

// greet();
// greet();
// //Set Header content type
// res.setHeader('Content-Type', 'text/html')

// let path = './views/';
// switch(req.url){
//     case '/': 
//     path += 'index/html';
//         res.statusCode = 200;
//         break;
//     case '/about':
//         res.statusCode = 200;
//         path += 'about.html';
//         break;
//     case '/about-me':
//         res.setHeader("Location", './about')
//         res.statusCode = 301;
//         res.end()
//         break;
//     default :
//         res.statusCode = 404;
//         path += '404.html';
//         break;
// }


// //Send HTML
//     fs.readFile(path, (err, data) => {
//         if(err){
//             console.log(err);
//             res.end();
//         } else {
//             res.end(data);
//         }
        
//     })
// })

// server.listen(3000, 'localhost', () => {
//     console.log("Request away on port 3000")
// });
