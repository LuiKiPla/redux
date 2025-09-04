import './App.css'
import { useAppDispatch, useAppSelector} from './store/products/hooks'
import { useEffect } from 'react'
import { fetchProducts } from './store/products/actionCreators'
import type { product } from './store/products/types'


        
function App() {

  const { products, loading, error } = useAppSelector(state=> state.rootReducer.products)
  const dispatch = useAppDispatch()

  useEffect(()=> {
    dispatch(fetchProducts())
  }, [])

if (loading) {
    return <h1>Идёт загрузка!</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  
  return (
  <>
    <div>
      {products.map((pro: product) => (
        <div key={pro.id}>
          <img src={pro.image} alt ={pro.title} />
          {pro.title}
        </div>
      ))}
    </div>
  </>
)
}

export default App
