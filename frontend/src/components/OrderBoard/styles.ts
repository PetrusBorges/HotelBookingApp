import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors[200]};
  border-radius: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;

  > header {
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  button {
    background-color: ${({ theme }) => theme.colors[50]};
    border: 1px solid ${({ theme }) => theme.colors[200]};
    height: 128px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.colors[500]};
    }

    & + button {
      margin-top: 24px;
    }
  }
`;
