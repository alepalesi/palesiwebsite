import React from 'react'
import PropTypes from 'prop-types'

// Components
import { useMultiStyleConfig, Grid, Text, Box, Stack } from '@chakra-ui/react'

import ExpertiseItem from './partials/item'

const Expertise = (props) => {
  const style = useMultiStyleConfig('Expertise')

  return (
    <Stack {...style.wrapper}>
      <Text {...style.title}>expertise</Text>
      <Grid templateColumns="repeat(2, 1fr)" {...style.grid}>
        <ExpertiseItem
          style={style}
          description={'Responsive Web Design'}
          icon={'web'}
        />
        <ExpertiseItem
          style={style}
          description={'Client Relations'}
          icon={'relations'}
        />
        <ExpertiseItem
          style={style}
          description={'Documentation'}
          icon={'manuals'}
        />
        <ExpertiseItem
          style={style}
          description={'Communication'}
          icon={'communication'}
        />
      </Grid>
    </Stack>
  )
}

Expertise.propTypes = {}

export default Expertise
