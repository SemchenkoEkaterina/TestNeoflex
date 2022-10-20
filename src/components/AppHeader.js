import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {ReactComponent as CartLogo} from "../assets/cart.svg";
import { Link } from "react-router-dom";

const HeaderStyles = {
  padding: "29px",
  height: "60px"
};

const AmountProductStyles = {
  borderRadius: "50%",
  background: "#FFA542",
  position: "absolute",
  color: "white",
  width: "22px",
  textAlign: "center",
  fontSize: "15px",
  left: "13px",
  top: "-10px"
};

const AppHeader = observer(() => {
  const { cart } = useContext(Context);

  return (
    <header style={HeaderStyles}>
      <Row className="d-flex">
        <Col md={3}>
          <Link to="/shop" style={{color: "black", textDecoration: "none"}} >
            <h2>QPICK</h2>
          </Link>
        </Col>
        <Col md={{ span: 1, offset: 8 }}>
          <Link to="/basket" className="position-relative" >
            <CartLogo />
            <div style={AmountProductStyles}>{cart.amount}</div>
          </Link>
        </Col>
      </Row>
    </header>
  );
});

export default AppHeader;
