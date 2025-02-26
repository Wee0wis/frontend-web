import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DashboardCard from '../components/DashboardCard';

import '../styles/dashboard.css';

function Dashboard() {
  return (
    <div>
      <Container fluid className="dashboard-container">
        <Row>
          <Col xs={12}>
            <h1>Dashboard</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={4} className="mb-3">
            <DashboardCard title="" value="" color="#3498db" />
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-3">
            <DashboardCard title="" value="" color="#2ecc71" />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="chart-container">
              <h2>Gráfico de Ga del Día x Hora</h2>
              {/* Aquí iría tu gráfica (puedes usar Chart.js, ApexCharts, etc.) */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard; 