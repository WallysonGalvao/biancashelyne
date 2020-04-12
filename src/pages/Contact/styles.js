import styled from 'styled-components';
import { darken } from 'polished';

export const Title = styled.h1`
  color: #fff;
  font-size: 25px;
  margin-bottom: 15px;
`;

export const FormContent = styled.div`
  width: 50%;
  padding-right: 20px;
  color: #fff;

  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  label {
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
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
  }

  input:focus {
    border-color: #111;
  }

  button {
    display: block;
    /* background: #111; */
    background: ${darken(0.2, '#e4bb23')};
    color: #fff;
    border: 0;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    padding: 16px;
    font-weight: bold;
    font-size: 15px;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #e4bb23;
  }
`;

export const Social = styled.div`
  width: 50%;
  padding-left: 20px;

  div {
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-around;
    width: 25%;

    a {
      font-size: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      margin: 0 50%;

      &:hover {
        color: #e4bb23;
      }
    }
  }
`;

export const Footer = styled.footer`
  z-index: 2;
  font-size: 15px;
  align-self: center;
  color: #fff;

  a {
    color: #fff;
    &:hover {
      color: #e4bb23;
      text-decoration: underline;
    }
  }
`;
