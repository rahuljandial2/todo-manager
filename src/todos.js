import { Component } from "react";

class Todo extends Component {
  handleCheckbox() {
    this.props.changeCheckbox(this.props.index);
  }
  render() {
    return (
      <div className="todo-item">
        <input
          id={this.props.index}
          className="todo-checkbox"
          type="checkbox"
          checked={this.props.task.done}
          onChange={this.handleCheckbox.bind(this)} />
        <label className={`todo-label ${this.props.task.done ? "todo-label-done" : ""}`} htmlFor={this.props.index}>
          {this.props.task.title}
        </label>
      </div>
    );
  }
}

export default Todo;