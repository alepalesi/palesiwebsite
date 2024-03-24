import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

// Components
import {
  useMultiStyleConfig,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react'

const SkillProgress = (props) => {
  const { progressValue, valueText } = props
  const [progress, setProgress] = useState(0)
  const circularRef = useRef()
  const style = useMultiStyleConfig('Skills')

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (
      circularRef.current.getBoundingClientRect().bottom <= window.innerHeight
    ) {
      setTimeout(() => {
        setProgress(progressValue)
      }, 500)
    }
  }

  return (
    <CircularProgress
      capIsRound
      value={progress}
      ref={circularRef}
      {...style.circularProgress}
    >
      <CircularProgressLabel {...style.text}>{valueText}</CircularProgressLabel>
    </CircularProgress>
  )
}

SkillProgress.propTypes = {}

export default SkillProgress