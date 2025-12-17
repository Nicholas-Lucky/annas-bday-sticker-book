import { useState, useEffect } from 'react';

function Sticker({name, imagePath}) {
    const [isClicked, setClickedState] = useState(false);
    const [centerX, setX] = useState(0); // To be displayed on the sticker for testing
    const [centerY, setY] = useState(0); // To be displayed on the sticker for testing
    
    let localStorageKeyForStickerClickState = name + "IsClicked";
    let localStorageKeyForStickerCenterX = name + "CenterX";
    let localStorageKeyForStickerCenterY = name + "CenterY";

    /* Ideally I don't think we would need to use local storage to track if a sticker is clicked,
     * so if we are able to find a way that works then we might switch */
    function initializeLocalStorage() {
        const stickerIsClicked = localStorage.getItem(localStorageKeyForStickerClickState) || "";
        if (stickerIsClicked === "")
            localStorage.setItem(localStorageKeyForStickerClickState, "false");
    }
    initializeLocalStorage();

    // When the sticker is clicked on
    function setCurrentPosition() {
        console.log(`${name} sticker clicked`);

        if (localStorage.getItem(localStorageKeyForStickerClickState) === "false") {
            // setClickedState(true);
            localStorage.setItem(localStorageKeyForStickerClickState, "true");

            const sticker = document.getElementById(name);
            let corners = sticker.getBoundingClientRect();
            
            let width = corners.right - corners.left;
            let height = corners.bottom - corners.top;
            
            let centerX = corners.left + (width / 2);
            let centerY = corners.top + (height / 2);
            
            localStorage.setItem(localStorageKeyForStickerCenterX, centerX);
            localStorage.setItem(localStorageKeyForStickerCenterY, centerY);

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
        localStorage.setItem(localStorageKeyForStickerClickState, "false");

        // Reset the sticker position
        const sticker = document.getElementById(name);
        sticker.style.transform = `translateX(${0}px) translateY(${0}px)`;

        // Reset the cursor offset
        localStorage.setItem("cursorOffsetX", "");
        localStorage.setItem("cursorOffsetY", "");
    }

    // When the sticker is clicked and the mouse is moving it
    function moveSticker() {
        if (localStorage.getItem(localStorageKeyForStickerClickState) === "true") {
            const sticker = document.getElementById(name);

            let differenceX = localStorage.getItem("cursorX") - localStorage.getItem(localStorageKeyForStickerCenterX) - localStorage.getItem("cursorOffsetX");
            let differenceY = localStorage.getItem("cursorY") - localStorage.getItem(localStorageKeyForStickerCenterY) - localStorage.getItem("cursorOffsetY");

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
        <img
            id={name}
            src={imagePath}
            onMouseDown={function(){setCurrentPosition()}}
            onMouseUp={function(){resetPosition()}}
            draggable={false}
        />
    );
}

export { Sticker };