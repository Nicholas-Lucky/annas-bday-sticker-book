import { useState, useEffect } from 'react';
import './ShadowSnorlax.css';
import snorlax from './ShadowSnorlax.png'

/* Ideally I don't think we would need to use local storage to track if a sticker is clicked,
 * so if we are able to find a way that works then we might switch */
function initializeLocalStorage() {
  const shadowSnorlaxIsClicked = localStorage.getItem("shadowSnorlaxIsClicked") || "";
  if (shadowSnorlaxIsClicked === "")
    localStorage.setItem("shadowSnorlaxIsClicked", "false");
}
initializeLocalStorage();

function ShadowSnorlax() {
    const [isClicked, setClickedState] = useState(false);
    const [centerX, setX] = useState(0); // To be displayed on the sticker for testing
    const [centerY, setY] = useState(0); // To be displayed on the sticker for testing
    
    // When the sticker is clicked on
    function setCurrentPosition() {
        // for debugging; remove if we're not using this
        localStorage.setItem("shadowSnorlaxPlaced", "false");

        console.log("Sticker clicked");

        if (localStorage.getItem("shadowSnorlaxIsClicked") === "false") {
            // setClickedState(true);
            localStorage.setItem("shadowSnorlaxIsClicked", "true");

            const sticker = document.getElementById("snorlax");
            // if (sticker.getAttribute("draggable") != false)
            //     sticker.setAttribute("draggable", false);

            let corners = sticker.getBoundingClientRect();
            
            let width = corners.right - corners.left;
            let height = corners.bottom - corners.top;
            
            let centerX = corners.left + (width / 2);
            let centerY = corners.top + (height / 2);
            
            localStorage.setItem("shadowSnorlaxCenterX", centerX);
            localStorage.setItem("shadowSnorlaxCenterY", centerY);
            localStorage.setItem("shadowSnorlaxCenterXCurrent", centerX);
            localStorage.setItem("shadowSnorlaxCenterYCurrent", centerY);

            // To be displayed on the sticker for testing
            setX(centerX);
            setY(centerY);

            let differenceX = localStorage.getItem("cursorX") - centerX;
            let differenceY = localStorage.getItem("cursorY") - centerY;

            // Initialize the cursor offset so we can move a sticker from anywhere on the sticker 
            let cursorOffsetX = localStorage.getItem("cursorOffsetX") || "";
            if (cursorOffsetX === "") {
                localStorage.setItem("cursorOffsetX", differenceX);
            }

            let cursorOffsetY = localStorage.getItem("cursorOffsetY") || "";
            if (cursorOffsetY === "") {
                localStorage.setItem("cursorOffsetY", differenceY);
            }
        }
    }

    // When the sticker was clicked and is now no longer clicked
    function resetPosition() {
        window.dispatchEvent(new Event("Shadow Snorlax Placed!"));

        // setClickedState(false);
        localStorage.setItem("shadowSnorlaxIsClicked", "false");

        // Reset the sticker position
        const sticker = document.getElementById("snorlax");
        sticker.style.transform = `translateX(${0}px) translateY(${0}px)`;

        // Reset the cursor offset
        localStorage.setItem("cursorOffsetX", "");
        localStorage.setItem("cursorOffsetY", "");
    }

    // When the sticker is clicked and the mouse is moving it
    function moveSticker() {
        if (localStorage.getItem("shadowSnorlaxIsClicked") === "true") {
            const sticker = document.getElementById("snorlax");

            let differenceX = localStorage.getItem("cursorX") - localStorage.getItem("shadowSnorlaxCenterX") - localStorage.getItem("cursorOffsetX");
            let differenceY = localStorage.getItem("cursorY") - localStorage.getItem("shadowSnorlaxCenterY") - localStorage.getItem("cursorOffsetY");

            sticker.style.transform = `translateX(${differenceX}px) translateY(${differenceY}px)`;

            let corners = sticker.getBoundingClientRect();
            let width = corners.right - corners.left;
            let height = corners.bottom - corners.top;

            let centerX = corners.left + (width / 2);
            let centerY = corners.top + (height / 2);

            setX(centerX);
            setY(centerY);

            localStorage.setItem("shadowSnorlaxCenterXCurrent", centerX);
            localStorage.setItem("shadowSnorlaxCenterYCurrent", centerY);
        }
    }

    // Listen for when the mouse is moving on the website in general (not just in the sticker)
    useEffect(() => {
        // document.getElementById("snorlax").setAttribute("draggable", false);
        window.addEventListener("Mouse is moving!", function(){ moveSticker(); });

        // Not sure if this is needed, but preciousorigho.com says this might help with performance?
        return () => {
            window.removeEventListener("Mouse is moving!", function(){ moveSticker(); });
        };
    }, [isClicked]);

    // console.log("rendered");
    // console.log("isClicked is" + isClicked);

    return (
        // <div id="snorlax" onMouseDown={function(){setCurrentPosition()}} onMouseUp={function(){resetPosition()}}>
        //     {/* for testing and debugging */}
        //     {centerX}
        //     <br></br>
        //     {centerY}
        // </div>

        <div>
            <img src={snorlax} id="snorlax" onMouseDown={function(){setCurrentPosition()}} onMouseUp={function(){resetPosition()}} draggable={false}></img>
        </div>
    );
}

export { ShadowSnorlax };