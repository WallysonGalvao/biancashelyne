import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Button = styled.div`
  z-index: 3;
  width: 100%;
  display: ${props => (!props.open ? 'flex' : 'none')};
  align-self: baseline;
  justify-content: flex-end;

  svg {
    color: ${colors.secondary};
  }
`;

export const Nav = styled.nav`
  z-index: 2;
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /* background-color: rgba(22, 22, 22, 0.8); */
  background-color: rgba(0, 0, 0, 0.8);
  color: ${colors.secondary};
  font-size: 25px;
  text-transform: uppercase;

  ul {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    align-items: center;
  }

  a {
    color: ${colors.primary};
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;

    &.active {
      color: ${colors.secondary};
      box-shadow: inset 0 -2px 0 ${colors.secondary};
    }
  }
`;
