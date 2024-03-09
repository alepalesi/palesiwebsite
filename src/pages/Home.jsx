import PropTypes from 'prop-types'
import { Heading, useTheme } from '@chakra-ui/react'
import Profile from '../components/profile'

const Home = (props) => {
  const { isHome } = props
  console.log('theme', useTheme())
  return (
    isHome && (
      <>
        <Profile />
      </>
    )
  )
}

Home.propTypes = {
  isHome: PropTypes.string,
}

Home.displayName = 'Home'

export default Home
