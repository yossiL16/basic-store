import { useProduct } from '../manage'
import { useNavigate } from 'react-router-dom'
import CardCart from '../components/CardCart';

export default function Cart() {

    const navigate = useNavigate();
    const count = useProduct((state) => state.count)
    const products = useProduct((state) => state.products)
    const sumPrice = useProduct((state) => state.sumPrice)

        function handleshop(){
        navigate('/')
    }



  return (
    <div className='cart-page'>
        <button onClick={handleshop}>{sumPrice}</button>
        <p>{count}</p>
        <div>
            {products.map((item) => {
            return (
                <CardCart 
                key={item.id}
                id={item.id} 
                name={item.name} 
                price={item.price}
                category={item.category}  />
            )
        })}
    
        </div>


    </div>
  )
}
