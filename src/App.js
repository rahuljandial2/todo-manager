import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  addTask() {
    console.log(this.state.task);
    this.setState({ task: "" })
  }
  handleChange(event) {
    this.setState({ task: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <input className="App-task-input" type="text" placeholder="Title"
          value={this.state.task} onChange={this.handleChange} />
        <button className="App-add-btn" onClick={this.addTask}>Add Task</button>
      </div>
    );
  }
}
export default App;
