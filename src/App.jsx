import { useState } from "react";
import taskbar from "./assets/taskbar.png";
import folder from "./assets/folder.png";

function App() {
  const [screens, setScreens] = useState(0);

  return (
    <div className="App">
      {screens === 0 && (
        <div className="firstScreen">
          <img className="taskbar" src={taskbar} alt="" />
          <div className="documents">
            Documents
            <img src={folder} alt="" />
          </div>
          <div className="games">
            Games
            <img src={folder} alt="" />
          </div>
          <div className="images">
            Images
            <img src={folder} alt="" />
          </div>
        </div>
      )}
      <div className="secondScreen">
        <h1 class="glitch">
          <span aria-hidden="true">404 Error</span>
          404 Error
          <span aria-hidden="true">404 Error</span>
        </h1>
      </div>
    </div>
  );
}

export default App;
