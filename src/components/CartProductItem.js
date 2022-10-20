import React, {useContext} from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Context } from "../index";

const CardStyles = {
  padding: "20px",
  width: "650px",
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
  borderRadius: "30px",
};

const MinusButtonStyles = {
  textDecoration: "none",
  fontWeight: "600",
  padding: "0",
  margin: "12px",
  borderRadius: "50%",
  background: "#FFA542",
  color: "white",
  width: "22px",
  textAlign: "center",
  fontSize: "15px",
}

const PlusButtonStyles = {
  textDecoration: "none",
  fontWeight: "600",
  padding: "0",
  margin: "12px",
  borderRadius: "50%",
  background: "#FFA542",
  color: "white",
  width: "22px",
  textAlign: "center",
  fontSize: "15px",
}


const CartProductItem = ({ device }) => {
  const { cart } = useContext(Context);
  
  return (
    <Card style={CardStyles} className="d-flex justify-content-between mt-4">
      <Row className="d-flex">
        <Col md={3} width={146} className="text-center">
          <Image className="img-fluid" src={require("../img/" + device.img)} />
          <Button
              variant="link"
              style={MinusButtonStyles}
              onClick={() => cart.decrementDevice(device)}
            >
              -
            </Button>
          {device.amount}
          <Button
              variant="link"
              style={PlusButtonStyles}
              onClick={() => cart.addDevice(device)}
            >
              +
            </Button>
        </Col>
        <Col md={8} className="d-flex flex-column justify-content-center">
          <span>{device.title}</span>
          <span className="text-secondary">{device.price} {"\u20bd"}</span>
        </Col>
        <Col md={1}>
          <Button
            variant="light"
            onClick={() => cart.removeDevice(device)}
            className="rounded-circle"
          >
            &#10006;
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default CartProductItem;
