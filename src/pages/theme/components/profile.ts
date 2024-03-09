import { Colors, Typ } from '../utils'

export default {
  baseStyle: {
    imageWrapper: {
      borderRadius: '100%',
      w: '160px',
      h: '160px',
      overflow: 'hidden',
      outline: `9px solid ${Colors.accent100}`,
      outlineOffset: '9px',
    },
    image: {
      objectFit: 'cover',
      objectPosition: 'center',
      w: '100%',
      h: '100%',
    },
    text: { ...Typ.h1_ext_reg },
    textH2: { ...Typ.h2_ext_reg },
  },
  variants: {},
  parts: ['imageWrapper', 'image'],
}
