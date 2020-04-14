import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Box = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  h1 {
    color: ${colors.primary};
    font-size: 25px;
    margin-bottom: 15px;
  }

  iframe {
    align-self: center;
    margin-right: 20px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

export const Info = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  color: ${colors.primary};

  span {
    font-size: 20px;
  }

  a {
    color: ${colors.primary};
    align-self: center;

    &:hover {
      color: ${colors.secondary};
    }
  }
`;

export const List = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 31vh;

  &::-webkit-scrollbar {
    width: 14px;
    height: 18px;
  }
  &::-webkit-scrollbar-thumb {
    height: 6px;
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 7px;
    -webkit-border-radius: 7px;
    background-color: ${colors.secondary};
    box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05),
      inset 1px 1px 0px rgba(0, 0, 0, 0.05);
    -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05),
      inset 1px 1px 0px rgba(0, 0, 0, 0.05);
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  button {
    width: 100%;
    margin-bottom: 15px;
    padding: 12px 16px;
    border-radius: 4px;
    border: none;
    font-size: 15px;
    color: ${colors.primary};
    background-color: rgba(22, 22, 22, 0.8);
    transition: border-color 0.2s;

    &.active {
      background-color: ${colors.secondary};
    }

    &:hover {
      box-shadow: inset 0 -1px 0 ${colors.secondary};
      cursor: pointer;
    }
  }
`;
