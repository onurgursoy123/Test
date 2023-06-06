import React, { useState } from "react";
import { Input, Button, Col, Card, CardHeader, CardBody, } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [msg, setMsg] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate(); 

  const login = () => {
    const users = { username };
    if (user.email === "") {
      alert("Email Boş Olamaz");
    } else if (user.password === "") {
      alert("Şifre Boş Olamaz");
    }
    
    axios
      .post("http://localhost:8000/api/auth/login", user)
      .then((response) => {
        setMsg(response.data);
        localStorage.setItem("authenticated", success);
        navigate("/");
      });
  };
  return (
    <div>
      <Col sm="4" id="login">
        <Card id="logincard">
          <CardHeader>Giriş Yap</CardHeader>
          <CardBody>
            <Input
              id="login-email"
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
              id="login-password"
              label="Password"
              type="password"
              placeholder="Şifre"
              name="password"
              value={user.password}
              onChange={(e) =>
                setUser((state) => ({ ...state, password: e.target.value }))
              }
            />
            <Button id="login-btn" onClick={login} variant="contained">
              Giriş
            </Button>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
}

export default Login;
