import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row, Col } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className="d-flex mb-3">
      {device.devices.map((device) => (
        <Col md={4} className={"mt-4"}>
          <DeviceItem key={device.id} device={device} />
        </Col>
      ))}
    </Row>
  );
});

export default DeviceList;
