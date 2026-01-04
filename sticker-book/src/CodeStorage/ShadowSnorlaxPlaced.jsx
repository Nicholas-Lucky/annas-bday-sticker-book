import { useState, useEffect, use } from 'react';
import './ShadowSnorlaxPlaced.css';
import snorlaxPlaced from './ShadowSnorlaxPlaced.png'

function ShadowSnorlaxPlaced () {
    return (
        <div>
            <img src={snorlaxPlaced} id="snorlax-placed" draggable={false}></img>
        </div>
    );
}

export { ShadowSnorlaxPlaced };