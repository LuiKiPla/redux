import axios from "axios";
import { todosActionTypes, type TodosActions } from "./types";
import type { Dispatch } from "redux";

export const fetchTodos = () => {
  return async (dispatch: Dispatch<TodosActions>) => {
    try {
      dispatch({ type: todosActionTypes.FETCH_TODOS });
      const responce = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(responce)
      setTimeout(() => {
        dispatch({
          type: todosActionTypes.FETCH_TODOS_SUCCESS,
          payload: responce.data,
        });
      }, 10000);
    } catch (error) {
      dispatch({
        type: todosActionTypes.FETCH_TODOS_ERROR,
        payload: "Произошла ошибка",
      });
    }
  };
};
