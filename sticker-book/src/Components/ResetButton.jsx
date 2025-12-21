import { useState } from 'react';
import './ResetButton.css';

function ResetButton() {
    function resetLocalStorage() {
        console.log("resetLocalStorage called");

        localStorage.clear();

        // Dispatch this event to App.js so App.js can refresh the site to display the changes
        window.dispatchEvent(new Event("Local Storage Cleared!"));
    }

    return (
        <div>
            <button id="reset-button" onClick={resetLocalStorage}>Reset</button>
        </div>
    );
}

export { ResetButton };