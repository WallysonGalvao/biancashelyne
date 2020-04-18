import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';

import useWindowSize from '~/utils/useWindowSize';
import { constants } from '~/utils/constants';

import { ContentContainer } from './styles';

export default function Content({ children }) {
  const size = useWindowSize();

  const isPhone = size.width < constants.SIZE;

  return (
    <ContentContainer>
      {isPhone && <Menu />}
      {children}
    </ContentContainer>
  );
}

Content.propTypes = {
  children: PropTypes.element.isRequired,
};
