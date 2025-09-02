export interface CounterState {
  count: number
}

type INCREMENT_ACTION = { type: 'INCREMENT'}
type DECREMENT_ACTION = {type: 'DECREMENT'}

export type counterActionType = INCREMENT_ACTION | DECREMENT_ACTION
