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
    /* margin-right: 20px; */
  }

  @media (max-width: 820px) {
    iframe {
      width: 100%;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;

  @media (max-width: 820px) {
    flex-direction: column;

    div:first-child {
      display: none;
    }
  }

  @media (min-width: 375px) {
    div:first-child {
      display: flex;
    }
  }
`;

export const Info = styled.div`
  width: 50%;

  text-align: center;

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

  @media (max-width: 820px) {
    width: 100%;

    svg {
      width: 50%;
    }
  }
`;

export const List = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 31vh;

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

  @media (max-width: 820px) {
    width: 100%;
  }

  @media (max-height: 812px) {
    height: 20vh;
  }
`;
