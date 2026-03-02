import { useProduct } from '../manage'
import { useNavigate } from 'react-router-dom'
import CardCart from '../components/CardCart';

export default function Cart() {

    const navigate = useNavigate();
    const count = useProduct((state) => state.count)
    const products = useProduct((state) => state.products)
    const sumPrice = useProduct((state) => state.sumPrice)
    const clear = useProduct((state) => state.clear)
    const clearProdact = useProduct((state) => state.clearProdact)
    const clearPrice = useProduct((state) => state.clearPrice)

        function handleshop(){
        navigate('/')
    }
    function handleToRemove(){
        clear()
        clearProdact()
        clearPrice()

    }



  return (
    <div className='cart-page'>
        <button onClick={handleshop}>{sumPrice}</button>
        <p>{count}</p>
        <button onClick={handleToRemove}>clear</button>
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
