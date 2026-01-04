import { useState, useEffect, use } from 'react';
import './MandarinDuckPlaced.css';
import mandarinDuckPlaced from './MandarinDuckPlaced.png'

function MandarinDuckPlaced () {
    return (
        <div>
            <img src={mandarinDuckPlaced} id="mandarin-duck-placed" draggable={false}></img>
        </div>
    );
}

export { MandarinDuckPlaced };