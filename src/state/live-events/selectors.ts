import { createSelector } from '@reduxjs/toolkit'

import { LiveEventsState } from './reducer'

const getRootLiveEventsState = (state: LiveEventsState) => state.events

export const getLiveEvents = createSelector(getRootLiveEventsState, state => state)
