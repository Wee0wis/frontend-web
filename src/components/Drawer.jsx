import React from 'react';
import { Nav } from 'react-bootstrap';
import '../styles/drawer.css'; // Importa los estilos

function Drawer() {
  return (
    <div className="drawer">
      <Nav className="flex-column">
        <Nav.Link href="/">Dashboard</Nav.Link>
        <Nav.Link href="/users">Gestión de Trabajadores</Nav.Link>
      </Nav>
    </div>
  );
}

export default Drawer;