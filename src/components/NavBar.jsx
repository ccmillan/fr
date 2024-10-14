import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <h1>Carpincho</h1>
      </a>
      <ul className="menu">
        <li>
          <a href="#" className="menu-link">
            Inicio
          </a>
        </li>
        <li>
          <a href="#" className="menu-link">
            Nosotros
          </a>
        </li>
        <li>
          <a href="#" className="menu-link">
            Productos
          </a>
        </li>
        <li>
          <a href="#" className="menu-link">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
