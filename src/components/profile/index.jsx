import React from 'react'
import PropTypes from 'prop-types'

// Components
import {
  Box,
  Image,
  VStack,
  useMultiStyleConfig,
  Heading,
  HStack,
} from '@chakra-ui/react'

import Contact from '../contact'

const Profile = (props) => {
  const style = useMultiStyleConfig('Profile')

  const alessiaContacts = {
    phone: '+39 347 327 0393',
    email: 'alessia.palesi@gmail.com',
    linkedinLabel: 'linkedin.com/in/alessiapalesi',
    linkedinUrl: 'https://linkedin.com/in/alessiapalesi',
  }

  return (
    <>
      <HStack {...style.fullwidthContainer}>
        <Box {...style.imageWrapper}>
          <Image src={'src/assets/img/alessia.jpeg'} {...style.image}></Image>
        </Box>
        <VStack {...style.vstack}>
          <Heading as={'h1'} {...style.text}>
            Hi, I'm Alessia Palesi
          </Heading>
          <Heading as={'h2'} {...style.textH2}>
            e-commerce consultant & front-end developer
          </Heading>
        </VStack>
      </HStack>
      {/* <Contact contact={alessiaContacts} /> */}
    </>
  )
}

Profile.propTypes = {}

export default Profile
