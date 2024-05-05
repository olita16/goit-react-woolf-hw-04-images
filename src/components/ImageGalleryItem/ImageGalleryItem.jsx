import { useState } from 'react';

import styles from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

function ImageGalleryItem({
  tags,
  largeImageURL,
  webformatURL,
}) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <li className={styles.imageGalleryItem}>
        <img
          className={styles.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
          onClick={toggleModal}
        />
      </li>
      {showModal && (
        <Modal onClose={toggleModal} largeImageURL={largeImageURL} alt={tags} />
      )}
    </>
  );
}

export default ImageGalleryItem;