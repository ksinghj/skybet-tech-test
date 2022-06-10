import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useSpring, animated } from 'react-spring'

import styles from './arrow-toggle.module.scss'

interface ArrowToggleProps {
  toggled: boolean
  onClick: () => void
}

const ArrowToggle = ({ toggled, onClick }: ArrowToggleProps) => {
  const arrowProps = useSpring({ rotate: toggled ? '180deg' : '0deg' })

  return (
    <animated.div style={arrowProps}>
      <KeyboardArrowDownIcon className={styles.toggle} onClick={onClick} />
    </animated.div>
  )
}

export default ArrowToggle
