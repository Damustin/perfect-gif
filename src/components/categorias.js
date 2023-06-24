import React, { useState, useRef } from "react";
import { Alert } from "react-bootstrap";

const Categorias = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertPosition, setAlertPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleLinkClick = () => {
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const buttonPosition = {
      x: buttonRect.left + window.scrollX,
      y: buttonRect.top + window.scrollY,
    };

    setAlertPosition(buttonPosition);
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="col cate">
      <div className="card">
        <img src={props.srcimg} className="card-img-top" />
        <div className="card-body">
          <button className="card-title btn" onClick={handleLinkClick} ref={buttonRef}>
            {props.categoria}
          </button>
        </div>
      </div>

      {showAlert && (
        <div
          className="alert-overlay"
          style={{ top: alertPosition.y, left: alertPosition.x }}
        >
          <Alert variant="info" onClose={handleCloseAlert} dismissible>
            <Alert.Heading>{props.categoria}</Alert.Heading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nunc sit amet lacus condimentum hendrerit.
            </p>
          </Alert>
        </div>
      )}
    </div>
  );
};

export default Categorias;
