import { extendTheme } from '@chakra-ui/react'
import fonts from './foundations/fonts'

// Please refer to the Chakra-Ui theme customization docs found
// here https://chakra-ui.com/docs/theming/customize-theme to learn
// more about extending and overriding themes for your project.

import AppContainer from './components/app-container'
import Profile from './components/profile'
import AboutMe from './components/about-me'
import Expertise from './components/expertise'

const theme = extendTheme({
  fonts,

  components: {
    AppContainer,
    AboutMe,
    Expertise,
    Profile,
  },
})

export default extendTheme(theme)
