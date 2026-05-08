<<<<<<< HEAD
const http = require('http');

// 1. CREATE SERVER FIRST
const server = http.createServer((req, res) => {

    if (req.url == "/boys") {

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write("<h1>Welcome to Darshan’s Ctrl+C Ctrl+V Zone 💀😅🔥</h1>");
        res.write("<h3>Bro's and My Dear Girls, Just Execute & Escape This Lab 😎🚀</h3>");

        res.end();
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1>404 Page Not Found</h1>");
    }

});

// 2. THEN LISTEN (IMPORTANT)
const PORT = process.env.PORT || 4000;

server.listen(PORT, "0.0.0.0", () => {
    console.log("Server Running...");
});
=======
const http = require('http');

// 1. CREATE SERVER FIRST
const server = http.createServer((req, res) => {

    if (req.url == "/boys") {

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write("<h1>Welcome to Darshan’s Ctrl+C Ctrl+V Zone 💀😅🔥</h1>");
        res.write("<h3>Bro's and My Dear Girls, Just Execute & Escape This Lab 😎🚀</h3>");

        res.end();
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1>404 Page Not Found</h1>");
    }

});

// 2. THEN LISTEN (IMPORTANT)
const PORT = process.env.PORT || 4000;

server.listen(PORT, "0.0.0.0", () => {
    console.log("Server Running...");
});
>>>>>>> 0efca030cb857b17d89b56f3c77788ab30525805
