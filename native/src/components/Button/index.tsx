// Stytled-Components
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

// Components
import { Text } from '../text';

interface ButtonProps {
  children: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({ children, onPress, disabled, loading }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled || loading}>
      {!loading && (
        <Text weight='600' color='#ffffff'>
          {children}
        </Text>
      )}

      {loading && (
        <ActivityIndicator color='#ffffff' />
      )}
    </Container>
  );
}
