// Styled-Components
import { Container, OkButton } from './styles';
import { Modal } from 'react-native';

// Components
import { Text } from '../text';

// Images
import { CheckCircle } from '../../assets/images/checkCircle';

interface OrderConfirmProps {
  visible: boolean;
  onReset: () => void;
}

export function OrderConfirm({ visible, onReset}: OrderConfirmProps) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      onRequestClose={onReset}

    >
      <Container>
        <CheckCircle />
        <Text size={20} weight='400' style={{ marginTop: 12 }}>Reserva confirmada!</Text>

        <OkButton onPress={onReset}>
          <Text weight='400' color='#fff'>OK</Text>
        </OkButton>
      </Container>
    </Modal>
  );
}
