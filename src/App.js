import './App.css';
import { useState } from 'react';

function App() {
  const [task, setTask] = useState();
  return (
    <div className="App">
      <section>
        <input type="text" placeholder="Todo title" onChange={task => setTask(task)} />
      </section>
    </div>
  );
}

export default App;
