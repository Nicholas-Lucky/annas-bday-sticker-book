import './Sidebar.css';
import { TestRectangle } from './Stickers/TestRectangle.jsx';

function Sidebar() {
  function toggleSidebar(state) {
    console.log("called");

    const sidebar = document.getElementById("sidebar");
    console.log(sidebar);

    if (state == "opened")
      sidebar.style.transform = "translateX(-30vw)";
    else if (state == "closed")
      sidebar.style.transform = "translateX(30vw)";
  }

  window.addEventListener("Sidebar Button Opened!", function(){ toggleSidebar("opened") });
  window.addEventListener("Sidebar Button Closed!", function(){ toggleSidebar("closed") });

  return (
    <div id="sidebar">
        Hello
        <TestRectangle />
    </div>
  );
}

export { Sidebar };