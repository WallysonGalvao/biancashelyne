import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Content({ children }) {
  const Container = styled.div`
    /* border: 1px solid red; */
    z-index: 2;
    display: flex;
    margin: 0 auto;
    position: relative;
    width: 960px;
    height: 100vh;
    padding-top: 2%;
  `;

  return <Container>{children}</Container>;
}

Content.propTypes = {
  children: PropTypes.element.isRequired,
};
