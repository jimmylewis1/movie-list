import React, { Component } from 'react';

import movieList from '../../movieList';
import ModalComponent from '../ModalComponent';

import { productListImage, productWrapper, productInfo } from './productList.styles';

class MovieComponent extends Component {

  render() {
    return (
      movieList.map((movie, i) =>
        <div className={productWrapper} key={i}>
          <img className={productListImage} src={`${movie.images[0]}`} alt="" />
          <div className={productInfo}>
            <h1 onClick={this.goToProduct}>{movie.title}</h1>
            <h4>${movie.year}</h4>
            <ModalComponent />
          </div>
        </div>
      )
    )
  }
}

export default MovieComponent;
