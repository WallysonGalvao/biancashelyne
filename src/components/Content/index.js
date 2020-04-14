import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../Menu';

import useWindowSize from '~/utils/useWindowSize';
import { constants } from '~/utils/constants';

export default function Content({ children }) {
  const size = useWindowSize();

  const isPhone = size.width < constants.SIZE;

  const Container = styled.div`
    /* border: 1px solid red; */
    z-index: 2;
    display: flex;
    margin: 0 auto;
    position: relative;
    width: 960px;
    height: 100vh;
    padding-top: 2%;

    @media (max-width: 820px) {
      width: 100%;
    }
  `;

  return (
    <Container>
      {children}
      {isPhone && <Menu />}
    </Container>
  );
}

Content.propTypes = {
  children: PropTypes.element.isRequired,
};
