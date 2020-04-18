import styled from 'styled-components';
import { colors } from '~/styles/colors';

export const Container = styled.footer`
  font-size: 15px;
  align-self: center;
  color: ${colors.primary};
  position: absolute;
  bottom: 0;

  a {
    color: ${colors.primary};
    &:hover {
      color: ${colors.secondary};
      text-decoration: underline;
    }
  }

  @media (max-width: 820px) {
    font-size: 1.3rem;
  }

  @media (max-width: 320px) {
    font-size: 1.1rem;
  }
`;
