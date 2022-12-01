import React from "react";
import "./App.css";
import Row from "./components/Row";

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
  state = {
    todos: todos,
    justClicked: null
  };

  updateState = (id) => {
    this.setState({todos: this.state.todos.map((item) => item.id === id ? {...item, isDone: !item.isDone} : item)})
    console.log(this)
  }

  render() {
    return (
      <>
        <h1>My todo list:</h1>
        <div className="table">
          {this.state.todos.map((item) => (
            <Row
              title={item.title}
              key={item.id}
              isDone={item.isDone}
              onClick={() => {this.updateState(item.id)}}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
