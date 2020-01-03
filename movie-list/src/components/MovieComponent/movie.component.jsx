import React, { useState } from 'react';
import Modal from 'react-modal';
import { movieList } from '../../movieList.js';
import { ModalComponent } from '../ModalComponent/modal.component';

import * as styles from './movieComponent.styles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '6px',
  }
};

export const MovieComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const renderMovieList = () => {
    movieList.map((movie, i) =>
      <div className={styles.movieListWrapper}>
        <div className={styles.productWrapper} key={i}>
          <img className={styles.movieListImage} src={`${movie.images[0]}`} alt="" />
          <div className={styles.movieInfo}>
            {/* ToDo: Click movie art to show description in modal onClick={this.showModal(movie.description */}
            <div className={styles.movieTitle}>{movie.title}</div>
            <div>{movie.year}</div>
            <ModalComponent />
          </div>
        </div>
      </div>
    )
  };
  

return (
  <>
    {renderMovieList}
    {
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
      {/* TODO: Add X svg */}
      <div className={styles.modalTopWrapper}>
        <div className={styles.closeModalBtn} onClick={() => setModalIsOpen(false)}>X</div>
      </div>
      <div className={styles.modalContentWrapper}>
        <h2 className={styles.modalH2}>Interested in this item?</h2>
        <div className={styles.modalInstruction}>For more product information, or to schedule a time to see this item, please give Thor a call or send an email.</div>
        {/* TODO: Update Contact Info */}
        <div className={styles.modalPhoneInfo}>555-555-5555</div>
      </div>
    </Modal>  

    }
  </>
  );
}