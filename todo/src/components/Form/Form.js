import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {value: ''}
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    const {addNewTodo} = this.props;
    return (
      <>
        <div className="form">
          <input
          className="field"
            type="text"
            value={this.state.value}
            placeholder="enter"
            onChange={this.handleChange}
          />
          <button className="add" onClick={() => {addNewTodo(this.state.value)}}>Add</button>
        </div>
      </>
    );
  }
}

export default Form