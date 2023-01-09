import styled from 'styled-components';

export const Overlay = styled.div`
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: ${({ theme }) => theme.colors[50]};
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      line-height: 0;
      border: none;
      background-color: transparent;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 2px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .details-user {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 10px;
    gap: 10px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
    }

    .details-hotel {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;

      .details {
        margin-left: 10px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
      }
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 18px;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    background-color: ${({ theme }) => theme.colors[700]};
    border-radius: 48px;
    border: 0;
    color: ${({ theme }) => theme.colors[50]};
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .secondary {
    padding: 12px 24px;
    color: #D73035;
    font-weight: bold;
    border: 0;
    background: transparent;
    margin-top: 12px;
  }
`;
