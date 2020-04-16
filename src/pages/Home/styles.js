import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Box = styled.div`
  position: absolute;
  bottom: 0;

  @media (max-width: 820px) {
    img {
      width: 100%;
    }
  }
`;

export const Social = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-evenly;

  font-size: 13px;
  color: ${colors.primary};

  div {
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 10%;

    span {
      text-transform: uppercase;
      transition: all 0.2s ease-in-out;
      margin-bottom: 20%;
    }

    svg {
      color: ${colors.primary};

      font-size: 2rem;
    }
  }

  svg {
    margin-right: 8%;

    &:hover {
      color: ${colors.secondary};
    }
  }
`;
