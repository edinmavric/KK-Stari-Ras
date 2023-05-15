import './Gallery.css';
import { useState, useEffect } from 'react';
import Image from './Image';

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    fetch('/gallery')
      .then(response => response.json())
      .then(data => {
        setGalleryData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Gallery">
      <h1>Gallery</h1>
      <Image galleryImageData={galleryData} />
    </div>
  );
};

export default Gallery;
