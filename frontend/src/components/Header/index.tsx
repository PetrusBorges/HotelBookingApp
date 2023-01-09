// Styled-Components
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>Reservas!</h1>
          <h2>Aconpanhe as reversas dos clientes</h2>
        </div>

        <h1>Hotel Booking App</h1>
      </Content>
    </Container>
  );
}
