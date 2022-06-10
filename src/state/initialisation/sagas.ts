import { EventChannel, eventChannel } from 'redux-saga'
import { put, call, take, takeLatest } from 'redux-saga/effects'
import api from '../../api'
import { INITIALISATION } from './actions'

export function* initialisationSaga() {
  yield put(INITIALISATION.STARTED())

  const channel: EventChannel<WebSocket> = yield call(createSocketChannel)

  try {
    while (true) {
      // can proceed when ws connection established
      yield take(channel)

      yield put(INITIALISATION.COMPLETED())
    }
  } finally {
    console.log('connection end')
  }
}

function createSocketChannel(): EventChannel<any> {
  return eventChannel(emitter => {
    api.addEventListener('open', e => {
      emitter(e)
    })

    return () => {
      api.removeEventListener('open', emitter)
    }
  })
}

export function* listenForInitialisationTrigger() {
  yield takeLatest(INITIALISATION.TRIGGER, initialisationSaga)
}
