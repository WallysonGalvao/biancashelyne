import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Background from '~/components/Background';
import Content from '~/components/Content';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

import { Wrapper } from './styles';

import backgrounds from './images';

export default function DefaultLayout({ children }) {
  const { pathname } = useLocation();

  const { image } = backgrounds.find(bg => bg.path === pathname);

  return (
    <Wrapper>
      <Background image={image}>
        <Header />
        <Content>{children}</Content>
        {pathname === '/contact' && <Footer />}
      </Background>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
