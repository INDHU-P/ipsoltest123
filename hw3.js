const http = require('http');

const hostname = '127.0.0.1';
const port = 9090;
const num1 = 1;
const num2 = 3;
const sum = num1 + num2;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end(`The Sum of two number is ${sum}`);
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
	console.log("Consoles Hello World");
	console.log("Console Hello World123");
});