import React from 'react'
import PropTypes from 'prop-types'

// Components
import { useMultiStyleConfig, Grid } from '@chakra-ui/react'

import ExpertiseItem from './partials/item'

const Expertise = (props) => {
  const style = useMultiStyleConfig('Expertise')

  return (
    <Grid templateColumns="repeat(2, 1fr)" {...style.grid}>
      <ExpertiseItem style={style} />
      <ExpertiseItem style={style} />
      <ExpertiseItem style={style} />
      <ExpertiseItem style={style} />
    </Grid>
  )
}

Expertise.propTypes = {}

export default Expertise
