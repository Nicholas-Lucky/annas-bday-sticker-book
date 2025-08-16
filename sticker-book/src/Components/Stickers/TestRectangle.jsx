import { useState } from 'react';
import './TestRectangle.css';

function TestRectangle() {
    const [isClicked, setClickedState] = useState(false);
    const [x, setX] = useState(localStorage.getItem("cursorX"));
    const [y, setY] = useState(localStorage.getItem("cursorY"));
    
    function rahoo() {
        setClickedState(true);
        localStorage.setItem("startX", localStorage.getItem("cursorX"));
        localStorage.setItem("startY", localStorage.getItem("cursorY"));
    }

    return (
        <div id="rectangle"
            onMouseDown={function(){rahoo()}}
            onMouseUp={function(){setClickedState(false)}}
            onPointerMove={e => {
                if (isClicked) {
                    const sticker = document.getElementById("rectangle");
                    let corners = sticker.getBoundingClientRect();
                    let width = corners.right - corners.left;
                    let height = corners.bottom - corners.top;

                    let centerX = corners.left + (width / 2);
                    let centerY = corners.top + (height / 2);

                    let differenceX = x - localStorage.getItem("startX");
                    let differenceY = y - localStorage.getItem("startY");
                    console.log(`${differenceX}, ${differenceY}`);
                    sticker.style.transform = `translateX(${differenceX}px) translateY(${differenceY}px)`;

                    // sticker.style.top = (sticker.offsetTop - differenceY) + "px";
                    // sticker.style.left = (sticker.offsetLeft - differenceX) + "px";

                    setX(e.clientX);
                    setY(e.clientY);
                }
            }}
        >
            {x}
            <br></br>
            {y}
        </div>
    );
}

export { TestRectangle };