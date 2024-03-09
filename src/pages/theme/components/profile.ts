import { Colors, Typ } from '../utils'

export default {
  baseStyle: {
    fullwidthContainer: {
      h: '100dvh',
      w: '100dvw',
      bg: Colors.accent200,
      color: Colors.white,
      gap: '64px',
      textAlign: 'left',
      justifyContent: 'center',
      px: '64px',
    },
    vstack: {
      alignItems: 'flex-start',
    },
    imageWrapper: {
      borderRadius: '100%',
      w: '18dvw',
      aspectRatio: '1',
      minW: '160px',
      minH: '160px',
      maxW: '300px',
      maxH: '300px',
      overflow: 'hidden',
      outline: `3px solid ${Colors.accent100}`,
      outlineOffset: '16px',
      flex: '0 0 auto',
    },
    image: {
      objectFit: 'cover',
      objectPosition: 'center',
      w: '100%',
      h: '100%',
    },
    text: { ...Typ.h1_ext_reg },
    textH2: { ...Typ.caption_reg },
  },
  variants: {},
  parts: ['imageWrapper', 'image'],
}
