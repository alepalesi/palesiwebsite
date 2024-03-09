import PropTypes from 'prop-types'
import Profile from '../components/profile'
import AboutMe from '../components/about-me'
import Expertise from '../components/expertise'

const Home = (props) => {
  const { isHome } = props
  return (
    isHome && (
      <>
        {/* TODO: Add header to appear when scrolling to bottom */}
        <Profile />
        <AboutMe />
        <Expertise />
      </>
    )
  )
}

Home.propTypes = {
  isHome: PropTypes.string,
}

Home.displayName = 'Home'

export default Home
