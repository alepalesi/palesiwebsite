import { Typ, Colors } from '../utils'

export default {
  baseStyle: {
    grid: {
      w: '50vw',
    },
    text: {
      ...Typ.body_light,
    },
    circularProgress: {
      size: '100%',
      thickness: '7px',
      color: Colors.primary100,
      w: '100%',
    },
  },
  variants: {},
}
