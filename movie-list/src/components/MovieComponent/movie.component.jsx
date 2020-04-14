import React, { useState } from 'react';
import Modal from 'react-modal';
import { movieList } from '../../movieList.js';

import * as styles from './movieComponent.styles';

const customStyles = {
  content: {
    width: '40%',
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
  const [movieData, setMovieData] = useState({});

  const openMovieModal = (movie) => {
    setMovieData(movie);
    setModalIsOpen(true);
  };
  console.log('movieData: ', movieData);

return (
  <>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <div className={styles.modalTopWrapper}>
        <div className={styles.closeModalBtn} onClick={() => setModalIsOpen(false)}>X</div>
      </div>
      <div className={styles.modalContentWrapper}>
        <div className={styles.modalDataWrapper}>
          <img className={styles.movieListImage} src={`${movieData.image}`} alt="" />
          <div className={styles.modalMovieInfo}>
            <h2 className={styles.modalH2}>{movieData.title} ({movieData.year})</h2>
            <div className={styles.modalDescription}>{movieData.description}</div>
            <button className={styles.modalWatchBtn}>Watch</button>
          </div>
        </div>
      </div>
    </Modal>  
    <div className={styles.moviesListWrapper}>
      { movieList.map((movie, i) => (
        <div className={styles.movieListWrapper} key={i}>
          <div className={styles.productWrapper} onClick={() => openMovieModal(movie)}>
            <img className={styles.movieListImage} src={`${movie.image}`} alt="" />
            <div className={styles.movieInfo}>
              {/* ToDo: Click movie art to show description in modal onClick={this.showModal(movie.description */}
              <div className={styles.movieTitle}>{movie.title}</div>
              <div>{movie.year}</div>
            </div>
          </div>
        </div>
        ))
      }
    </div>
  </>
  );
}