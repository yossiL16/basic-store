import { useProduct } from '../manage'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {

      const navigate = useNavigate();
    const count = useProduct((state) => state.count)

    function handleCart(){
        navigate('/Cart')
    }

  return (
    
    <div className='nav-bar'>
        <nav>
          <button onClick={handleCart}>{count}</button>
        </nav>
    </div>
  )
}
