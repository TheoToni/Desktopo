import { useState } from "react";
import taskbar from "./assets/taskbar.png";
import folder from "./assets/folder.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <img className="taskbar" src={taskbar} alt="" />
      <div className="documents">
        Documents
        <img src={folder} alt="" />
      </div>
    </div>
  );
}

export default App;
