import React from "react";
import { observer } from "mobx-react-lite";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import ListGroup from 'react-bootstrap/ListGroup';

const FooterStyles = {
  padding: "29px",
  height: "149px",
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
  borderTopLeftRadius: "30px",
  borderTopRightRadius: "30px",
  background: "white",
  marginTop: "8px"
};

const AppFooter = observer(() => {
  return (
    <footer style={FooterStyles}>
      <Row className="d-flex">
        <Col md={3}>
          <h3>QPICK</h3>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item className="border-0">Избранное</ListGroup.Item>
            <ListGroup.Item className="border-0">Корзина</ListGroup.Item>
            <ListGroup.Item className="border-0">Закладки</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          Условия сервиса
        </Col>
        <Col md={3}>
            Icons
        </Col>
      </Row>
    </footer>
  );
});

export default AppFooter;
