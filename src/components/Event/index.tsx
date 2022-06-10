import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import api from '../../api'

import styles from './index.module.scss'
import globalStyles from '../../global.module.scss'

import ROUTES from '../../routes'

import ArrowToggle from '../ArrowToggle'
import { Market } from '../../api/types'

interface EventProps {
  name: string
  eventId: number
}

const Event = ({ name, eventId }: EventProps) => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false)
  const dropdownProps = useSpring({ maxHeight: dropdownVisible ? '100%' : '0px', opacity: dropdownVisible ? 1 : 0 })
  const [markets, setMarkets] = useState<Market>()
  const [outcomes, setOutcomes] = useState<unknown>()

  useEffect(() => {
    api.addEventListener('message', e => {
      if (JSON.parse(e.data).type === 'MARKET_DATA') {
        setMarkets(JSON.parse(e.data).data)
      }
    })

    api.addEventListener('message', e => {
      if (JSON.parse(e.data).type === 'OUTCOME_DATA') {
        setOutcomes(JSON.parse(e.data).data)
      }
    })
  }, [])

  useEffect(() => {
    console.log({ markets, outcomes })
  }, [markets, outcomes])

  const toggleDropdown = () => {
    if (!dropdownVisible) {
      // Fetch market data
      api.send(JSON.stringify({ type: 'getMarket', id: 93650821 }))
      console.log(
        `fetched market for set id (93650821), but should it be ${eventId}? API docs are unclear, so left hardcoded.`
      )

      // Fetch outcome data
      api.send(JSON.stringify({ type: 'getOutcome', id: 367533685 }))
    }

    setDropdownVisible(!dropdownVisible)
  }

  return (
    <Box className={styles.container}>
      <div className={styles.eventName}>
        <div className='spacer'></div>
        <Link className={globalStyles.link} to={`/${ROUTES.market}`}>
          <p className={styles.eventName}>{name}</p>
        </Link>
        <ArrowToggle toggled={dropdownVisible} onClick={toggleDropdown} />
      </div>
      <animated.div style={dropdownProps}>
        <>
          {!markets && <p>No market data available.</p>}
          {markets && (
            <div>
              <p>{markets.name}</p>
            </div>
          )}
        </>
      </animated.div>
    </Box>
  )
}

export default Event
