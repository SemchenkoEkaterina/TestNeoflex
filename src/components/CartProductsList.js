import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row, Col } from "react-bootstrap";
import CartProductItem from "./CartProductItem";

const CartProductsList = observer(() => {
  const { cart } = useContext(Context);

  return (
    <Row className="d-flex mb-3">
      <Col md={12}>
        {cart.devices.length ? 
          cart.devices.map((device) => (
            <CartProductItem key={device.id} device={device} />
          )) :
          "Корзина, к сожалению, пуста..."
        }
      </Col>
    </Row>
  );
});

export default CartProductsList;
