import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     todos: this.props.todos,
      value: ''
    };

    console.log(this.state.todos)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({todos: [...this.state.todos, {id: Date.now(), title: this.state.value, isDone: false}]})
    this.setState({ value: "" });
  }

  render() {
    const {formUpdatingState} = this.props;
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit} onClick={() => {formUpdatingState(this.state.todos)}}>
          <input
          className="field"
            type="text"
            value={this.state.value}
            placeholder="enter"
            onChange={this.handleChange}
          />
          <button className="add" type="submit">Add</button>
        </form>
      </>
    );
  }
}

export default Form