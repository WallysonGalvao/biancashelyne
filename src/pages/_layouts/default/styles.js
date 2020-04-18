import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
`;

export const Background = styled.div`
  background-attachment: fixed;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

  padding: 20px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  position: relative;
  width: 100%;

  /* &:after {
    background: rgba(0, 0, 0, 0.5);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  } */
`;
