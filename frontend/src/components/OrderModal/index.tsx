// Styled-Components
import { Overlay, ModalBody, OrderDetails, Actions } from './styles';

// Images
import CloseIcon  from '../../assets/images/close-icon.svg';

// Types
import { Order } from '../../types/orders';

// Ultils
import { formatCurrency } from '../../utils/formatCurrency';

interface OrderModalProps {
  visible: boolean;
  order: null | Order;
  onClose: () => void;
  onCancelOrder: () => Promise<void>;
  onChangeOrderStatus: () => Promise<void>;
  isLoading: boolean;
}

export function OrderModal({ visible, order, onClose, onCancelOrder, onChangeOrderStatus, isLoading }: OrderModalProps) {

  if (!visible || !order) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Detalhes da reserva:</strong>

          <button type='button' onClick={onClose}>
            <img src={CloseIcon} alt="CloseIcon" />
          </button>
        </header>

        <div className="status-container">
          <small>Status da reserva:</small>
          <div>
            <span>{order.status === 'WAITING' && 'Em espera'}</span>
            <span>{order.status === 'IS_HAPPENING' && 'Reservado'}</span>
            <span>{order.status === 'DONE' && 'Reserva finalizada'}</span>
          </div>
        </div>

        <OrderDetails>
          <strong>Detalhes da reserva:</strong>

          <div className="details-user">
            <small>Nome: {order.name}</small>
            <small>Data de chegada: {order.initialDate}</small>
            <small>Data de saída: {order.finalDate}</small>

            {order.chosenHotel.map(({ _id, hotel }) => (
              <div className="details-hotel" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${hotel.imagePath}`}
                  alt={hotel.name}
                />

                <div className="details">
                  <strong>{hotel.name}</strong>
                  <small>{hotel.description}</small>
                  <small>{formatCurrency(hotel.price)}</small>
                </div>
              </div>
            ))}
          </div>
        </OrderDetails>

        <Actions>
          {order.status !== 'DONE' && (
            <button
              type='button'
              className='primary'
              disabled={isLoading}
              onClick={onChangeOrderStatus}
            >
              <span>
                {order.status === 'WAITING' && '⏱'}
                {order.status === 'IS_HAPPENING' && '🏚'}
              </span>
              <strong>
                {order.status === 'WAITING' && 'Reservar'}
                {order.status === 'IS_HAPPENING' && 'Concluir Reserva'}
              </strong>
            </button>
          )}

          <button
            type='button'
            className='secondary'
            disabled={isLoading}
            onClick={onCancelOrder}
          >
            <strong>Cancelar Reserva</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
