import React from 'react'
import PropTypes from 'prop-types'

// Components
import { useMultiStyleConfig, Text, Stack } from '@chakra-ui/react'

const AboutMe = (props) => {
  const { description } = props
  const style = useMultiStyleConfig('AboutMe')

  return (
    <Stack {...style.stack}>
      <Text {...style.description}>
        Hey there! I'm a frontend developer who's all about that perfect blend
        of design and tech. By day, you'll find me rocking it as an ecommerce
        consultant, where I get to flex my coding muscles and sprinkle in some
        creative magic. But hey, life's not just about work, right? I'm all
        about living it up with a bunch of hobbies that keep me buzzing with
        enthusiasm. Whether I'm geeking out over the latest UX trends, sketching
        up some cool drawings, or belting out tunes, I'm all in.
      </Text>
    </Stack>
  )
}

AboutMe.propTypes = {
  description: PropTypes.string,
}

export default AboutMe
