import { Link } from 'react-router-dom'
import Logo from '../images/site-logo.svg'

const Navbar = () => {
    return (
        <>
            {/* <div style={{ display: 'flex', gap: '15px', margin: '20px 0' }}>
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
                <Link className='nav-item' to="/cart" style={{ float: 'right' }}>
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
            </div> */}



            <nav className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title">
                        <Link className="logo" to="/">
                            <img src={Logo} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <ul className="nav-list">
                    <li>
                        <Link className='nav-item' to="/"></Link>
                    </li>
                    <li>
                        <Link className='nav-item' to="/mens">men</Link>
                    </li>
                    <li>
                        <Link className='nav-item' to="/womens">women</Link>
                    </li>
                    <li>
                        <Link className='nav-item' to="/jewellery">Jewellery</Link>
                    </li>
                    <li>
                        <Link className='nav-item' to="/electronics">Electronics</Link>
                    </li>

                </ul>
            </nav>

        </>
    )
}

export default Navbar
