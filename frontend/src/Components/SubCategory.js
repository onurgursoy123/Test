import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Row,
  Col,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../Stores/CategoryStore";
import { addSubcategories, subadd } from "../Stores/SubStore";

const SubCategory = () => {
  const { categories } = useSelector((state) => state.categoryReducer);
  // console.log(categories);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const [subcategory, setSubcategory] = useState({
    sub_name: "",
    main_category_id: "",
  });

  useEffect(() => {
    dispatch(getCategories());
  }, [getCategories]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSubcategory({ ...subcategory, [name]: value });
  };

  const onChangeSelect = (e) => {
    console.log(e);
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const mydid = parseInt(el.getAttribute("id"));
    const name = e.target.name;
    console.log(e);
    setSubcategory({ ...subcategory, [name]: mydid });
  };
  console.log(subcategory);

  function saveSubCategory() {
    dispatch(addSubcategories(subcategory)).then((r) => console.log(r));
  }
  return (
    <div>
      <Button onClick={toggle} id="subcategory">
        Alt Kategori
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Alt Katagori Ekle</ModalHeader>
        <ModalBody>
          <Label>Ana Katagori</Label>
          <Row>
            <Col>
              {categories && categories.length > 0 ? (
                <select
                  className="form-select"
                  onChange={onChangeSelect}
                  name="main_category_id"
                >
                  <option>Bir Kategori Seçin</option>
                  {categories.map((category) => (
                    <option key={category.id} id={category.id}>
                      {category.category_name}
                    </option>
                  ))}
                </select>
              ) : (
                ""
              )}
            </Col>
          </Row>
          <br></br>
          <label>Alt Katagori</label>
          <Input name="sub_name" onChange={onChangeHandler} />
        </ModalBody>
        <br></br>
        <ModalFooter>
          <Button onClick={() => saveSubCategory()}>Ekle</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default SubCategory;
