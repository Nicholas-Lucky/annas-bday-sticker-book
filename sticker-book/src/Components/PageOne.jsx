import './PageOne.css';
import pages from './Sticker-Book-Pages.png';
import { ShadowSnorlaxPlaceholder } from './Stickers/Placeholders/ShadowSnorlaxPlaceholder.jsx';
import { ShadowSnorlaxPlaced } from './Stickers/PlacedStickers/ShadowSnorlaxPlaced.jsx';

function PageOne() {
  return (
    <div id="pages-div">
        <img src={pages} id="book-pages" draggable={false} />
        {localStorage.getItem("shadowSnorlaxPlaced") == "false" ? (
          <ShadowSnorlaxPlaceholder draggable={false} />
        ) : (
          <ShadowSnorlaxPlaced draggable={false}/>
        )}
    </div>
  );
}

export { PageOne };