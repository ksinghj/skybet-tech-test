import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Chip, Container, Divider } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'

import styles from './home.module.scss'

// import api from '../../api'

import Event from '../Event'

import { LIVE_EVENTS } from '../../state/live-events/actions'
import { getLiveEvents } from '../../state/live-events/selectors'

const Home: React.FC = () => {
  const liveEvents = useSelector(getLiveEvents)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(LIVE_EVENTS.TRIGGER())
  }, [dispatch])

  const handleRefreshEvents = () => {
    dispatch(LIVE_EVENTS.TRIGGER())
  }

  useEffect(() => {
    console.log('liveEvents: ', liveEvents)
  }, [liveEvents])

  setTimeout(() => {
    console.log('liveEvents: ', liveEvents)
  }, 2000)

  return (
    <div className='Home'>
      <Container>
        <div className={styles.appHeader}>
          <h2 className={styles.appHeaderText}>Football</h2>
          <RefreshIcon className={styles.refresh} onClick={handleRefreshEvents} />
        </div>
        {liveEvents?.map(event => {
          return (
            <div key={event.eventId}>
              <Divider>
                <Chip
                  className={styles.chipBoxShadow}
                  color='primary'
                  label={new Date(event.startTime).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                  })}
                />
              </Divider>
              <Event name={event.name} eventId={event.typeId} />
            </div>
          )
        })}
      </Container>
    </div>
  )
}

export default Home
