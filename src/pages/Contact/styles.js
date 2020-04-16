import styled from 'styled-components';
import { darken } from 'polished';
import { colors } from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  margin-top: 2%;
  display: flex;
  flex-direction: column;

  @media (max-width: 820px) {
    margin-top: 0;
  }
`;

export const Title = styled.h1`
  color: ${colors.primary};
  font-size: 25px;
  margin-bottom: 15px;

  @media (max-width: 820px) {
    font-size: 1.7rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  width: 50%;
  padding-right: 20px;
  color: ${colors.primary};

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
    border: none;
    font-size: 15px;
    color: ${colors.primary};
    background-color: rgba(22, 22, 22, 0.8);
    transition: border-color 0.2s;
  }

  input:focus {
    border-color: #111;
  }

  button {
    display: block;
    background: ${darken(0.2, colors.secondary)};
    color: ${colors.primary};
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
    background-color: ${colors.secondary};
  }

  @media (max-width: 820px) {
    width: 100%;
    padding-right: 0;
  }
`;

export const Social = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  h1 {
    align-self: center;
  }

  div {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  a {
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colors.primary};

    &:hover {
      color: ${colors.secondary};
    }
  }

  @media (max-width: 820px) {
    width: 100%;
    position: absolute;
    bottom: 30px;

    img {
      width: 90%;
      align-self: center;
    }
  }

  @media (max-width: 359px) {
    div {
      position: absolute;
      bottom: 90%;
    }
    h1 {
      display: none;
      margin-bottom: 2%;
    }

    img {
      width: 50%;
      margin-top: 3%;
    }

    svg {
      width: 50%;
    }
  }
`;
