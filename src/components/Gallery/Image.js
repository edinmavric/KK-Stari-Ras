import React from 'react';
import './Gallery.css';

const Image = ({ galleryImageData }) => {
  return (
    <div className="Image">
      {galleryImageData.map(imageData => (
        <img key={imageData.id} src={imageData.image} alt="" />
      ))}
    </div>
  );
};

export default Image;
