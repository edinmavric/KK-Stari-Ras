import './Gallery.css';

const Image = ({ galleryImageData }) => {
  return (
    <div>
      {galleryImageData.map(imageData => (
        <img key={imageData.id} src={imageData.image} alt={`${imageData.id}`} />
      ))}
    </div>
  );
};

export default Image;
