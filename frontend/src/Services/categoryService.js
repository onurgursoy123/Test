import axios from "axios";

const apiUrl = "http://localhost:8000/api/";

const getCategory = async () => {
  const response = await axios.get(apiUrl + "categories");
  //  console.log(response.data)
  return response.data;
};
const addCategory = async (category) => {
  const response = await axios.post(apiUrl + "category", category);
  // console.log(response.data)
  return response.data;
};

const categoryService = {
  getCategory,
  addCategory,
};
export default categoryService;
