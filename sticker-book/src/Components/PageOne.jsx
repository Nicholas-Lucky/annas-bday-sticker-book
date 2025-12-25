import './PageOne.css';

import pages from './Sticker-Book-Pages.png';

import { ShadowSnorlaxPlaceholder } from './Stickers/Placeholders/ShadowSnorlaxPlaceholder.jsx';
import { ShadowSnorlaxPlaced } from './Stickers/PlacedStickers/ShadowSnorlaxPlaced.jsx';

import { Present } from './Present.jsx';
import presentBox from './StickerPresents/Present.png';
import shadowSnorlaxPresent from './StickerPresents/MasterballDetailed.png'

import { PresentWithSpoilerBlock } from './PresentWithSpoilerBlock.jsx'

function PageOne() {
  return (
    <div id="pages-div">
        <img src={pages} id="book-pages" draggable={false} />
        {localStorage.getItem("shadowSnorlaxPlaced") == "false" ? (
          <ShadowSnorlaxPlaceholder draggable={false} />
        ) : (
          <>
            <ShadowSnorlaxPlaced draggable={false} />
            {/* <Present name="shadowSnorlax" unopenedPresentImagePath={presentBox} openedPresentImagePath={shadowSnorlaxPresent} /> */}
            <PresentWithSpoilerBlock name="shadowSnorlax" unopenedPresentImagePath={presentBox} openedPresentImagePath={shadowSnorlaxPresent} />
          </>
        )}
    </div>
  );
}

export { PageOne };