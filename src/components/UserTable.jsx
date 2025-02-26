import React from 'react';
import { Table, Button } from 'react-bootstrap';

function UserTable({ users, handleEdit, handleDelete }) {
  return (
    <Table striped bordered hover className="user-table">
      <thead>
        <tr>
          <th>NO</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Correo Electrónico</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.nombre}</td>
            <td>{user.estado_solicitud}</td>
            <td>{user.numero_de_celular}</td>
            <td>{user.correo_cliente}</td>
            <td>
              <Button variant="warning" onClick={() => handleEdit(user)}>
                Editar
              </Button>{' '}
              <Button variant="danger" onClick={() => handleDelete(user.id)}>
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default UserTable;