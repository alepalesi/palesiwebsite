import PropTypes from 'prop-types'
import Profile from '../components/profile'
import AboutMe from '../components/about-me'

const Home = (props) => {
  const { isHome } = props
  return (
    isHome && (
      <>
        <Profile />
        <AboutMe />
      </>
    )
  )
}

Home.propTypes = {
  isHome: PropTypes.string,
}

Home.displayName = 'Home'

export default Home
