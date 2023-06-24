import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Navbar from '../components/navbar';
import Contact from '../components/contact';

const Formulario = () => {
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (mail.trim() === '' || message.trim() === '') {
      setShowErrorAlert(true);
      return;
    }

    // Realizar el envío del formulario
    setShowSuccessAlert(true);
    setMail('');
    setMessage('');
  };

  const handleMailChange = (event) => {
    setMail(event.target.value);
    setShowErrorAlert(false);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setShowErrorAlert(false);
  };

  const handleSuccessAlertClose = () => {
    setShowSuccessAlert(false);
  };

  const handleErrorAlertClose = () => {
    setShowErrorAlert(false);
  };

  return (
    <>
      <Navbar/>
      <h2 className="form-payment">Escríbenos</h2>
      <Form className="mt-5" onSubmit={handleSubmit}>
        <div className="m-3 form-group">
          <Form.Label htmlFor="exampleFormControlInput1">Dirección de correo electrónico</Form.Label>
          <Form.Control
            type="email"
            name="mail"
            value={mail}
            onChange={handleMailChange}
            id="exampleFormControlInput1"
            placeholder="nombre@ejemplo.com"
          />
        </div>
        <div className="m-3 form-group">
          <Form.Label htmlFor="exampleFormControlTextarea1">Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={message}
            onChange={handleMessageChange}
            id="exampleFormControlTextarea1"
            rows="3"
          />
        </div>
        <Button type="submit" className="btn">Enviar</Button>
      </Form>

      <Alert className='m-3' variant="success" show={showSuccessAlert} onClose={handleSuccessAlertClose} dismissible>
        Se envió el mensaje de {mail}
      </Alert>

      <Alert className='m-3' variant="danger" show={showErrorAlert} onClose={handleErrorAlertClose} dismissible>
        Por favor, completa todos los campos.
      </Alert>
      <Contact/>
    </>
  );
};

export default Formulario;

