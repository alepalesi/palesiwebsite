import React from 'react'
import PropTypes from 'prop-types'
// Components
import { Box, Stack, Text } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'

const ExpertiseItem = (props) => {
  const { style, description } = props

  return (
    <Stack {...style.item}>
      <PhoneIcon {...style.icon} />
      <Text {...style.itemText}>{description}</Text>
    </Stack>
  )
}

ExpertiseItem.propTypes = {}

export default ExpertiseItem
