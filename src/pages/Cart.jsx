import { useProduct } from '../manage'
import CardCart from '../components/CardCart';

export default function Cart() {

    const count = useProduct((state) => state.count)
    const products = useProduct((state) => state.products)
    const sumPrice = useProduct((state) => state.sumPrice)
    const clear = useProduct((state) => state.clear)
    const clearProdact = useProduct((state) => state.clearProdact)
    const clearPrice = useProduct((state) => state.clearPrice)

    function handleToRemove(){
        clear()
        clearProdact()
        clearPrice()
    }

  return (
    <div className='cart-page'>
        <div className='cart-summary'>
        <p>Total Price <strong>{sumPrice}</strong></p>
        <p>Item in cart: {count}</p>
        <button onClick={handleToRemove} style={{background: 'red', color: 'white'}}>clear</button>
        </div>
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
