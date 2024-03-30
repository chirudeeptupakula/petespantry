import { Component } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItem";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo"> Pete's Pantry</h1>
        <div className="menu-icons">
          <i className="fa-solid fa-bars"></i>
          <i className="fa-solid fa-times"></i>
        </div>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href="/">
                  <i className={item.icon}></i>
                  <span>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
