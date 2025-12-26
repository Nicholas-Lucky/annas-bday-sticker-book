import { useState, useEffect, use } from 'react';
import './MandarinDuckPlaceholder.css';
import mandarinDuckPlaceholder from './MandarinDuckPlaceholder.png'

function MandarinDuckPlaceholder() {
    function confirmSticker() {
        console.log("confirmSticker called");
        const placeholder = document.getElementById("mandarin-duck-placeholder");
        let corners = placeholder.getBoundingClientRect();
        let width = corners.right - corners.left;
        let height = corners.bottom - corners.top;
        
        let x_min = corners.left + (width / 5);
        let x_max = corners.right - (width / 5);

        let y_min = corners.top + (height / 5);
        let y_max = corners.bottom - (height / 5);

        let confirm_x = (localStorage.getItem("mandarinDuckCenterXCurrent") >= x_min) && (localStorage.getItem("mandarinDuckCenterXCurrent") <= x_max);
        let confirm_y = (localStorage.getItem("mandarinDuckCenterYCurrent") >= y_min) && (localStorage.getItem("mandarinDuckCenterYCurrent") <= y_max);
        
        if (confirm_x && confirm_y) {
            window.dispatchEvent(new Event("Mandarin Duck Placement Confirmed!"));
            localStorage.setItem("mandarinDuckPlaced", "true");
        }

        return;
    }

    useEffect(() => {
        window.addEventListener("mandarinDuck Placed!", function(){ confirmSticker(); });
        
        // Not sure if this is needed, but preciousorigho.com says this might help with performance?
        return () => {
            window.removeEventListener("mandarinDuck Placed!", function(){ confirmSticker(); });
        };
    }, []);

    return (
        <div>
            <img src={mandarinDuckPlaceholder} id="mandarin-duck-placeholder" draggable={false}></img>
        </div>
    );
}

export { MandarinDuckPlaceholder };