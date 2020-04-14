import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Box = styled.div`
  width: 960px;

  position: absolute;
  bottom: 0;

  h2 {
    color: ${colors.secondary};
    font-size: 6.5em;
    font-weight: bold;
    line-height: 1.2em;
    margin: 0;
    text-transform: uppercase;
  }

  img {
    bottom: 70%;
    position: absolute;
  }

  p {
    display: flex;
    margin: 15px 0 30px;
    font-size: 13px;
    width: 100%;

    span {
      color: ${colors.primary};
      text-decoration: none;
      margin-right: 15px;
      text-transform: uppercase;
      transition: all 0.2s ease-in-out;
    }
  }

  div {
    margin-left: -10px;
    display: flex;
    justify-content: space-around;
    width: 25%;

    a {
      color: ${colors.primary};

      svg {
        margin-right: 8%;

        &:hover {
          color: ${colors.secondary};
        }
      }
    }
  }

  @media (max-width: 820px) {
    margin-bottom: 50px;
    width: 100%;
    img {
      width: 95%;
    }

    p {
      margin: 30px 0 20px;
    }

    div {
      width: 57%;
      margin-left: 10px;
      justify-content: space-between;
    }
  }
`;
