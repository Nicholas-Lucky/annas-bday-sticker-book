import './PageOne.css';
import pages from './Sticker-Book-Pages.png';

function PageOne() {
  return (
    <div>
        <img src={pages} id="book-pages"></img>
    </div>
  );
}

export { PageOne };