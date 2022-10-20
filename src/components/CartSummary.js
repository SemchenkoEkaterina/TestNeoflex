import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const CardStyles = {
  padding: "0",
  height: "110px",
  width: "348px",
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
  borderRadius: "30px",
};

const BuyButtonStyles = {
  background: "#101010",
  borderRadius: "20px",
  minHeight: "65px",
};

const CartSummary = observer(() => {
  const { cart } = useContext(Context);

  return (
    cart.amount > 0 ?
    <Card style={CardStyles}>
      <div className="d-flex justify-content-between align-items-center p-4">
        <div>
          Итого
        </div>
        <div>
          {cart.fullPrice}  {"\u20bd"}
        </div>
      </div>
      <Button
        variant="dark"
        style={BuyButtonStyles}
        onClick={() => console.log('Переход к оформлению')}
      >
        Перейти к оформлению
      </Button>
    </Card> :
    null
  );
});

export default CartSummary;
