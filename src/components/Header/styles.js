import styled from 'styled-components';

export const Menu = styled.nav`
  display: flex;
`;

export const Box = styled.div`
  z-index: 2;
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
      color: #fff;
      font-size: 15px;
      font-weight: bold;
      text-decoration: none;
      text-transform: uppercase;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: #e4bb23;
        box-shadow: inset 0 -1px 0 #e4bb23;
      }

      &.active {
        color: #e4bb23;
        box-shadow: inset 0 -2px 0 #e4bb23;
      }
    }
  }
`;
