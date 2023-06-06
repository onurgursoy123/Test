import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { addCategory, categoryadd } from "../Stores/CategoryStore";

const Category = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [data, setData] = useState("");
  const [category, setCategory] = useState({ category_name: "" });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  function saveCategory() {
    dispatch(addCategory(category)).then((r) => console.log(r));
  }
  return (
    <div>
      <Button onClick={toggle} id="category">
        Kategori
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Ana Katagori Ekle</ModalHeader>
        <ModalBody>
          <Label>Ana Kategori</Label>
          <Input onChange={onChangeHandler} name="category_name" />
        </ModalBody>
        <br></br>
        <ModalFooter>
          <Button onClick={() => saveCategory()}>Ekle</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Category;
