import './style/App.scss'
import { VStack, useMultiStyleConfig, useTheme } from '@chakra-ui/react'
import Home from './pages/home'
import NotFound from './pages/NoPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UikitPage from './uikit'
import ColorPage from './uikit/pages/color'
import TypographyPage from './uikit/pages/typography'

function App() {
  const styles = useMultiStyleConfig('AppContainer')

  return (
    <VStack {...styles.container}>
      <Router>
        <Routes>
          <Route path="/" element={<Home isHome={'yes'} />} />
          <Route path="uikit" element={<UikitPage />} />
          <Route path="uikit/color" element={<ColorPage />} />
          <Route path="uikit/typography" element={<TypographyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </VStack>
  )
}

export default App
