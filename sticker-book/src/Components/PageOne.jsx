import './PageOne.css';
import pages from './Sticker-Book-Pages.png';
import { ShadowSnorlaxPlaceholder } from './Stickers/Placeholders/ShadowSnorlaxPlaceholder.jsx';
import { ShadowSnorlaxPlaced } from './Stickers/PlacedStickers/ShadowSnorlaxPlaced.jsx';

function PageOne() {
  return (
    <div>
        <img src={pages} id="book-pages"></img>
        {localStorage.getItem("shadowSnorlaxPlaced") == "false" ? (
          <ShadowSnorlaxPlaceholder />
        ) : (
          <ShadowSnorlaxPlaced />
        )}
    </div>
  );
}

export { PageOne };