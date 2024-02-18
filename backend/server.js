

const http=require('http')

http.createServer(
    (request, response)=>{
        response.write("Home");
        response.end();
    }
)