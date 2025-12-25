import { useState, useEffect } from 'react';

function PresentWithSpoilerBlock({ name, unopenedPresentImagePath, openedPresentImagePath }) {
    function openPresent() {
        let key = name + "PresentIsOpened";
        localStorage.setItem(key, "true");

        window.dispatchEvent(new Event("Shadow Snorlax Present Opened!"));
    }

    function closeSpoilerWall() {
        const spoiler = document.getElementById(name + "SpoilerBlocker");
        spoiler.style.opacity = "0";

        const present = document.getElementById(name + "PresentOpened");
        spoiler.style.cursor = "default";

        // Not used at the moment
        // let key = name + "PresentSpoilerBlockIsClosed";
        // localStorage.setItem(key, "true");

        // window.dispatchEvent(new Event("Shadow Snorlax Present Spoiler Closed!"));
    }

    return (
        <div id="">
            {localStorage.getItem(name + "PresentIsOpened") == "false" ? (
                <img
                    id={name + "PresentUnopened"}
                    onClick={openPresent}
                    src={unopenedPresentImagePath}
                    draggable={false}
                />
            ) : (
                <>
                    <img
                        id={name + "PresentOpened"}
                        src={openedPresentImagePath}
                        draggable={false}
                    />
                    <div
                        id={name + "SpoilerBlocker"}
                        onClick={closeSpoilerWall}
                    />
                </>
            )}
        </div>
    );
}

export { PresentWithSpoilerBlock };