import React, { Component } from 'react';

import movieList from '../../movieList';
import ModalComponent from '../Modal';

import { productListImage, productWrapper, productInfo, productDescription } from './productList.styles';

class MovieComponent extends Component {

  render() {
    return (
      movieList.map((movie, i) =>
        <div className={productWrapper} key={i}>
          <img className={productListImage} src={`${movie.images[0]}`} alt="" />
          <div className={productInfo}>
            <h1 onClick={this.goToProduct}>{movie.title}</h1>
            <h4>${movie.year}</h4>
            <div className={productDescription}>{movie.description}</div>
          </div>
        </div>
      )
    )
  }
}

export default MovieComponent;
