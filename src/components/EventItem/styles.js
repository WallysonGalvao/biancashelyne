import styled from 'styled-components';

export const Content = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: row;

  font-size: 16px;

  margin-top: 20px;
  padding: 10px 0;
  background-color: rgba(22, 22, 22, 0.8);
  border-radius: 4px;

  &:hover {
    box-shadow: inset 0 -1px 0 #e4bb23;
  }
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: 15px;

  .date {
    font-size: 25px;
    font-weight: bold;
    color: #e4bb23;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: #fff;
      &:hover {
        color: #e4bb23;
      }
    }
  }

  span {
    margin-left: 5px;
  }
`;
