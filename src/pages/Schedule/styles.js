import styled from 'styled-components';

export const Event = styled.div`
  width: 100%;
  /* margin: 0 auto; */
  /* margin-bottom: 22%; */
  color: #fff;
  overflow-y: auto;
  height: 89vh;

  &::-webkit-scrollbar {
    display: none;
  }

  h1 {
    font-size: 25px;
  }

  p {
    margin-top: 10px;
    font-size: 20px;
  }
`;
