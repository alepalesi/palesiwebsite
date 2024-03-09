import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Text, HStack, VStack, useMultiStyleConfig } from '@chakra-ui/react'

import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

const Contact = (props) => {
  const { contact } = props
  const style = useMultiStyleConfig('Contact')

  return (
    <VStack>
      <HStack>
        <PhoneIcon />
        <Text>{contact.phone}</Text>
      </HStack>
      <HStack>
        <PhoneIcon />
        <Text>{contact.email}</Text>
      </HStack>
      <HStack>
        <PhoneIcon />
        <Text>{contact.linkedin}</Text>
      </HStack>
    </VStack>
  )
}

Contact.propTypes = {
  contact: PropTypes.object,
}

export default Contact
