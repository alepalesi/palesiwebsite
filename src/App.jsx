import './style/App.scss'
import { VStack, useMultiStyleConfig, useTheme } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Home from './pages/home'
import NotFound from './pages/NoPage'
import Work from './pages/Work'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { getPeriodOfTheYear } from './classes/utils'
//TODO: understand how to retrieve correct font families
import './static/fonts/fonts.css'
import './static/fonts/ArsenicaTrial-Bold/ArsenicaTrial-Bold.ttf'
import UikitPage from './uikit'
import ColorPage from './uikit/pages/color'
import TypographyPage from './uikit/pages/typography'

function App() {
  const styles = useMultiStyleConfig('Prova')
  const theme = useTheme()
  console.log('theme', theme)
  console.log('styles', styles)
  const [currentTheme, setCurrentTheme] = useState('container')

  useEffect(() => {
    setCurrentTheme(currentTheme + ' ' + getPeriodOfTheYear())
  }, [])
  return (
    <VStack {...styles.container}>
      <header> {/* Empty. For future use? */} </header>
      <Router>
        <Routes>
          <Route path="/" element={<Home isHome={'yes'} />} />
          <Route path="work" element={<Work />} />
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
