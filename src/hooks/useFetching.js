import { useParams } from "react-router";
import { useState } from "react";
import apis from "@/services/apis";
import { useQueries, useQuery } from "@tanstack/react-query";

const apiFn = (id) => apis.getProduct(id);

function useFetching() {
  const { id } = useParams();
  const [enableFetch, setEnableFetch] = useState(false);
  console.log("🚀 ~ useFetching ~ id:", id);
  const {
    isLoading,
    isError,
    data = {},
    refetch,
  } = useQuery({
    queryKey: ["product-detials", id],
    queryFn: () => apiFn(id),
    enabled: enableFetch,
  });

  console.log({
    isLoading,
    isError,
    data,
  });

  return {
    isLoading,
    isError,
    data,
    setEnableFetch,
    refetch,
  };
}

export default useFetching;
