import axiosInstance from "@/services/axiosInstance";

export const getAllUsers = async () => {
  try {
    const { data } = await axiosInstance.get("users");
    console.log("🚀 ~ getAllProducts ~ data:", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
