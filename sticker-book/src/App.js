import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Sidebar } from './Components/Sidebar.jsx';
import { SidebarButton } from './Components/SidebarButton.jsx';

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
  // const [sideBarIsOpen, setSideBarState] = useState(false);
  
  // function toggleSidebar() {
  //   setSideBarState(!sideBarIsOpen);
  //   console.log(`sideBarIsOpen set to ${sideBarIsOpen}`);
  // }

  // window.addEventListener("Sidebar Button Clicked!", toggleSidebar);
  
  return (
    <div className="App"
      onPointerMove={e => {
        localStorage.setItem("cursorX", e.clientX);
        localStorage.setItem("cursorY", e.clientY);
      }}
    >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        {/* {sideBarIsOpen && <Sidebar />} */}
        <Sidebar />
        <SidebarButton />
      </header>
    </div>
  );
}

export default App;
