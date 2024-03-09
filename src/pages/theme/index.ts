import { extendTheme } from '@chakra-ui/react'
import fonts from './foundations/fonts'

// Please refer to the Chakra-Ui theme customization docs found
// here https://chakra-ui.com/docs/theming/customize-theme to learn
// more about extending and overriding themes for your project.

import Prova from './components/prova'
import Profile from './components/profile'

const theme = extendTheme({
  fonts,

  components: {
    Prova,
    Profile,
  },
})

export default extendTheme(theme)
