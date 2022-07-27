import { createTheme } from '@mui/material/styles'
import { grey, blueGrey } from '@mui/material/colors'

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Noto Sans',
    ],
    h1: {
      fontWeight: 'bold',
    }
  },
  palette: {
    primary: {
      main: grey[500],
      dark600: grey[600],
      dark700: grey[700],
      dark800: grey[800],
      dark900: grey[900]
    },
    secondary: {
      light50: blueGrey[50],
      light100: blueGrey[100],
      light200: blueGrey[200],
      light300: blueGrey[300],
      light400: blueGrey[400],
      main: blueGrey[500],
      dark600:blueGrey[600],
      dark700:blueGrey[700],
      dark800:blueGrey[800],
      dark900:blueGrey[900]
    }
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          backgroundColor: '#424242',
          border: '5px solid #424242'
        },
        paper: {
          backgroundColor: '#424242',
          border: '5px solid #424242'
        },
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: 'secondary.light100',
          fontSize: '16px'
        },
        secondary: {
          color: 'rgba(120, 144, 156, 0.6)',
          fontSize: '12px'
        }
      }
    },
  }
})