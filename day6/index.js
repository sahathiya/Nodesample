const http = require("http");
const Todo = require("./controller");
const { getReqData } = require("./utils");
const PORT = process.env.PORT || 3001;

const server = http.createServer(async (req, res) => {
  // GET => /api/todos
  if (req.url === "/api/todos" && req.method === "GET") {
    const todos = await new Todo().getTodos();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(todos));
  }

  // GET => /api/todos/:id
  else if (req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === "GET") {
    try {
      const id = req.url.split("/")[3];  // Fixed typo: `split('/')`
      const todo = await new Todo().getTodo(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(todo));
    } catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: error }));
    }
  }

  // DELETE => /api/todos/:id
  else if (req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === "DELETE") {
    try {
      const id = req.url.split("/")[3];
      const message = await new Todo().removeTodo(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message }));
    } catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: error }));
    }
  }

  // PATCH => /api/todos/:id
  else if (req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === "PATCH") {
    try {
      const id = req.url.split("/")[3];
      const updated = await new Todo().updateTodo(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(updated));
    } catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: error }));
    }
  }

  // POST => /api/todos
  else if (req.url === "/api/todos" && req.method === "POST") {
    try {
      const create = await getReqData(req);
      let todo = await new Todo().createTodo(JSON.parse(create));
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(todo));
    } catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: error }));
    }
  }

  // No route found
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
