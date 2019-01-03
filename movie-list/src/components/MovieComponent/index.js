import React, { Component } from 'react';

import movieList from '../../movieList';
import ModalComponent from '../ModalComponent';

import { movieListWrapper, movieListImage, productWrapper, movieInfo, movieTitle } from './movieComponent.styles';

class MovieComponent extends Component {

  render() {
    return (
      movieList.map((movie, i) =>
        <div className={movieListWrapper}>
          <div className={productWrapper} key={i}>
            <img className={movieListImage} src={`${movie.images[0]}`} alt="" />
            <div className={movieInfo}>
              {/* ToDo: Click movie art to show description in modal onClick={this.showModal(movie.description */}
              <div className={movieTitle}>{movie.title}</div>
              <div>{movie.year}</div>
              <ModalComponent />
            </div>
          </div>
        </div>
      )
    )
  }
}

export default MovieComponent;
