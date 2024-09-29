
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {/* Agrega otros links según las categorías que necesites */}
      <Link to="/category/vehiculos">Vehículos</Link>
      <Link to="/category/libros">Libros</Link>
    </nav>
  );
}

export default Navbar;
