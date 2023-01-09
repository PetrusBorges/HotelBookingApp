// Styled-Components
import { Container } from './styles';

// Component
import { OrderBoard } from '../OrderBoard';

// Hooks
import { useState, useEffect } from 'react';

// Utils
import { api } from '../../utils/api';

// Types
import { Order } from '../../types/orders';

// SocketIO
import socketIo from 'socket.io-client';

export function Orders() {

  const [order, setOrder] = useState<Order[]>([]);

  useEffect(() => {
    const socket = socketIo('http://localhost:3001', {
      transports: ['websocket'],
    });

    socket.on('order@new', (order) => {
      setOrder((prevState) => prevState.concat(order));
    });

    return () => {
      socket.removeListener('order@new');
    };
  }, []);

  useEffect(() => {
    api.get('/order').then(({ data }) => {
      setOrder(data);
    });
  }, []);

  const waiting = order.filter((order) => order.status === 'WAITING');
  const isHappening = order.filter((order) => order.status === 'IS_HAPPENING');
  const done = order.filter((order) => order.status === 'DONE');

  function handleCancelOrder(orderId: string) {
    setOrder((prevState) => prevState.filter((order) => order._id !== orderId));
  }

  function handleChangeOrderStatus(orderId: string, status: Order['status']) {
    setOrder((prevState) => prevState.map((order) => (
      order._id === orderId ? {...order, status } : order
    )));
  }

  return (
    <Container>
      <OrderBoard
        title='Em espera'
        orders={waiting}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
      />

      <OrderBoard
        title='Reservado'
        orders={isHappening}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
      />

      <OrderBoard
        title='Reserva finalizada'
        orders={done}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
      />
    </Container>
  );
}
