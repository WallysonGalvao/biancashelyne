import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Event = styled.div`
  padding-top: 2%;

  color: ${colors.primary};

  h1 {
    font-size: 25px;
  }

  p {
    margin-top: 10px;
    font-size: 20px;
  }

  @media (max-width: 820px) {
    padding-top: 0;
  }
`;

export const Container = styled.div`
  overflow-y: auto;

  margin-top: 5px;
  width: 100%;

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
`;
