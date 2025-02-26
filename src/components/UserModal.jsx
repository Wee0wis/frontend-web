import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function UserModal({ show, handleClose, user, handleSubmit }) {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState(user ? user.nombre : '');
  const [estadoSolicitud, setEstadoSolicitud] = useState(user ? user.estado_solicitud : '');
  const [numeroCelular, setNumeroCelular] = useState(user ? user.numero_de_celular : '');
  const [correoCliente, setCorreoCliente] = useState(user ? user.correo_cliente : '');

  // Función para manejar el envío del formulario
  const onSubmit = (e) => {
    e.preventDefault();

    // Crear el objeto con los datos del usuario
    const userData = {
      id: user ? user.id : Date.now(), // Si es un nuevo usuario, se genera un ID temporal
      estado_solicitud: estadoSolicitud,
      nombre: nombre,
      numero_de_celular: numeroCelular,
      correo_cliente: correoCliente,
    };

    console.log('Datos enviados al backend:', userData); // Depuración
    handleSubmit(userData); // Enviar los datos al componente padre
    handleClose(); // Cerrar el modal
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{user ? 'Editar Usuario' : 'Agregar Usuario'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          {/* Campo: Nombre */}
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </Form.Group>

          {/* Campo: Estado de la Solicitud */}
          <Form.Group className="mb-3">
            <Form.Label>Estado de la Solicitud</Form.Label>
            <Form.Select
              value={estadoSolicitud}
              onChange={(e) => setEstadoSolicitud(e.target.value)}
              required
            >
              <option value="">Seleccione un estado</option>
              <option value="M">Mesero</option>
              <option value="C">Caja</option>
              <option value="B">Bartender</option>
            </Form.Select>
          </Form.Group>

          {/* Campo: Número de Celular */}
          <Form.Group className="mb-3">
            <Form.Label>Número de Celular</Form.Label>
            <Form.Control
              type="text"
              value={numeroCelular}
              onChange={(e) => setNumeroCelular(e.target.value)}
              required
            />
          </Form.Group>

          {/* Campo: Correo del Cliente */}
          <Form.Group className="mb-3">
            <Form.Label>Correo del Cliente</Form.Label>
            <Form.Control
              type="email"
              value={correoCliente}
              onChange={(e) => setCorreoCliente(e.target.value)}
              required
            />
          </Form.Group>

          {/* Botón de Guardar */}
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default UserModal;