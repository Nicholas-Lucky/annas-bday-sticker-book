import './PageOne.css';

import pages from './Sticker-Book-Pages.png';

import { StickerOutline } from './Stickers/PlacedStickers/StickerOutline.jsx';

import shadowSnorlaxUnplaced from './Stickers/Placeholders/ShadowSnorlaxPlaceholder.png';
import shadowSnorlaxPlaced from './Stickers/PlacedStickers/ShadowSnorlaxPlaced.png';
import shadowSnorlaxPresent from './StickerPresents/MasterballDetailed.png';

import mandarinDuckUnplaced from './Stickers/Placeholders/MandarinDuckPlaceholder.png';
import mandarinDuckPlaced from './Stickers/PlacedStickers/MandarinDuckPlaced.png';
import mandarinDuckPresent from './StickerPresents/Butter.png';

import { Present } from './Present.jsx';
import { PresentWithSpoilerBlock } from './PresentWithSpoilerBlock.jsx';
import presentBox from './StickerPresents/Present.png';

function PageOne() {
  return (
    <div id="pages-div">
        <img src={pages} id="book-pages" draggable={false} />

        <StickerOutline
          name="shadowSnorlax"
          unplacedStickerPath={shadowSnorlaxUnplaced}
          placedStickerPath={shadowSnorlaxPlaced}
          presentComponent={<Present name="shadowSnorlax" unopenedPresentImagePath={presentBox} openedPresentImagePath={shadowSnorlaxPresent} />}
        />

        <StickerOutline
          name="mandarinDuck"
          unplacedStickerPath={mandarinDuckUnplaced}
          placedStickerPath={mandarinDuckPlaced}
          presentComponent={<PresentWithSpoilerBlock name="mandarinDuck" unopenedPresentImagePath={presentBox} openedPresentImagePath={mandarinDuckPresent} />}
        />
    </div>
  );
}

export { PageOne };