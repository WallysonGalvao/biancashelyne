import React from 'react';
import styled from 'styled-components';

import { colors } from '~/styles/colors';

export default function Footer() {
  const Container = styled.footer`
    z-index: 2;
    font-size: 15px;
    align-self: center;
    color: ${colors.primary};

    a {
      color: ${colors.primary};
      &:hover {
        color: ${colors.secondary};
        text-decoration: underline;
      }
    }
  `;

  return (
    <Container>
      <a
        href="https://linkedin.com/in/wallyson-galvao"
        target="_blank"
        rel="noopener noreferrer"
      >
        Copyright © 2020 Desenvolvido por Wallyson Galvão
      </a>
    </Container>
  );
}
