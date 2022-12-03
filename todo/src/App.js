import React from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Row from "./components/Row/Row";

const todos = [
  {
    id: 1,
    isDone: false,
    title: "Make homework",
  },
  {
    id: 2,
    isDone: false,
    title: "Learn React",
  },
  {
    id: 3,
    isDone: true,
    title: "Repeat javaScript",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todos,
    };

    this.updateState = this.updateState.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
  }

  updateState = (id) => {
    this.setState({
      todos: this.state.todos.map((item) =>
        id === item.id ? { ...item, isDone: !item.isDone } : item
      ),
    });
  };

  addNewTodo(title) {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Date.now(), title: title, isDone: false },
      ],
    });
  }

  removeTodo = (id) => {
    this.setState({ todos: this.state.todos.filter((item) => id !== item.id) });
  };

  render() {
    return (
      <div className="container">
        <h1>My todo list:</h1>
        <div className="table">
          {this.state.todos.map((item) => (
            <Row
              title={item.title}
              key={item.id}
              isDone={item.isDone}
              id={item.id}
              updateState={this.updateState}
              removeTodo={this.removeTodo}
            />
          ))}
        </div>
        <Form
          todos={this.state.todos}
          addNewTodo={this.addNewTodo}
        />
      </div>
    );
  }
}

export default App;
