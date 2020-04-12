import styled from 'styled-components';

export const Box = styled.div`
  width: 960px;

  position: absolute;
  bottom: 0;

  h2 {
    color: #e4bb23;
    font-size: 6.5em;
    font-weight: bold;
    line-height: 1.2em;
    margin: 0;
    text-transform: uppercase;
  }

  p {
    display: flex;
    margin: 15px 0 30px;
    font-size: 13px;

    span {
      color: #fff;
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
      color: #fff;

      svg {
        margin-right: 8%;

        &:hover {
          color: #e4bb23;
        }
      }
    }
  }
`;
