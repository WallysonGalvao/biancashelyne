import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  h1 {
    color: #fff;
    font-size: 25px;
    margin-bottom: 15px;
  }

  iframe {
    align-self: center;
    margin-right: 20px;
  }
`;

export const InfoContainer = styled.div`
  /* width: 640px; */
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

export const Info = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  color: #fff;

  span {
    font-size: 20px;
  }

  a {
    color: #fff;
    align-self: center;

    &:hover {
      color: #e4bb23;
    }
  }
`;

export const List = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  /* margin-left: 20px; */
  overflow-y: auto;
  height: 30vh;

  &::-webkit-scrollbar {
    display: none;
  }

  button {
    width: 100%;
    margin-bottom: 15px;
    padding: 12px 16px;
    border-radius: 4px;
    /* border: 2px solid #ddd; */
    border: none;
    font-size: 15px;
    /* color: #444; */
    color: #fff;
    background-color: rgba(22, 22, 22, 0.8);
    transition: border-color 0.2s;

    &.active {
      background-color: #e4bb23;
    }

    &:hover {
      /* background-color: #e4bb23; */
      box-shadow: inset 0 -1px 0 #e4bb23;
      cursor: pointer;
    }
  }
`;
