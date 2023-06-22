import PropTypes from "prop-types";
import tag from "../assets/icons/tag.png";

export default function BookCard(props) {
  function handleDownload() {
    const ebookPath = `/books/${props.data.value}.epub`;
    window.open(ebookPath, "_blank");
  }
  return (
    <div className="card">
      <img src={props.data.img} alt="" className="card--image" />
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
