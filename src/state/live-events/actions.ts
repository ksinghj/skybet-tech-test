import { createAction } from '@reduxjs/toolkit'
import { Event } from '../../api/types'

export const LIVE_EVENTS = {
  TRIGGER: createAction('LIVE_EVENTS.TRIGGER'),
  STARTED: createAction('LIVE_EVENTS.STARTED'),
  COMPLETED: createAction<Event[]>('LIVE_EVENTS.COMPLETED'),
}
