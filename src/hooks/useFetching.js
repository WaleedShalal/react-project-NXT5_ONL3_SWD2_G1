import { useParams } from "react-router";
import { useState } from "react";
import apis from "@/services/apis";

function useFetching() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({});

  const handleFecthData = async () => {
    if (isNaN(id)) {
      setIsLoading(false);
      setIsError(true);
      return;
    }
    try {
      const data = await apis.getProduct(id);
      // const response = await fetch(`${url}${id}`);
      // if (!response.ok) throw new Error("Invalid product id ❌");
      // const data = await response.json();
      setData(data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
      console.log("Finally !!");
    }
  };

  return {
    isLoading,
    isError,
    data,
    handleFecthData,
  };
}

export default useFetching;
