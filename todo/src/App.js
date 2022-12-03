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
      // value: ''
    };

    this.updateState = this.updateState.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.formUpdatingState = this.formUpdatingState.bind(this);
  }

  updateState = (id) => {
    this.setState({todos: this.state.todos.map((item) => id === item.id ? {...item, isDone: !item.isDone} : item)})
  }

  formUpdatingState = (newTodo) => {
    this.setState({todos: newTodo})
  }

  // handleChange(e) {
  //   this.setState({value: e.target.value});
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.setState({todos: [...this.state.todos, {id: Date.now(), title: this.state.value, isDone: false}]})
  //   this.setState({value: ''})
  // }

  removeTodo = (id) => {
    this.setState({todos: this.state.todos.filter(item => id !== item.id) })
  }

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
        <Form todos={this.state.todos} formUpdatingState={this.formUpdatingState}/>
        {/* <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} placeholder="enter" onChange={this.handleChange} />
          <button type="submit">Add</button>
        </form> */}
      </div>
    );
  }
}

export default App;
