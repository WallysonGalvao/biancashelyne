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
`;
