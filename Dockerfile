FROM node:16-alpine
WORKDIR /app
RUN echo 'const http = require("http"); http.createServer((req, res) => res.end("Hello from Docker!")).listen(8080); console.log("Server running on 8080");' > index.js
EXPOSE 8080
CMD ["node", "index.js"]