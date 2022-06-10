import { spawn, take, put } from 'redux-saga/effects'

import { INITIALISATION } from './state/initialisation/actions'
import { listenForInitialisationTrigger } from './state/initialisation/sagas'
import { listenForLiveEventsTrigger } from './state/live-events/sagas'

function* rootSaga() {
  yield spawn(listenForInitialisationTrigger)

  yield put(INITIALISATION.TRIGGER())

  // wait for initialisation
  yield take(INITIALISATION.COMPLETED)

  yield spawn(listenForLiveEventsTrigger)
}

export default rootSaga
