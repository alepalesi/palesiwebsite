import { Colors, Typ } from '../utils'

export default {
  baseStyle: {
    fullwidthContainer: {
      h: '100dvh',
      w: '100dvw',
      bg: `linear-gradient(-45deg, ${Colors.accent100}, ${Colors.accent200}, ${Colors.primary100},${Colors.primary200})`,
      backgroundSize: '400% 400%',
      animation: 'gradient 10s ease infinite',
      color: Colors.white,
      gap: '64px',
      textAlign: 'left',
      justifyContent: 'center',
      px: '64px',
      '@keyframes gradient': {
        '0% ': {
          backgroundPosition: ' 0% 50%',
        },
        '50%': {
          backgroundPosition: '100% 50%',
        },
        '100% ': {
          backgroundPosition: '0% 50%',
        },
      },
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
