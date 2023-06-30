import PropTypes from "prop-types";
import tag from "../assets/icons/tag.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function BookCard(props) {
  function handleDownload() {
    const ebookPath = `/books/${props.data.value}.epub`;
    window.open(ebookPath, "_blank");
  }
  return (
    <div className="card">
      <LazyLoadImage src={props.data.img} alt="" className="card--image" loading="lazy" effect='blur' width="240px" height="240px" />
      <div>
        <p className="card--title">{props.data.title}</p>
        <p className="card--author">{props.data.author}</p>
        <p className="card--genre">
          <img src={tag} alt="" className="tag--icon" />
          {props.data.genre}
        </p>
      </div>
      <button className="card--btn" onClick={handleDownload}>
        Download
      </button>
      <p className="pages--count">{props.data.pages}pages</p>
    </div>
  );
}

BookCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
    pages: PropTypes.number,
  }),
};
