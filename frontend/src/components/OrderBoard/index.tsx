// Styled-Components
import { Container, OrderContainer } from './styles';

// Types
import { Order } from '../../types/orders';

// Component
import { OrderModal } from '../OrderModal';

// Hooks
import { useState } from 'react';

// Utils
import { api } from '../../utils/api';

// Toastify
import { toast } from 'react-toastify';

interface OrderBoardProps {
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

export function OrderBoard({ title, orders, onCancelOrder, onChangeOrderStatus }: OrderBoardProps) {

  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleCancelOrder() {
    if (!selectedOrder) {
      return;
    }

    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));
    await api.delete(`/order/${selectedOrder._id}`);

    toast.success('A reserva foi cancelada com sucesso!');
    onCancelOrder(selectedOrder._id);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  async function handleChangeOrderStatus() {
    if (!selectedOrder) {
      return;
    }

    setIsLoading(true);

    const newStatus = selectedOrder.status === 'WAITING' ? 'IS_HAPPENING' : 'DONE';

    await new Promise(resolve => setTimeout(resolve, 1000));
    await api.patch(`/order/${selectedOrder._id}`, { status: newStatus });

    toast.success('A reserva foi alterada com sucesso!');
    onChangeOrderStatus(selectedOrder._id, newStatus);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  return (
    <Container>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
        isLoading={isLoading}
      />

      <header>
        <strong>{title}</strong>
        <span>{orders.length}</span>
      </header>

      {orders.length > 0 && (
        <OrderContainer>
          {orders.map((order) => (
            <button
              type='button' key={order._id} onClick={() => handleOpenModal(order)}
            >
              <strong>{order.name}</strong>
              <span>{order.initialDate}</span>
              <span>{order.finalDate}</span>
            </button>
          ))}
        </OrderContainer>
      )}
    </Container>
  );
}
