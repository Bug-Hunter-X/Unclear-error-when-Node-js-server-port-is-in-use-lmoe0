const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//The above code will throw an error if you try to access a non-existent port or if the port is already in use.
//Example:If port 8080 is already in use, the server.listen(8080) method will throw an error and the server will not start.
//This is a common error, but the error message might not be very clear and it's easy to miss.
//The solution is to handle this potential error using a try-catch block or by using a more robust error handling mechanism.