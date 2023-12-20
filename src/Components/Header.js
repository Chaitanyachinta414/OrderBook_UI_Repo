import Navbar from "./Navbar"
import { TbLogout2 } from "react-icons/tb";
import { GiBookAura } from "react-icons/gi";
import { Link} from 'react-router-dom';



const Header = () => {

    return (
        <div className='table-wrapper'>
        <div className="Navbar-Section">
        <div className='width-adjust'>
            <div className='logo-adjust'>
                <span className="icon-adjustment book-icon"><GiBookAura /></span>
                <h2 className='header'>Orderbook</h2>
            </div>
            <div><Navbar /></div>
            <Link to="/" className="icon-adjustment search-icon"><TbLogout2 />SignOut</Link>
        </div>
    </div>
    </div>
    )

}

export default Header