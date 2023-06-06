import React, { useState } from "react";
import { Input, Button, Col, Card, CardHeader, CardBody } from "reactstrap";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });

  async function signup() {
    const response = await axios.post(
      "http://localhost:8000/api/auth/register",
      user
    );
    setData(response.data);
    setUser({ name: "", email: "", password: "" });
  }
  return (
    <div>
      <Col sm="4" id="register">
        <Card id="registercard">
          <CardHeader>Kayıt ol</CardHeader>
          <CardBody>
            <Input
              id="name"
              type="text"
              label="Name"
              placeholder="İsim"
              name="name"
              value={user.name}
              onChange={(e) =>
                setUser((state) => ({ ...state, name: e.target.value }))
              }
            />
            <Input
              id="email"
              type="text"
              label="Email"
              placeholder="E-mail"
              name="email"
              value={user.email}
              onChange={(e) =>
                setUser((state) => ({ ...state, email: e.target.value }))
              }
            />
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Şifre"
              name="password"
              value={user.password}
              onChange={(e) =>
                setUser((state) => ({ ...state, password: e.target.value }))
              }
            />
            <Button
              id="register-btn"
              type="submit"
              onClick={signup}
              variant="contained"
            >
              Kaydol
            </Button>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default Register;
