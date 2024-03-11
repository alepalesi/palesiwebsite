import { Typ, Colors } from '../utils'

export default {
  baseStyle: {
    wrapper: {
      w: '50vw',
      maxW: '1024px',
      gap: '24px',
    },
    title: {
      ...Typ.h1_ext_reg,
    },
    grid: {
      gap: '32px',
    },
    item: {
      aspectRatio: '4/3',
      bg: Colors.bg100,
      borderRadius: '24px',
      boxShadow: `inset 0em 0em 17px 10px ${Colors.bg200}`,
      gap: '24px',
      p: '32px',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      cursor: 'pointer',
      transition: '0.3s',
      color: Colors.accent200,
      _hover: {
        opacity: '0.7', //clicca per saperne di più tooltip
      },
    },
    icon: {
      w: '48px',
      h: '48px',
    },
    itemText: {
      ...Typ.caption_reg,
    },
  },
  variants: {},
}
