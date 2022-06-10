import { combineReducers } from '@reduxjs/toolkit'
import liveEventsReducer from './state/live-events/reducer'

const rootReducer = combineReducers({ liveEvents: liveEventsReducer })

export default rootReducer
