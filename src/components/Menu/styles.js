import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Container = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: absolute;
  bottom: 0;

  a {
    color: ${colors.primary};

    &.active {
      color: ${colors.secondary};
      box-shadow: inset 0 -2px 0 ${colors.secondary};
    }
  }
`;
