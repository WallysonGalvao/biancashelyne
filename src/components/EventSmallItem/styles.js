import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Content = styled.div`
  height: 69px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: ${colors.primary};

  padding: 10px 0;
  background-color: rgba(22, 22, 22, 0.8);
  border-radius: 4px;

  &:not(:first-child) {
    margin-top: 20px;
  }

  div {
    margin: 3%;
  }

  div + div {
    width: 100%;
  }
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span:first-child {
    font-weight: bold;
    color: ${colors.secondary};
  }

  span + span {
    color: ${colors.primary};
    font-size: 13px;
  }
`;

export const Name = styled.div`
  position: relative;
  top: 0;
  span {
    color: ${colors.secondary};
  }
`;

export const Hour = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span + span {
    font-size: 10px;
  }
`;
