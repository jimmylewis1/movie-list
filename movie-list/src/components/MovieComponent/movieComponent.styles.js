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
  font-size: 16px;
  label: movie-title;
`;

export const productDescription = css`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  label: product-description;
`;
