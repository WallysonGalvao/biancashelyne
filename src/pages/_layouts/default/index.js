import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Background from '~/components/Background';
import Content from '~/components/Content';
import Header from '~/components/Header';

import { Wrapper } from './styles';

import useWindowSize from '~/utils/useWindowSize';
import { constants } from '~/utils/constants';

import backgrounds from './images';

export default function DefaultLayout({ children }) {
  const { pathname } = useLocation();
  const size = useWindowSize();

  const { image } = backgrounds.find(bg => bg.path === pathname);

  const isPhone = size.width < constants.SIZE;

  return (
    <Wrapper>
      <Background image={image}>
        {!isPhone && <Header />}
        <Content>{children}</Content>
      </Background>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
