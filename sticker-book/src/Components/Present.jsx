import { useState, useEffect } from 'react';

function Present({ name, unopenedPresentImagePath, openedPresentImagePath }) {
    function openPresent() {
        let stickerPresentOpenedKey = name + "PresentIsOpened";
        localStorage.setItem(stickerPresentOpenedKey, "true");

        window.dispatchEvent(new Event("Shadow Snorlax Present Opened!"));
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
                <img
                    id={name + "PresentOpened"}
                    src={openedPresentImagePath}
                    draggable={false}
                />
            )}
        </div>
    );
}

export { Present };