import React, { useState } from "react";
import {
  Card,
  Input,
  Label,
  Button,
  Col,
  CardHeader,
  CardBody,
} from "reactstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const StoreApplication = () => {
  const [value, setValue] = useState();
  const [storename, setStorename] = useState({ store_name: "" });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setStorename({ ...storename, [name]: value });
  };
  return (
    <div>
      <Col sm="6" id="storeappcol">
        <Card id="storeappcard">
          <CardHeader>Mağaza Başvuru</CardHeader>
          <CardBody>
            <Label>Mağaza Adı:</Label>
            <Input name="store_name" onChange={onChangeHandler}  />
            <Label>Vergi No:</Label>
            <Input />
            <Label>Telefon Numarası:</Label>
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
            />
            <Label>E-mail</Label>
            <Input />
            <Button id="storeapp-btn">Başvur</Button>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default StoreApplication;
