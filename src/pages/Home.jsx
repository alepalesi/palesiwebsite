import PropTypes from 'prop-types'
import Profile from '../components/profile'
import AboutMe from '../components/about-me'
import Expertise from '../components/expertise'
import Skills from '../components/skills'

const Home = (props) => {
  const { isHome } = props
  return (
    isHome && (
      <>
        {/* TODO: Add header to appear when scrolling to bottom */}
        <Profile />
        <AboutMe />
        <Expertise />
        <Skills />
      </>
    )
  )
}

Home.propTypes = {
  isHome: PropTypes.string,
}

Home.displayName = 'Home'

export default Home
