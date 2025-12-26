import './Sidebar.css';
import { TestRectangle } from './Stickers/TestRectangle.jsx';
import { ShadowSnorlax } from './Stickers/ShadowSnorlax.jsx';
import { Sticker } from './Stickers/Sticker.jsx';

import snorlax from './Stickers/ShadowSnorlax.png';
import mandarinDuck from './Stickers/MandarinDuck.png';

function Sidebar({ stickerNames }) {
  let stickerImages = [snorlax, mandarinDuck];

  function toggleSidebar(state) {
    // console.log("called");

    const sidebar = document.getElementById("sidebar");
    // console.log(sidebar);

    if (state == "opened")
      sidebar.style.transform = "translateX(-30vw)";
    else if (state == "closed")
      sidebar.style.transform = "translateX(30vw)";
  }

  window.addEventListener("Sidebar Button Opened!", function(){ toggleSidebar("opened") });
  window.addEventListener("Sidebar Button Closed!", function(){ toggleSidebar("closed") });

  // Only show stickers that haven't already been placed
  let stickersToShow = [];
  let index = 0;
  for (const sticker in stickerNames) {
    // We can add the test rectangle sticker in the return statement if needed
    if (stickerNames[sticker] == "testRectangle") {
      index++;
      continue;
    }

    let stickerPlacedKey = stickerNames[sticker] + "Placed";
    const key = localStorage.getItem(stickerPlacedKey) || "";
    // console.log(`${stickerPlacedKey} IS ${key}`);

    if (key == "false") {
      stickersToShow.push(<li key={index}><Sticker name={stickerNames[sticker]} imagePath={stickerImages[index - 1]}/></li>);
    }

    index++;
  }

  return (
    <div id="sidebar">
      {/* <TestRectangle /> */}
      {/* <Sticker name="testSnorlax" imagePath={snorlax}/> */}

      {stickersToShow}
    </div>
  );
}

export { Sidebar };