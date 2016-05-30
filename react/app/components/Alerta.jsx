
import React from 'react';
import { Alert } from 'react-bootstrap'; 

const Alerta = (props) => {
  return (
      <Alert bsStyle="warning">
        <strong>{props.titulo}</strong> 
        <p>{props.texto}</p>
      </Alert>
  );
};

export default Alerta;
