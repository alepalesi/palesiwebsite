import PropTypes from 'prop-types'
import { Heading } from '@chakra-ui/react'

const Home = (props) => {
  const { isHome } = props
  console.log('isHome', isHome)
  return isHome && <Heading as={'h1'}>Alessia {isHome}</Heading>
}

Home.propTypes = {
  isHome: PropTypes.string,
}

Home.displayName = 'Home'

export default Home
