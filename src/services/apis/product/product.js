import axiosInstance from "@/services/axiosInstance";

export const getAllProducts = async () => {
  try {
    const { data } = await axiosInstance.get("products");
    console.log("🚀 ~ getAllProducts ~ data:", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getProduct = async (id) => {
  try {
    const { data } = await axiosInstance.get(`products/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addProduct = async (productData) => {
  try {
    const { data } = await axiosInstance.post(`products`, productData);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const { data } = await axiosInstance.delete(`products/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
