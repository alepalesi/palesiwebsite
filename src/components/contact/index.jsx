import React from 'react'
import PropTypes from 'prop-types'

// Components
import {
  Text,
  HStack,
  VStack,
  useMultiStyleConfig,
  Link,
} from '@chakra-ui/react'

import { Link as RouterLink } from 'react-router-dom'

import { PhoneIcon } from '@chakra-ui/icons'

import ButtonMailto from '../button-mail-to'
const Contact = (props) => {
  const { contact } = props
  const style = useMultiStyleConfig('Contact')

  return (
    <VStack>
      <HStack>
        <PhoneIcon />
        <Link href={'tel:' + contact.phone}>{contact.phone}</Link>
      </HStack>
      <HStack>
        <PhoneIcon />
        <ButtonMailto
          label={contact.email}
          mailto={'mailto:' + contact.email}
        />
      </HStack>
      <HStack>
        <PhoneIcon />
        <Link href={contact.linkedinUrl} isExternal>
          {contact.linkedinLabel}
        </Link>
      </HStack>
    </VStack>
  )
}

Contact.propTypes = {
  contact: PropTypes.object,
}

export default Contact
