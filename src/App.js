import { ThemeProvider } from '@material-ui/core/styles';
import { Container, GlobalStyle } from './components/styles/StyleGeral';
import { theme } from './constants/theme';
import RouteComponent from './routes/RouteComponent';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <RouteComponent />
      </Container>
    </ThemeProvider>
  );
}

export default App;
