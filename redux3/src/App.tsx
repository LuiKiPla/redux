import './App.css'
import { usersApi } from './store/api'
import type { user } from './store/types'

function App() {

  
  const { data: users, error, isLoading } = usersApi.useGetUsersQuery({limit: 1, page: 2})


  if (isLoading) {
    <h1>Loading</h1>
  }

  if(error) {
    <h1>Ошибка</h1>
  }

  return (
    <>
      <div className="users">
        {users?.map((User: user) => (
          <div className="user" key={User.id}>
            {JSON.stringify(User)}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
