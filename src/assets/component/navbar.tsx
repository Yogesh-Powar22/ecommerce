import { Link } from 'react-router-dom'
import Logo from '../images/site-logo.svg'

const Navbar = () => {
    return (
        <>
            <div style={{ display: 'flex', gap: '15px', margin: '20px 0' }}>
                <Link className="logo" to="/">
                    <img src={Logo} alt="" />
                </Link>
                <div className='nav-head container'>
                <Link className='nav-item' to="/"></Link>
                    <Link className='nav-item' to="/mens">men</Link>
                    <Link className='nav-item' to="/womens">women</Link>
                    <Link className='nav-item' to="/jewellery">Jewellery</Link>
                    <Link className='nav-item' to="/electronics">Electronics</Link>
                </div>
                <Link  className='nav-item' to="/cart" style={{float: 'right'}}>
                <i className="fa-solid fa-cart-shopping"></i>
                </Link>
            </div>

        </>
    )
}

export default Navbar
