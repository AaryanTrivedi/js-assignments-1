/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    } else {
      throw new Error("Invalid index");
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      throw new Error("Invalid index");
    }
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      throw new Error("Invalid index");
    }
  }

  clear() {
    this.todos = [];
  }
}

// Test the Todo class
const todoList = new Todo();

todoList.add("Buy groceries");
todoList.add("Complete homework");
console.log("All Todos:", todoList.getAll()); // Expected output: ["Buy groceries", "Complete homework"]

todoList.update(0, "Buy fruits");
console.log("Updated Todo:", todoList.get(0)); // Expected output: "Buy fruits"

todoList.remove(1);
console.log("Remaining Todos:", todoList.getAll()); // Expected output: ["Buy fruits"]

todoList.clear();
console.log("Cleared Todos:", todoList.getAll()); // Expected output: []
