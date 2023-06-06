import axios from "axios";

const apiUrl = "http://localhost:8000/api/";

const getProduct = async () => {
  const response = await axios.get(apiUrl + "product");
  return response.data;
};
const adddProduct = async (product) => {
  const response = await axios.post(apiUrl + "product", product);
  return response.data;
};

const productService = {
  getProduct,
  adddProduct,
};
export default productService;
