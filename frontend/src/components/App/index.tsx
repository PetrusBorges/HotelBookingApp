// Styled-Components
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../assets/styles/default';
import GlobalStyles from '../../assets/styles/global';

// Components
import { Header } from '../Header';
import { Orders } from '../Orders';

//Toasttify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <Orders />
      <ToastContainer position='bottom-center' />
    </ThemeProvider>
  );
}
