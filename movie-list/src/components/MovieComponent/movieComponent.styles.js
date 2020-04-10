import { css } from 'emotion';

export const movieListWrapper = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  label: movie-list-wrapper;
`;

export const productWrapper = css`
  margin: 10px;
  label: product-wrapper;
`;

export const moviesListWrapper = css`
  label: moviesListWrapper;
  display: flex;
  flex-wrap: wrap;
`;

export const movieListImage = css` 
  width: 200px;
  height: 300px;
  max-width: 100%;
  cursor: pointer;
  label: product-list-image;
`;

export const movieInfo = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  label: product-info;

  h1 {
    margin: 0;
    cursor: pointer;
  }

  h4 {
    margin: .5em 0;
  }

`;

export const movieTitle = css`
  label: movie-title;
  font-size: 16px;
  font-weight: bold;
  width: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const productDescription = css`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  label: product-description;
`;

export const modalTopWrapper = css`
  display: flex;
  justify-content: flex-end;
  label: modal-top-wrapper;
`;

export const modalContentWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  label: modal-content-wrapper;
`;

export const modalDataWrapper = css`
  label: modalDataWrapper;
  display: flex;
`;

export const closeModalBtn = css`
  cursor: pointer;
  label: close-modal-btn;
`;

export const modalH2 = css`
  text-align: center;
  margin-left: 15px;
  label: modalH2;
`;

export const modalDescription = css`
  font-size: 18px;
  margin-bottom: 2em;
  margin-left: 15px;
  text-align: left;
  label: modal-description;
`;

export const modalWatchBtn = css`
  label: modal-phone-info;
  font-size: 22px;
  margin: 0 auto;
  cursor: pointer;
`;

export const modalWrapper = css`
  display: flex;
  justify-content: center;
  label: modal-wrapper;
`;

export const modalImgWrapper = css`
  label: modalImgWrapper;
  display: flex;
`;

export const modalMovieInfo = css`
  label: modalMovieInfo;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
