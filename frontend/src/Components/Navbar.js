import React from "react";
import { InputGroup, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div id="navbar">
      <Link to="Home" id="home">
        Ana Sayfa
      </Link>
      <Link to="productcreate" id="home">
        Ürün Ekle
      </Link>
      <Link to="categorycreate" id="home">
        Kategori Ekle
      </Link>
      <InputGroup id="nvbr-1">
        <Input placeholder="Ara..." />
        <Button id="nvbr-btn">Ara</Button>
      </InputGroup>
      <Link to="RegisterLogin" id="registerlogin">
        Giriş
      </Link>
    </div>
  );
}

export default Navbar;
