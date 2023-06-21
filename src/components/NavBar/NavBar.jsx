import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"
import logoHonda from  './assets/logo.jpg'

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <img className="logoHonda" src={logoHonda} alt="Logo Honda" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink className="miBtn" activeClassName="active" to={`/categoria/1`}> CUB </NavLink>
          </li>

          <li>
            <NavLink className="miBtn" activeClassName="active" to={`/categoria/2`}> Business </NavLink>
          </li>
         
          <li>
            <NavLink className="miBtn" activeClassName="active" to={`/categoria/3`}> Scooter </NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />

    </header>
  )
}

export default NavBar