import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
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
}
initializeLocalStorage();

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  
  return (
    <div className="App"
      onPointerMove={e => {
        window.dispatchEvent(new Event("Mouse is moving!"));
        localStorage.setItem("cursorX", e.clientX);
        localStorage.setItem("cursorY", e.clientY);

        setX(e.clientX);
        setY(e.clientY);
      }}
    >
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <PageOne />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        X: {x}
        Y: {y}
        {/* {sideBarIsOpen && <Sidebar />} */}
        <Sidebar />
        <SidebarButton />
      </header>
    </div>
  );
}

export default App;
