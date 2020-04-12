import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Background({ image, children }) {
  return <Container image={image}>{children}</Container>;
}

Background.propTypes = {
  children: PropTypes.element.isRequired,
  image: PropTypes.element.isRequired,
};
