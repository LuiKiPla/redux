import {createStore} from 'redux'
import type {CounterState, counterActionType} from './types.ts'

const initialCounterState: CounterState = {
  count : 0
}
  
function counterReducer(state: CounterState = initialCounterState, action: counterActionType): CounterState {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    default: 
      return state
  }
}



export const store = createStore(counterReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch