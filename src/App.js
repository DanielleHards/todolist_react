import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App container appWrapper">
      <section className="Title">
        <h1>My Checklist</h1>
      </section>
      <section className="newTask">
        <button type="button" class="btn btn-primary">
          Add Task
        </button>
      </section>
    </div>
  );
}

export default App;
