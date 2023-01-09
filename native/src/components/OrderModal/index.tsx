// Styled-Component
import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Overlay, ModalBody, Header, Form, Input } from './styles';

// Images
import { Close } from '../../assets/images/close';

// Components
import { Text } from '../text';
import { Button } from '../Button';
import { OrderConfirm } from '../OrderConfirm';

// Hooks
import { useState } from 'react';

// Types
import { Hotel } from '../../types/hotel';
import { CartItem } from '../../types/cartItem';

// Utils
import { api } from '../../utils/api';

interface OrderModalProps {
  visible: boolean;
  hotel: null | Hotel
  onClose: () => void;
  onCloseHotelMenuModal: () => void;
  cartItems: CartItem[];
  onResetCartItems: () => void;
}

export function OrderModal({ visible, hotel, onClose, onCloseHotelMenuModal, cartItems, onResetCartItems}: OrderModalProps) {

  const [name, setName] = useState('');
  const [firstDate, setFirstDate] = useState('');
  const [secondDate, setSecondDate] = useState('');
  const [isModalOrderConfirm, setIsModalOrderConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleConfirmOrder() {

    if (!hotel) {
      return null;
    }

    setIsLoading(true);

    const payload = {
      name: name,
      initialDate: firstDate,
      finalDate: secondDate,
      chosenHotel: cartItems.map((cartItem) => ({
        hotel: cartItem.hotel._id,
        quantity: cartItem.quantity,
      }))
    };

    await new Promise(resolve => setTimeout(resolve, 1000));
    await api.post('/order', payload);

    setIsLoading(false);
    setIsModalOrderConfirm(true);
    onClose();
    onCloseHotelMenuModal();
  }

  function handleResetStates() {
    setName('');
    setFirstDate('');
    setSecondDate('');
    onResetCartItems();
    setIsModalOrderConfirm(false);
  }

  return (
    <>
      <Modal
        visible={visible}
        transparent
        animationType='fade'
        onRequestClose={onClose}
      >
        <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
          <ModalBody>
            <Header>
              <Text weight='400'>Faça sua reserva:</Text>

              <TouchableOpacity onPress={onClose}>
                <Close color='black'/>
              </TouchableOpacity>
            </Header>

            <Form>
              <Input
                value={name}
                placeholder='Insira seu nome:'
                placeholderTextColor='#666'
                onChangeText={(value) => setName(value)}
              />

              <Input
                value={firstDate}
                placeholder='Chegada formato: DD/MM/YYYY'
                placeholderTextColor='#666'
                keyboardType='number-pad'
                onChangeText={(value) => setFirstDate(value)}
              />

              <Input
                value={secondDate}
                placeholder='Saída formato: DD/MM/YYYY'
                placeholderTextColor='#666'
                keyboardType='number-pad'
                onChangeText={(value) => setSecondDate(value)}
              />

              <Button
                onPress={handleConfirmOrder}
                disabled={name.length === 0 || secondDate.length === 0}
                loading={isLoading}
              >
              Fazer reserva!
              </Button>
            </Form>
          </ModalBody>
        </Overlay>
      </Modal>

      <OrderConfirm
        visible={isModalOrderConfirm}
        onReset={handleResetStates}
      />
    </>
  );
}
