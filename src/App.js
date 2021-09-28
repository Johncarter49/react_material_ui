import './App.css';
import Buttons from './components/materila-ui/buttons/Buttons';
import CheckBoxComp from './components/materila-ui/checkbox/CheckBoxComp';
import TextFieldComp from './components/materila-ui/text-field/TextFieldComp';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, orange } from '@mui/material/colors';
import TypographyComp from './components/materila-ui/typography/TypographyComp';
import Wrapper from './components/materila-ui/wrapper/Wrapper';
import Cards from './components/materila-ui/cards/Cards';
import AppBarComp from './components/materila-ui/app-bar/AppBarComp';
import StyledButton from './components/materila-ui/styled-button/StyledButton';
//import StyledComponents from './components/styled-comp.';

const theme = createTheme({
  palette:{
    primary:{
      main: orange[400],
    },
    secondary:{
      main: green[300],
    }
  },

  typography: {
    h2:{
      fontSize: 38,
      padding: 2,
    },
    subtitle1:{
      marginBottom:5,
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>  
        <AppBarComp />
      <div className="App">
        <header className="App-header">
          {/* <StyledComponents /> */}
          <StyledButton />
          <TypographyComp />
          <Cards />
          <TextFieldComp />
          <CheckBoxComp />
          <Buttons />
        </header>
      </div>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
