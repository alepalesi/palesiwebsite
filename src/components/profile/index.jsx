import React from 'react'
import PropTypes from 'prop-types'

// Components
import {
  Box,
  Image,
  VStack,
  useMultiStyleConfig,
  Heading,
  Text,
} from '@chakra-ui/react'

import Contact from '../contact'

const Profile = (props) => {
  const style = useMultiStyleConfig('Profile')

  const alessiaContacts = {
    phone: '+39 347 327 0393',
    email: 'alessia.palesi@gmail.com',
    linkedin: 'linkedin.com/in/alessiapalesi',
  }

  return (
    <VStack>
      <Box {...style.imageWrapper}>
        <Image src={'src/assets/img/alessia.jpeg'} {...style.image}></Image>
      </Box>
      <VStack>
        <Heading as={'h1'} {...style.text}>
          Alessia Palesi
        </Heading>
        <Heading as={'h2'} {...style.textH2}>
          e-commerce consultant
        </Heading>
      </VStack>
      <Contact contact={alessiaContacts} />
    </VStack>
  )
}

Profile.propTypes = {}

export default Profile
