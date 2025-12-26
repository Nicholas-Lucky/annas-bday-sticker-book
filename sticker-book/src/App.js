import './App.css';
import { use, useEffect, useState } from 'react';
import { Sidebar } from './Components/Sidebar.jsx';
import { SidebarButton } from './Components/SidebarButton.jsx';
import { ResetButton } from './Components/ResetButton.jsx';
import { PageOne } from './Components/PageOne.jsx';

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [reRenders, setReRenderCount] = useState(0);

  // This will be used to supply the files with the sticker names; also can be used for local storage keys for each sticker
  const [stickerNames, setStickerNames] = useState({
    testRectangle: "testRectangle",
    shadowSnorlax: "shadowSnorlax",
    mandarinDuck: "mandarinDuck"
  });

  function initializeLocalStorage() {
    // cursorX tracks the x-value of the cursor
    const cursorX = localStorage.getItem("cursorX") || "";
    if (cursorX == "")
      localStorage.setItem("cursorX", 0);

    // cursorY tracks the y-value of the cursor
    const cursorY = localStorage.getItem("cursorY") || "";
    if (cursorY == "")
      localStorage.setItem("cursorY", 0);

    for (const sticker in stickerNames) {
      // Make a key for each sticker to track if they have been placed in the sticker book
      let stickerPlacedKey = stickerNames[sticker] + "Placed";
      let key = localStorage.getItem(stickerPlacedKey) || "";
      if (key == "") {
        localStorage.setItem(stickerPlacedKey, "false");
      }

      // Make a key for each sticker to track if their present has been opened
      let stickerPresentOpenedKey = stickerNames[sticker] + "PresentIsOpened";
      key = localStorage.getItem(stickerPresentOpenedKey) || "";
      if (key == "") {
        localStorage.setItem(stickerPresentOpenedKey, "false");
      }

      // Not used at the moment
      // Make a key for each sticker to track if their spoiler block for their gifts are closed
      // let stickerSpoilerBlockClosedKey = stickerNames[sticker] + "PresentSpoilerBlockIsClosed";
      // key = localStorage.getItem(stickerSpoilerBlockClosedKey) || "";
      // if (key == "") {
      //   localStorage.setItem(stickerSpoilerBlockClosedKey, "false");
      // }
    }
  }
  initializeLocalStorage();

  function reRenderWebsite() {
    console.log("Website re-rendered");
    setReRenderCount(reRenders + 1);
  }
  
  useEffect(() => {
    window.addEventListener("Local Storage Cleared!", function(){ reRenderWebsite(); });

    window.addEventListener("Shadow Snorlax Present Opened!", function(){ reRenderWebsite(); });
    window.addEventListener("Shadow Snorlax Present Spoiler Closed!", function(){ reRenderWebsite(); });

    window.addEventListener("Mandarin Duck Present Spoiler Closed!", function(){ reRenderWebsite(); });
    window.addEventListener("Mandarin Duck Present Spoiler Closed!", function(){ reRenderWebsite(); });
    
    // Not sure if this is needed, but preciousorigho.com says this might help with performance?
    return () => {
      window.removeEventListener("Local Storage Cleared!", function(){ reRenderWebsite(); });

      window.removeEventListener("Shadow Snorlax Present Opened!", function(){ reRenderWebsite(); });
      window.removeEventListener("Shadow Snorlax Present Spoiler Closed!", function(){ reRenderWebsite(); });

      window.removeEventListener("Mandarin Duck Present Spoiler Closed!", function(){ reRenderWebsite(); });
      window.removeEventListener("Mandarin Duck Present Spoiler Closed!", function(){ reRenderWebsite(); });
    };
  }, []);

  return (
    <div className="App"
      onPointerMove={e => {
        window.dispatchEvent(new Event("Mouse is moving!"));
        localStorage.setItem("cursorX", e.clientX);
        localStorage.setItem("cursorY", e.clientY);

        setX(e.clientX);
        setY(e.clientY);
      }}
      onMouseUp={function(){ reRenderWebsite(); }}
    >
      <header className="App-header">
        <PageOne />

        {/* X: {x}
        Y: {y} */}
        {/*Shadow Snorlax Placed?!?!?!? (DEBUG POV?!?!?!): {localStorage.getItem("shadowSnorlaxPlaced")}*/}

        <Sidebar stickerNames={stickerNames} />
        <SidebarButton />
        
        <ResetButton />
      </header>
    </div>
  );
}

export default App;
