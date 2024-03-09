/**
 * Instructions for Use:
 * the name of the typography follows the following scheme:
 * for Kalnia font family: [PRIMARY FONT]
 * {name_of_typography}_ext_{reg|sem for regular or semibold}
 * for Cabin font family: [SECONDARY FONT]
 * {name_of_typography}_{reg|sem for regular or semibold}
 */

const typography = {
  h1_ext_sem: {
    fontFamily: 'Kalnia',
    fontSize: { base: '72px' },
    fontWeight: 700,
  },
  h1_ext_reg: {
    fontFamily: 'Kalnia',
    fontSize: { base: '72px' },
    fontWeight: 550,
  },
  h2_ext_sem: {
    fontFamily: 'Kalnia',
    fontSize: { base: '48px' },
    fontWeight: 700,
  },
  h2_ext_reg: {
    fontFamily: 'Kalnia',
    fontSize: { base: '48px' },
    fontWeight: 550,
  },
}

export default typography
