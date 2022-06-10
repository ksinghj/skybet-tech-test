import { createAction } from '@reduxjs/toolkit'

export const INITIALISATION = {
  TRIGGER: createAction('INITIALISATION.TRIGGER'),
  STARTED: createAction('INITIALISATION.STARTED'),
  COMPLETED: createAction('INITIALISATION.COMPLETED'),
}
