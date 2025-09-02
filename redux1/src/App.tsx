import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import type { TodoState } from './store/types'
import { useTypedSelector, type AppDispatch } from './store/store'
import { useEffect } from 'react'
import { fetchTodos } from './store/actionCreator'
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

  const {todos, error, loading} = useTypedSelector(state => state)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])


  if(loading) {
    return <h1>Идёт загрузка!</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <>
      <div>
        {todos.map(todo => (
          <div key={todo.id}>
            {todo.id} - {todo.title}
          </div>
        ))}
      </div>
    </>
  )

}


export default App
