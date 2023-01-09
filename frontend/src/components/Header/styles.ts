import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors[300]};
  height: 198px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: ${({ theme }) => theme.colors[50]};
      font-size: 32px;
    }

    h2 {
      color: ${({ theme }) => theme.colors[50]};
      font-weight: 400;
      font-size: 16px;
      opacity: 0.5;
    }
  }

  > h1 {
    color: ${({ theme }) => theme.colors[50]};
    background-color: gray;
    padding: 10px;
    border-radius: 8px;
  }
`;
