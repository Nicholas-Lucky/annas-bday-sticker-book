import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Sidebar } from './Components/Sidebar.jsx';
import { SidebarButton } from './Components/SidebarButton.jsx';

function App() {
  // const [sideBarIsOpen, setSideBarState] = useState(false);
  
  // function toggleSidebar() {
  //   setSideBarState(!sideBarIsOpen);
  //   console.log(`sideBarIsOpen set to ${sideBarIsOpen}`);
  // }

  // window.addEventListener("Sidebar Button Clicked!", toggleSidebar);
  
  return (
    <div className="App">
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
