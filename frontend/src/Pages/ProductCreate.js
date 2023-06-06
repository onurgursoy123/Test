import React, {useEffect, useState} from "react";  
import {
  CardBody,
  CardHeader,
  Col,
  Card,
  Input,
  Button,
  Label,
  Table,
} from "reactstrap";
import { getSubcategories } from "../Stores/SubStore";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ProductCreate = () => {
const [image, setImage]= useState([]);
console.log(image)
  const { subcategories } = useSelector((state) => state.subcategoryReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubcategories());
  }, [getSubcategories]);
  // function imageList (){
  //   return image?.map(item=>{
  //     return (<img src={URL.createObjectURL(item)}></img>)
  //   })
  // }
  return (
    <div>
      <Col sm="6" id="productcreatecol">
        <Card id="productcreatecard">
          <CardHeader>Ürün Ekle</CardHeader>
          <CardBody>
            <Label>Alt Katagori</Label>
            <Input name="select" type="select">
              <option>Bir Alt Katagori Seçin</option>
              {subcategories.map((subcategory) => (
                    <option key={subcategory.id} id={subcategory.id}>
                      {subcategory.sub_name}
                    </option>
                  ))}
            </Input>
            <Label>Ürün Adı</Label>
            <Input name="product_name" />
            <Label>Açıklama</Label>
            <Input type="textarea" />
            <Label for="exampleFile"></Label>
            <div></div>
            <Input
              id="exampleFile"
              name="file"
              type="file"
              multiple={true}
              accept="image/*"
              onChange={(event) => {
                setImage(event.target.files);
              }}
            />
            <Button id="productcreate-btn">Ekle</Button>
          </CardBody>
        </Card>
        <Table>
          <thead>
            <tr>
              <th>Ürün Adı</th>
              <th>Açıklama</th>
              <th>Düzenle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
           
            </tr>
          </tbody>
        </Table>
      </Col>
    </div>
  );
};

export default ProductCreate;
