import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Components
import {
  useMultiStyleConfig,
  HStack,
  CircularProgress,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import SkillProgress from './partials/skill-progress'

const Skills = (props) => {
  const style = useMultiStyleConfig('Skills')

  return (
    <Grid templateColumns="repeat(4, 1fr)" {...style.grid}>
      <GridItem>
        <SkillProgress progressValue={'80'} valueText={'ciao'} />
      </GridItem>
      <GridItem>
        <SkillProgress progressValue={'90'} />
      </GridItem>
      <GridItem>
        <SkillProgress progressValue={'50'} />
      </GridItem>
      <GridItem>
        <SkillProgress progressValue={'60'} />
      </GridItem>
    </Grid>
  )
}

Skills.propTypes = {}

export default Skills
