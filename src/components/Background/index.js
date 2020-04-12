import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Background({ image, children }) {
  return <Container image={image}>{children}</Container>;
}

Background.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  image: PropTypes.string.isRequired,
};
