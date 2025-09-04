import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import type { TodoState } from "./store/types";
import { useTypedSelector, type AppDispatch } from "./store/store";
import { useCallback, useEffect, useState } from "react";
import { deleteTodo, fetchTodos } from "./store/actionCreator";
// import { useSelector, useDispatch } from 'react-redux'
// import type { RootState, AppDispatch } from './store/store'

// function App() {
//   const count = useSelector((state: RootState) => state.count)
//   const dispatch = useDispatch<AppDispatch>()

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => dispatch({type: 'INCREMENT'})}>
//           count is {count}
//         </button>
//       </div>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

function App() {
  const { todos, error, loading } = useTypedSelector((state) => state);
  const dispatch = useDispatch<AppDispatch>();

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    console.log("Loaded");
    dispatch(fetchTodos());
  }, []);

  if (loading) {
    return <h1>Идёт загрузка!</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <div>
        {/* {console.log(todos.length)}
        {todos.map(todo => (
          <div key={todo.id}>
            {todo.id} - {todo.title}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Удалить</button>
          </div>
        ))} */}
        {/* ---------------------------------------------------------------------------- */}
        <div className="nameHeader">
          <h1>Todos</h1>
        </div>
        <div className="todoPropertiesHeader">
          <div className="propertyCell">Id</div>
          <div className="propertyCell">Title</div>
          <div className="propertyCell">Completed</div>
          <div className="propertyCell">Actions</div>
        </div>
        <div className="todosInCurrentPage">
          {todos
            .slice(10 * (currentPage - 1), 10 + 10 * (currentPage - 1))
            .map((todo) => (
              <>
                <div className="todoInCurrentPage">
                  <div className="propertyCell">{todo.id}</div>
                  <div className="propertyCell">{todo.title}</div>
                  <div className="propertyCell">
                    {todo.completed.toString()}
                  </div>
                  <div className="actionsCell">
                    <div className="actionCell">
                      <button
                        onClick={() => {
                          dispatch(deleteTodo(todo.id));
                        }}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
        <div className="pageNumber">
          <div className="previousPage">
            <button
              onClick={() => {
                if (currentPage != 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            >
              Предыдущие
            </button>
          </div>
          <div className="currentPage">{currentPage}</div>
          <div>
            <button
              onClick={() => {
                if (currentPage != 20) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            >
              Следующие
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
