// TODO: Make code storage for other functionality of moving element

import { useState } from 'react';
import './TestRectangle.css';

function TestRectangle() {
    const [isClicked, setClickedState] = useState(false);
    const [originalCenterX, setOriginalCenterX] = useState(null);
    const [originalCenterY, setOriginalCenterY] = useState(null);
    const [centerX, setX] = useState(0);
    const [centerY, setY] = useState(0);
    const [rah, setRah] = useState(1);
    
    function setCurrentPosition() {
        if (!isClicked) {
            setClickedState(true);
            
            const sticker = document.getElementById("rectangle");
            let corners = sticker.getBoundingClientRect();
            
            let width = corners.right - corners.left;
            let height = corners.bottom - corners.top;
            
            let centerX = corners.left + (width / 2);
            let centerY = corners.top + (height / 2);
            
            setX(centerX);
            setY(centerY);

            localStorage.setItem("centerX", centerX);
            localStorage.setItem("centerY", centerY);

            localStorage.setItem("originalCenterX", originalCenterX);
            localStorage.setItem("originalCenterY", originalCenterY);
        }
    }

    function resetPosition() {
        setClickedState(false);

        const sticker = document.getElementById("rectangle");
        sticker.style.transform = `translateX(${0}px) translateY(${0}px)`;
    }

    return (
        <div id="rectangle"
            onDragStart={function(){setCurrentPosition()}}
            //onMouseUp={function(){resetPosition()}}
            onDragEnd={e => {
                setRah(rah + 1);
                console.log(rah);
                if (isClicked) {
                    const sticker = document.getElementById("rectangle");

                    let differenceX = e.clientX - localStorage.getItem("centerX");
                    let differenceY = e.clientY - localStorage.getItem("centerY");

                    sticker.style.transform = `translateX(${differenceX}px) translateY(${differenceY}px)`;

                    let corners = sticker.getBoundingClientRect();
                    let width = corners.right - corners.left;
                    let height = corners.bottom - corners.top;

                    let centerX = corners.left + (width / 2);
                    let centerY = corners.top + (height / 2);

                    // let differenceX = x - localStorage.getItem("startX");
                    // let differenceY = y - localStorage.getItem("startY");
                    // console.log(`${differenceX}, ${differenceY}`);
                    // sticker.style.transform = `translateX(${differenceX}px) translateY(${differenceY}px)`;

                    // sticker.style.top = (sticker.offsetTop - differenceY) + "px";
                    // sticker.style.left = (sticker.offsetLeft - differenceX) + "px";

                    setX(centerX);
                    setY(centerY);

                    // localStorage.setItem("centerX", centerX);
                    // localStorage.setItem("centerY", centerY);
                }
            }}
            draggable={true}
        >
            {centerX}
            <br></br>
            {centerY}
        </div>
    );
}

export { TestRectangle };