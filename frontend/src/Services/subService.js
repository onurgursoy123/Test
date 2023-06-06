import axios from "axios";

const apiUrl = "http://localhost:8000/api/";

const getSubcategory = async () => {
  const response = await axios.get(apiUrl + "subcategories");
  return response.data;
};
const addSubcategory = async (subcategory) => {
  const response = await axios.post(apiUrl + "subcategory",subcategory);
  return response.data;
};

const subService = {
  getSubcategory,
  addSubcategory,
};
export default subService;
