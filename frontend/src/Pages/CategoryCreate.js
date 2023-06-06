import React, { useState, useEffect } from "react";
import { Button, Col, Table } from "reactstrap";
import SubCategory from "../Components/SubCategory";
import Category from "../Components/Category";
import { useDispatch, useSelector } from "react-redux";
import { getSubcategories } from "../Stores/SubStore";
import { getCategories } from "../Stores/CategoryStore";


function CategoryCreate() {
  const { subcategories } = useSelector((state) => state.subcategoryReducer);
  const { categories } = useSelector ((state) => state.categoryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubcategories());
  }, [getSubcategories]);

  useEffect(() => {
    dispatch(getCategories());
  }, [getCategories]);

  return (
    <div>
      <Category />
      <SubCategory />
      <Col sm="6" id="categorycreatecol">
        <Table id="categorytable">
          <thead>
            <tr>
              <th>Kategori</th>
              <th>Alt Kategori</th>
              <th>Düzenle</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              {categories && 
              categories.map((category)=>(
                <td key={category.id} id={category.id}>{category.category_name}</td>
              ))}
              {subcategories && 
              subcategories.map((subcategory)=>(
                <td key={subcategory.id} id={subcategory.id}>{subcategory.sub_name}</td>
              ))}
              </tr>  
          </tbody>
        </Table>
      </Col>
    </div>
  );
}

export default CategoryCreate;
