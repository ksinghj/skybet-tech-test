import { put, takeEvery } from 'redux-saga/effects'

import api from '../../api'
import { Event } from '../../api/types'

import { LIVE_EVENTS } from './actions'

export function* liveEventsSaga() {
  yield put(LIVE_EVENTS.STARTED())

  yield console.log('ran')

  let liveEvents: Event[] = []

  yield api.send(JSON.stringify({ type: 'getLiveEvents', primaryMarkets: false }))

  // TODO: this should have own saga (API saga for all different types of query?)
  yield api.addEventListener('message', e => {
    if (JSON.parse(e.data).type === 'LIVE_EVENTS_DATA') {
      liveEvents = JSON.parse(e.data).data
    }
  })

  yield put(LIVE_EVENTS.COMPLETED(liveEvents))
}

export function* listenForLiveEventsTrigger() {
  yield takeEvery(LIVE_EVENTS.TRIGGER, liveEventsSaga)
}
