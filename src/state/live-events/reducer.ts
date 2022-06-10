import { createReducer, Reducer } from '@reduxjs/toolkit'

import { Event } from '../../api/types'

import { LIVE_EVENTS } from './actions'

export interface LiveEventsState {
  events: Event[] | null
}

const INITIAL_STATE: LiveEventsState = {
  events: null,
}

const liveEventsReducer: Reducer = createReducer(INITIAL_STATE, builder => {
  builder.addCase(LIVE_EVENTS.STARTED, state => {
    state.events = null
  })
  builder.addCase(LIVE_EVENTS.COMPLETED, (state, action) => {
    state.events = { ...state.events, ...action.payload }
  })
})

export default liveEventsReducer
