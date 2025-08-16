import { useState } from 'react';
import './SidebarButton.css';

function SidebarButton() {
    const [sidebarIsOpen, setSidebarState] = useState(false);

    function buttonClicked() {
        if (sidebarIsOpen)
            window.dispatchEvent(new Event("Sidebar Button Closed!"));
        else
            window.dispatchEvent(new Event("Sidebar Button Opened!"));

        setSidebarState(!sidebarIsOpen);
    }

    return (
        <div id="sidebar-button">
            <button onClick={buttonClicked}>| | |</button>
        </div>
    );
}

export { SidebarButton };