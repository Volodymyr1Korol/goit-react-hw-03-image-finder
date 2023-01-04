import '../styles.css';
import PropTypes from 'prop-types';

export const GalleryList = ({ images, setLargeImageURL }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <li
          key={image.id}
          onClick={() => setLargeImageURL(image.largeImageURL)}
          className="ImageGalleryItem"
        >
          <img
            src={image.previewURL}
            alt={image.tags}
            className="ImageGalleryItem-image"
          />
        </li>
      ))}
    </ul>
  );
};

GalleryList.propTypes = {
  setLargeImageURL: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    previewURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
}))}