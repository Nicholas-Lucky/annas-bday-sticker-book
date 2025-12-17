import logo from './logo.svg';
import './App.css';
import { use, useEffect, useState } from 'react';
import { Sidebar } from './Components/Sidebar.jsx';
import { SidebarButton } from './Components/SidebarButton.jsx';
import { PageOne } from './Components/PageOne.jsx';

function initializeLocalStorage() {
  const cursorX = localStorage.getItem("cursorX") || "";
  if (cursorX == "")
    localStorage.setItem("cursorX", 0);

  const cursorY = localStorage.getItem("cursorY") || "";
  if (cursorY == "")
    localStorage.setItem("cursorY", 0);

  const shadowSnorlaxPlaced = localStorage.getItem("shadowSnorlaxPlaced") || "";
  if (shadowSnorlaxPlaced == "")
    localStorage.setItem("shadowSnorlaxPlaced", "false");
}
initializeLocalStorage();

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [aura, setAura] = useState(0);
  const [stickerNames, setStickerNames] = useState({
    testRectangle: "testRectangle",
    shadowSnorlax: "shadowSnorlax"
  });

  function rerender() {
    setAura(aura + 1);
  }
  
  return (
    <div className="App"
      onPointerMove={e => {
        window.dispatchEvent(new Event("Mouse is moving!"));
        localStorage.setItem("cursorX", e.clientX);
        localStorage.setItem("cursorY", e.clientY);

        setX(e.clientX);
        setY(e.clientY);
      }}
      onMouseUp={function(){rerender()}}
    >
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <PageOne />

        {/* X: {x}
        Y: {y} */}
        Shadow Snorlax Placed?!?!?!? (DEBUG POV?!?!?!): {localStorage.getItem("shadowSnorlaxPlaced")}
        {/* {sideBarIsOpen && <Sidebar />} */}
        <Sidebar />
        <SidebarButton />
      </header>
    </div>
  );
}

export default App;
