import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Content = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: row;

  font-size: 16px;

  color: ${colors.primary};

  &:not(:first-child) {
    margin-top: 20px;
  }
  padding: 10px 0;
  background-color: rgba(22, 22, 22, 0.8);
  border-radius: 4px;

  &:hover {
    box-shadow: inset 0 -1px 0 ${colors.secondary};
  }
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 10%;
  margin-left: 15px;

  .date {
    font-size: 25px;
    font-weight: bold;
    color: ${colors.secondary};
  }

  @media (max-width: 820px) {
    text-align: center;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;

  span:first-child {
    color: ${colors.secondary};
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin: 0 5px;
    }

    a {
      color: ${colors.primary};
      &:hover {
        color: ${colors.secondary};
      }
    }
  }

  span {
    margin-left: 5px;
  }

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;

    div {
      justify-content: unset;
      align-items: flex-start;
      margin-top: 10px;

      svg {
        margin-right: 5px;
      }
    }

    span {
      margin: 0;
    }
  }
`;
