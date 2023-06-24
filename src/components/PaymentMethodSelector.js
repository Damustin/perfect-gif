import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const PaymentMethodSelector = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [selectedCard, setSelectedCard] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
    setErrorMessage('');
  };

  const handlePaymentAmountChange = (event) => {
    setPaymentAmount(event.target.value);
    setErrorMessage('');
  };

  const handleCardChange = (event) => {
    setSelectedCard(event.target.value);
    setErrorMessage('');
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();

    if (selectedMethod === '') {
      setErrorMessage('Error: Debe seleccionar un método de pago.');
    } else if (selectedMethod === 'cash' && paymentAmount === '') {
      setErrorMessage('Error: Debe ingresar un monto de pago en efectivo.');
    } else if (selectedMethod === 'card' && selectedCard === '') {
      setErrorMessage('Error: Debe seleccionar una tarjeta de crédito.');
    } else {
      setShowAlert(true);
      setErrorMessage('');
    }
  };

  const handleAlertClose = () => {
    setSelectedMethod('');
    setPaymentAmount('');
    setSelectedCard('');
    setShowAlert(false);
  };

  return (
    <div>
      <h2 className='danger-form'>Selecciona un método de pago</h2>

      {errorMessage && <Alert className="p-3 m-5" variant="danger">{errorMessage}</Alert>}

      <Form onSubmit={handlePaymentSubmit} className="form-payment m-5">
        <Form.Group>
          <Form.Check
            type="radio"
            id="cash"
            name="paymentMethod"
            value="cash"
            checked={selectedMethod === 'cash'}
            onChange={handleMethodChange}
            label="Pago en efectivo"
            className="m-2"
          />

          {selectedMethod === 'cash' && (
            <Form.Control
              type="text"
              placeholder="Ingrese el monto del pago"
              value={paymentAmount}
              onChange={handlePaymentAmountChange}
              className="m-2"
            />
          )}

          <Form.Check
            type="radio"
            id="card"
            name="paymentMethod"
            value="card"
            checked={selectedMethod === 'card'}
            onChange={handleMethodChange}
            label="Pago con tarjeta"
            className="m-2"
          />

          {selectedMethod === 'card' && (
            <div>
              <Form.Check
                type="radio"
                id="visa"
                name="cardType"
                value="visa"
                checked={selectedCard === 'visa'}
                onChange={handleCardChange}
                label="Visa"
                className="m-2"
              />

              <Form.Check
                type="radio"
                id="mastercard"
                name="cardType"
                value="mastercard"
                checked={selectedCard === 'mastercard'}
                onChange={handleCardChange}
                label="Mastercard"
                className="m-2"
              />

              <Form.Check
                type="radio"
                id="amex"
                name="cardType"
                value="amex"
                checked={selectedCard === 'amex'}
                onChange={handleCardChange}
                label="American Express"
                className="m-2"
              />
            </div>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Realizar pago
        </Button>
      </Form>

      {showAlert && (
        <Alert variant="success" onClose={handleAlertClose} dismissible className="p-3 m-5">
          Gracias por su compra
        </Alert>
      )}
    </div>
  );
};

export default PaymentMethodSelector;


