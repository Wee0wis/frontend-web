import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Drawer from './components/Drawer';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Agenda from './pages/Agenda';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          {/* Drawer: Responsivo (arriba en móviles, izquierda en pantallas grandes) */}
          <Col xs={12} md={2} className="drawer-col">
            <Drawer />
          </Col>
          {/* Contenido principal */}
          <Col xs={12} md={10}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/agenda" element={<Agenda/>}/>
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;