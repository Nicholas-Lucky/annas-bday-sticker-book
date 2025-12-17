import { useState, useEffect } from 'react';
import './TestRectangle.css';

/* Ideally I don't think we would need to use local storage to track if a sticker is clicked,
 * so if we are able to find a way that works then we might switch */
function initializeLocalStorage() {
  const testRectangleIsClicked = localStorage.getItem("testRectangleIsClicked") || "";
  if (testRectangleIsClicked === "")
    localStorage.setItem("testRectangleIsClicked", "false");
}
initializeLocalStorage();

function TestRectangle() {
    const [isClicked, setClickedState] = useState(false);
    const [centerX, setX] = useState(0); // To be displayed on the sticker for testing
    const [centerY, setY] = useState(0); // To be displayed on the sticker for testing
    
    // When the sticker is clicked on
    function setCurrentPosition() {
        console.log("Sticker clicked");

        if (localStorage.getItem("testRectangleIsClicked") === "false") {
            // setClickedState(true);
            localStorage.setItem("testRectangleIsClicked", "true");

            const sticker = document.getElementById("rectangle");
            let corners = sticker.getBoundingClientRect();
            
            let width = corners.right - corners.left;
            let height = corners.bottom - corners.top;
            
            let centerX = corners.left + (width / 2);
            let centerY = corners.top + (height / 2);
            
            localStorage.setItem("testRectangleCenterX", centerX);
            localStorage.setItem("testRectangleCenterY", centerY);

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
        // setClickedState(false);
        localStorage.setItem("testRectangleIsClicked", "false");

        // Reset the sticker position
        const sticker = document.getElementById("rectangle");
        sticker.style.transform = `translateX(${0}px) translateY(${0}px)`;

        // Reset the cursor offset
        localStorage.setItem("cursorOffsetX", "");
        localStorage.setItem("cursorOffsetY", "");
    }

    // When the sticker is clicked and the mouse is moving it
    function moveSticker() {
        if (localStorage.getItem("testRectangleIsClicked") === "true") {
            const sticker = document.getElementById("rectangle");

            let differenceX = localStorage.getItem("cursorX") - localStorage.getItem("testRectangleCenterX") - localStorage.getItem("cursorOffsetX");
            let differenceY = localStorage.getItem("cursorY") - localStorage.getItem("testRectangleCenterY") - localStorage.getItem("cursorOffsetY");

            sticker.style.transform = `translateX(${differenceX}px) translateY(${differenceY}px)`;

            let corners = sticker.getBoundingClientRect();
            let width = corners.right - corners.left;
            let height = corners.bottom - corners.top;

            let centerX = corners.left + (width / 2);
            let centerY = corners.top + (height / 2);

            setX(centerX);
            setY(centerY);
        }
    }

    // Listen for when the mouse is moving on the website in general (not just in the sticker)
    useEffect(() => {
        window.addEventListener("Mouse is moving!", function(){ moveSticker(); });

        // Not sure if this is needed, but preciousorigho.com says this might help with performance?
        return () => {
            window.removeEventListener("Mouse is moving!", function(){ moveSticker(); });
        };
    }, [isClicked]);

    // console.log("rendered");
    // console.log("isClicked is" + isClicked);

    return (
        <div id="rectangle" onMouseDown={function(){setCurrentPosition()}} onMouseUp={function(){resetPosition()}}>
            {/* for testing and debugging */}
            {centerX}
            <br></br>
            {centerY}
        </div>
    );
}

export { TestRectangle };