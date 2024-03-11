import React from 'react'
import PropTypes from 'prop-types'

// Components
import { useMultiStyleConfig, Text, Stack } from '@chakra-ui/react'

const AboutMe = (props) => {
  const { description } = props
  const style = useMultiStyleConfig('AboutMe')

  return (
    <Stack {...style.stack}>
      <Text {...style.title}>about me</Text>
      <Text {...style.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. {description}
      </Text>
      <Text {...style.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel turpis
        purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Curabitur eu tortor rhoncus, dignissim risus a, congue eros. Duis luctus
        porta ante et laoreet. {description}
      </Text>
      <Text {...style.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel turpis
        purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Curabitur eu tortor rhoncus, dignissim risus a, congue eros. Duis luctus
        porta ante et laoreet. {description}
      </Text>
      <Text {...style.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel turpis
        purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Curabitur eu tortor rhoncus, dignissim risus a, congue eros. Duis luctus
        porta ante et laoreet. {description}
      </Text>
    </Stack>
  )
}

AboutMe.propTypes = {
  description: PropTypes.string,
}

export default AboutMe
