import { Component } from 'react';
import Todo from "./todos";
import tasks from './data.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
    this.addTask = this.addTask.bind(this);
    this.changeTaskInput = this.changeTaskInput.bind(this);
    this.changeCheckbox = this.changeCheckbox.bind(this);
  }
  addTask() {
    tasks.push({
      title: this.state.task,
      done: false
    });
    this.setState({ task: "" });
  }
  changeTaskInput(event) {
    this.setState({ task: event.target.value });
  }
  changeCheckbox(index) {
    console.log(`${index + 1} checkbox changed`);
    tasks[index].done = !tasks[index].done;
    this.forceUpdate();
  }
  render() {
    let emptyTasks;
    if (tasks.length == 0) {
      emptyTasks = <h1>Looks like there is no task here...</h1>;
    } else {
      emptyTasks = null;
    }
    return (
      <div className="App">
        <header className="App-header">
          <input className="App-task-input" type="text" placeholder="Title"
            value={this.state.task} onChange={this.changeTaskInput} />
          <button className="App-add-btn" onClick={this.addTask}>Add Task</button>
        </header>
        <main className="todos">
          {emptyTasks}
          {tasks.map((t, i) => <Todo task={t} key={i} index={i} changeCheckbox={this.changeCheckbox} />)}
        </main>
      </div>
    );
  }
}
export default App;
