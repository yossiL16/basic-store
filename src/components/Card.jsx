import { useProduct } from '../manage';


export default function Card({id, name, price, category, description, image}) {
    let products = useProduct((state) => state.products)
    const addProduct = useProduct((state) => state.addProduct)
    let removeProduct = useProduct((state) => state.removeProduct)
    const add = useProduct((state) => state.add)
    const dec = useProduct((state) => state.dec)
    const addPrice = useProduct((state) => state.addPrice)
    const decPrice = useProduct((state) => state.decPrice)

    const find = products.some((i) => id === i.id)

    function hanleButton(){
        const item = { id, name, category, price }        
        if(find) {
            removeProduct(id)
            dec()
            decPrice(price)
        } else {
            addProduct(item)
            add()
            addPrice(price)
        }
    }

  return (
    <div className='crad'>
        <div className='image-item'>
            {image}
        </div>
        <div className='data-item'>
            <p>{category}</p>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className='pric-item'>
                <span>${price}</span>
                <span>{find ? 'In cart' : 'Not in cart'}</span>
            </div>
            <br />
            <button onClick={hanleButton}>{find ? "Remove from cart" : "Add to cart" }</button>

        </div>
    </div>
  )
}
