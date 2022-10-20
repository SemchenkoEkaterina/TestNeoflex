import React from "react";
import { Container } from "react-bootstrap";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";

const Shop = observer(() => {
  return (
    <Container>
      <DeviceList />
    </Container>
  );
});

export default Shop;
