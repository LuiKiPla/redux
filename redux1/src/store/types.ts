// export interface CounterState {
//   count: number
// }

// type INCREMENT_ACTION = { type: 'INCREMENT'}
// type DECREMENT_ACTION = {type: 'DECREMENT'}

// export type counterActionType = INCREMENT_ACTION | DECREMENT_ACTION


export interface TodoState {
  todos: unknown[],
  loading: boolean
  error: string | null
}

export enum todosActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  DELETE_TODO = 'DELETE_TODO'
}

export interface FetchTodosAction {
  type: todosActionTypes.FETCH_TODOS
}

export interface FetchTodosActionSuccess {
  type: todosActionTypes.FETCH_TODOS_SUCCESS,
  payload: unknown[]
}

export interface FetchTodosActionError {
  type: todosActionTypes.FETCH_TODOS_ERROR,
  payload: string
}

export interface DeleteTodo {
  type: todosActionTypes.DELETE_TODO,
  payload: number
}

export type TodosActions = FetchTodosAction | FetchTodosActionSuccess | FetchTodosActionError | DeleteTodo


