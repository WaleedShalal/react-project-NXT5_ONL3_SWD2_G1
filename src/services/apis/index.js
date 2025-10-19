import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
} from "./product/product";
import { getAllUsers } from "./user/user";

const apis = {
  getAllProducts,
  getProduct,
  addProduct,
  deleteProduct,
  getAllUsers,
};

export default apis;
