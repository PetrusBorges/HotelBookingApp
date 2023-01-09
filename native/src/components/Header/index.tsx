// Styled-Components
import { Container } from './styles';

// Components
import { Text } from '../text';

export function Header() {
  return (
    <Container>
      <Text weight='400' size={18}>
        Discover your
      </Text>
      <Text weight='600' size={18}>
        perfect place to stay
      </Text>
    </Container>
  );
}
