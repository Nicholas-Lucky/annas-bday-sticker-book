import { useEffect } from 'react';
import './StickerOutline.css';

function StickerOutline({ name, unplacedStickerPath, placedStickerPath, presentComponent }) {
    function confirmSticker() {
        console.log(`confirmSticker for ${name} called`);
        const stickerOutline = document.getElementById(`${name}UnplacedID`);
        let corners = stickerOutline.getBoundingClientRect();
        let width = corners.right - corners.left;
        let height = corners.bottom - corners.top;
        
        let xMin = corners.left + (width / 5);
        let xMax = corners.right - (width / 5);

        let yMin = corners.top + (height / 5);
        let yMax = corners.bottom - (height / 5);

        let cursorIsInXBounds = (localStorage.getItem(`${name}CenterXCurrent`) >= xMin) && (localStorage.getItem(`${name}CenterXCurrent`) <= xMax);
        let cursorIsInYBounds = (localStorage.getItem(`${name}CenterYCurrent`) >= yMin) && (localStorage.getItem(`${name}CenterYCurrent`) <= yMax);
        
        if (cursorIsInXBounds && cursorIsInYBounds) {
            window.dispatchEvent(new Event(`${name} Placement Confirmed!`));
            localStorage.setItem(`${name}Placed`, "true");
        }

        return;
    }

    useEffect(() => {
        window.addEventListener(`${name} Placed!`, function(){ confirmSticker(); });
        
        // Not sure if this is needed, but preciousorigho.com says this might help with performance?
        return () => {
            window.removeEventListener(`${name} Placed!`, function(){ confirmSticker(); });
        };
    }, []);

    return (
        <div>
            {localStorage.getItem(`${name}Placed`) == "false" ? (
                <img src={unplacedStickerPath} class={`${name}OnStickerBook UnplacedSticker`} id={`${name}UnplacedID`} draggable={false}></img>
            ) : (
                <>
                    <img src={placedStickerPath} class={`${name}OnStickerBook`} draggable={false}></img>
                    {presentComponent}
                </>
            )}
        </div>
    );
}

export { StickerOutline };

