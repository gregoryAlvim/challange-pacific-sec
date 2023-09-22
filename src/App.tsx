import { Routes } from './routes/intex'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Routes />
    </ThemeProvider>
  )
}

export default App
