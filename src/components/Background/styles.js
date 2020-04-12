import styled from 'styled-components';

export const Container = styled.div`
  background-attachment: fixed;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 20px;
  position: relative;
  width: 100%;

  &:after {
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 212, 255, 0) 75%
    );
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;
