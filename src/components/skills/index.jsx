import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Components
import { useMultiStyleConfig, HStack, CircularProgress } from '@chakra-ui/react'
import SkillProgress from './partials/skill-progress'

const Skills = (props) => {
  const style = useMultiStyleConfig('Skills')

  return (
    <HStack {...style.stack}>
      <SkillProgress progressValue={'80'} />
      <SkillProgress progressValue={'90'} />
      <SkillProgress progressValue={'50'} />
      <SkillProgress progressValue={'60'} />
    </HStack>
  )
}

Skills.propTypes = {}

export default Skills
