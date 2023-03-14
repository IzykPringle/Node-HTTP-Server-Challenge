import http from 'http';
const host = "localhost", port = 3001, server = http.createServer((request, response) => {response.end("Hello, Galvanize!") });
server.listen(port, host, () => {console.log(`Server running at http://${host}:${port}/`)});