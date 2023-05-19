import React, { useState, useEffect } from 'react';
import Image from './Image';
import './Gallery.css';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const goToPreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

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

  const filteredGalleryData = galleryData.filter(
    imageData => imageData.page === currentPage
  );

  return (
    <motion.div
      className="Gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Foto Album nase ekipe</h1>
      <div className="Gallery__button-container">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          &lt;
        </button>
        <p>
          Stranica: <span>{currentPage}</span> od 4
        </p>
        <button onClick={goToNextPage} disabled={currentPage === 4}>
          &gt;
        </button>
      </div>
      <Image galleryImageData={filteredGalleryData} />
    </motion.div>
  );
};

export default Gallery;
