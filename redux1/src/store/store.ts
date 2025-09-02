// import {createStore} from 'redux'
// import type {CounterState, counterActionType} from './types.ts'

// const initialCounterState: CounterState = {
//   count : 0
// }

// function counterReducer(state: CounterState = initialCounterState, action: counterActionType): CounterState {
//   switch(action.type) {
//     case 'INCREMENT':
//       return {
//         ...state,
//         count: state.count + 1
//       }
//     default:
//       return state
//   }
// }

// export const store = createStore(counterReducer)

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

import { applyMiddleware, createStore } from "redux";
import type {
  TodoState,
  FetchTodosAction,
  FetchTodosActionError,
  FetchTodosActionSuccess,
  TodosActions,
} from "./types.ts";
import { todosActionTypes } from "./types.ts";
import { useSelector, type TypedUseSelectorHook } from "react-redux";
import { thunk } from "redux-thunk";

const initialTodosState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};


const todosReducer = (
  state: TodoState = initialTodosState,
  action: TodosActions
): TodoState => {
  switch (action.type) {
    case todosActionTypes.FETCH_TODOS:
      return {
        loading: true,
        todos: [],
        error: null
      }
    case todosActionTypes.FETCH_TODOS_SUCCESS:
      return {
        loading: false,
        todos: action.payload,
        error: null
      }
    case todosActionTypes.FETCH_TODOS_ERROR:
      return {
        loading: true,
        todos: [],
        error: action.payload
      }
    default:
      return state
  }
};

export const store = createStore(todosReducer, applyMiddleware(thunk))

type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector