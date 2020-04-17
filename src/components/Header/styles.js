import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Menu = styled.nav`
  display: flex;
`;

export const Box = styled.div`
  margin: 0 auto;
  position: relative;
  width: 960px;
`;

export const List = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;

  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0 25px;
    a {
      color: ${colors.primary};
      font-size: 15px;
      font-weight: bold;
      text-decoration: none;
      text-transform: uppercase;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: ${colors.secondary};
        box-shadow: inset 0 -1px 0 ${colors.secondary};
      }

      &.active {
        color: ${colors.secondary};
        box-shadow: inset 0 -2px 0 ${colors.secondary};
      }
    }
  }
`;
