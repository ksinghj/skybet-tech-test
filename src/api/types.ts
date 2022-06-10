export interface Event {
  linkedEventTypeName: string
  name: string
  boostCount: number
  classId: number
  className: string
  competitors: Competitor[]
  displayOrder: number
  eventId: number
  linkedEventId: number
  linkedEventTypeId: number
  scores: {
    home: number
    away: number
  }
  sort: 'MTCH'
  startTime: Date
  status: Status
  superBoostCount: number
  typeId: number
  typeName: string
}

interface Competitor {
  name: string
  position: string
}

interface Status {
  active: boolean
  cashoutable: boolean
  displayable: boolean
  finished: boolean
  live: boolean
  requestabet: boolean
  resulted: boolean
  started: boolean
  suspended: boolean
}

export interface Market {
  displayOrder: number
  eventId: number
  liabilities: {
    livePriceLimit: number
  }
  marketId: number
  name: 'Full Time Result'
  outcomes: number[]
  spAvail: boolean
  status: {
    active: boolean
    resulted: boolean
    cashoutable: boolean
    displayable: boolean
    suspended: boolean
    noExtraTime: boolean
  }
  type: string
}
