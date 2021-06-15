import { Component } from "react";

class Todos extends Component {
  render() {
    return (
      <main className="todo">
        {this.props.tasks.map((t, i) =>
          <div className="todo-item" key={i}>
            <input className="todo-checkbox" type="checkbox" id={t} name="" value="" checked={t.done} />
            <label className="todo-label" htmlFor={t}>{t}</label>
          </div>
        )}
      </main>
    );
  }
}

export default Todos;