const data = require("./data");

class Controller {
  // Getting all todos
  async getTodos() {
    return new Promise((resolve, reject) => resolve(data));
  }

  // Getting a single todo by ID
  async getTodo(id) {
    return new Promise((resolve, reject) => {
      let todo = data.find((todo) => todo.id === parseInt(id));
      if (todo) {
        resolve(todo);
      } else {
        reject(`Todo with id ${id} not found`);
      }
    });
  }

  // Creating a new todo
  async createTodo(todo) {
    return new Promise((resolve, reject) => {
      let newTodo = {
        id: Math.floor(6 + Math.random() * 10), // Generate random id
        ...todo
      };
      data.push(newTodo); // Add to the existing data
      resolve(newTodo);
    });
  }

  // Updating a todo
  async updateTodo(id) {
    return new Promise((resolve, reject) => {
      let todo = data.find((todo) => todo.id === parseInt(id));
      if (!todo) {
        reject(`No todo with id ${id}`);
      }
      todo.completed = true;  // Mark as completed
      resolve(todo);
    });
  }

  // Removing a todo
  async removeTodo(id) {
    return new Promise((resolve, reject) => {
      let todoIndex = data.findIndex((todo) => todo.id === parseInt(id));
      if (todoIndex === -1) {
        reject(`No todo with id ${id}`);
      }
      data.splice(todoIndex, 1);  // Remove from data array
      resolve("Todo deleted successfully");
    });
  }
}

module.exports = Controller;
