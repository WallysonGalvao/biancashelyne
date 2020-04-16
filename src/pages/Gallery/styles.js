import styled from 'styled-components';
import { darken } from 'polished';

import { colors } from '~/styles/colors';

export const Container = styled.div`
  width: 100%;

  .image-gallery-icon {
    color: ${colors.secondary};
  }

  .image-gallery-icon:hover {
    color: ${darken(0.2, colors.secondary)};
  }

  .image-gallery-bullets .image-gallery-bullet.active {
    background: ${colors.secondary};
  }

  .image-gallery-bullets .image-gallery-bullet:focus,
  .image-gallery-bullets .image-gallery-bullet:hover {
    background: ${darken(0.2, colors.secondary)};
    transform: scale(1.1);
  }

  .image-gallery-thumbnails .image-gallery-thumbnails-container {
    cursor: pointer;
    text-align: center;
    transition: transform 0.45s ease-out;
    white-space: nowrap;
  }

  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:hover,
  .image-gallery-thumbnail:focus {
    outline: none;
    border: 4px solid ${colors.secondary};
  }

  .image-gallery-slide .image-gallery-description {
    /* background: rgba(0, 0, 0, 0.4); */
    font-size: 1.5rem;
    background: rgba(22, 22, 22, 0.8);
    bottom: 70px;
    color: #fff;
    left: 0;
    line-height: 1;
    padding: 10px 20px;
    position: absolute;
    white-space: normal;
    text-transform: uppercase;
  }
`;
