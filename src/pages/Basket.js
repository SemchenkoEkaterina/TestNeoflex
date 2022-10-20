import React from "react";
import { Container } from "react-bootstrap";
import CartProductsList from "../components/CartProductsList";
import CartSummary from "../components/CartSummary";
import { observer } from "mobx-react-lite";

const Basket = observer(() => {
  return (
    <Container className="d-flex justify-content-between mt-5">
      <div>
        <h3>Корзина</h3>
        <CartProductsList />
      </div>
      <CartSummary />
    </Container>
  );
});

export default Basket;
