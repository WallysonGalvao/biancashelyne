import styled from 'styled-components';
import { darken } from 'polished';
import { colors } from '~/styles/colors';

export const Title = styled.h1`
  color: ${colors.primary};
  font-size: 25px;
  margin-bottom: 15px;
`;

export const FormContent = styled.div`
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
`;

export const Social = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

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
      color: ${colors.primary};
      margin: 0 50%;

      &:hover {
        color: ${colors.secondary};
      }
    }
  }
`;
