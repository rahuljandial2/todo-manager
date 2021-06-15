import { Component } from 'react';
import Todos from "./todos";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      tasks: ["It's a todo", "How you doin!!", "Nice work"]
    };
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  addTask() {
    console.log(`"${this.state.task}" task added`);
    this.setState({
      task: "",
      tasks: [...this.state.tasks, this.state.task]
    });
  }
  handleChange(event) {
    this.setState({ task: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input className="App-task-input" type="text" placeholder="Title"
            value={this.state.task} onChange={this.handleChange} />
          <button className="App-add-btn" onClick={this.addTask}>Add Task</button>
        </header>
        <Todos tasks={this.state.tasks} />
      </div>
    );
  }
}
export default App;
