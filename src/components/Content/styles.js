import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  width: 960px;
  height: 100%;

  @media (max-width: 820px) {
    width: 100%;
    position: relative;
  }
`;
