const http = require('http');

const PORT = 3000

const server = http.createServer((req, res)=>{
    res.writeHead(200,{'content-type':'text/html'} )
    res.end('<p>Hello Node!!!!</p>\n');
});

server.listen(PORT,()=>{
    console.log(`YOU SERVER IS RUNNING ON : http://localhost:${PORT}`)
})

