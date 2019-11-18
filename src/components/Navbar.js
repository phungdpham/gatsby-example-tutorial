import React from "react"
import { Link } from "gatsby"
// import styles from './navbar.module.scss'


const Navbar = () => {
  return (
    <nav>
      <h2>company</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/examples/">Examples</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/images/">Images</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/tours/">Tours</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
