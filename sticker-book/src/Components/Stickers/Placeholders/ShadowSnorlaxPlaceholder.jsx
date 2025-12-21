import { useState, useEffect, use } from 'react';
import './ShadowSnorlaxPlaceholder.css';
import snorlaxPlaceholder from './ShadowSnorlaxPlaceholder.png'

function ShadowSnorlaxPlaceholder() {
    function confirmSticker() {
        console.log("confirmSticker called");
        const placeholder = document.getElementById("snorlax-placeholder");
        let corners = placeholder.getBoundingClientRect();
        let width = corners.right - corners.left;
        let height = corners.bottom - corners.top;
        
        let x_min = corners.left + (width / 5);
        let x_max = corners.right - (width / 5);

        let y_min = corners.top + (height / 5);
        let y_max = corners.bottom - (height / 5);

        let confirm_x = (localStorage.getItem("shadowSnorlaxCenterXCurrent") >= x_min) && (localStorage.getItem("shadowSnorlaxCenterXCurrent") <= x_max);
        let confirm_y = (localStorage.getItem("shadowSnorlaxCenterYCurrent") >= y_min) && (localStorage.getItem("shadowSnorlaxCenterYCurrent") <= y_max);
        
        if (confirm_x && confirm_y) {
            window.dispatchEvent(new Event("Shadow Snorlax Placement Confirmed!"));
            localStorage.setItem("shadowSnorlaxPlaced", "true");
        }

        return;
    }

    useEffect(() => {
        window.addEventListener("shadowSnorlax Placed!", function(){ confirmSticker(); });
        
        // Not sure if this is needed, but preciousorigho.com says this might help with performance?
        return () => {
            window.removeEventListener("shadowSnorlax Placed!", function(){ confirmSticker(); });
        };
    }, []);

    return (
        <div>
            <img src={snorlaxPlaceholder} id="snorlax-placeholder" draggable={false}></img>
        </div>
    );
}

export { ShadowSnorlaxPlaceholder };