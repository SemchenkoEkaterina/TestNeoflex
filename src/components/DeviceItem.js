import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from "../assets/star.png";
import { Context } from "../index";

const CardStyles = {
  padding: "20px",
  height: "407px",
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
  borderRadius: "30px",
};

const RateTextStyles = {
  paddingLeft: "10px",
};

const BuyButtonStyles = {
  textDecoration: "none",
  color: "black",
  fontWeight: "600",
  padding: "0"
}

const DeviceItem = ({ device }) => {
  const { cart } = useContext(Context);
  console.log(cart);

  return (
    <Card style={CardStyles} className="d-flex justify-content-between">
      <div
        height={250}
        className="d-flex justify-content-center align-items-center"
      >
        <Image src={require("../img/" + device.img)} />
      </div>
      <div>
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>{device.title}</div>
          <div style={{ color: "#FFA542" }}>
            {device.price} {"\u20bd"}
          </div>
        </div>
        <div className="text-black-50 mt-3 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Image width={18} height={18} src={star} />
            <div style={RateTextStyles}>{device.rate}</div>
          </div>
          <Button
            variant="link"
            style={BuyButtonStyles}
            onClick={() => cart.addDevice(device)}
          >
            Купить
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DeviceItem;
