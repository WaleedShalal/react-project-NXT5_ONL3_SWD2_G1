import { useEffect } from "react";
import { Link, Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllProducts } from "@/store/productsSlice/productsSlice";
import { Card } from "react-bootstrap";
import apis from "@/services/apis"; // index.js
// import apis from "@/services/apis.apis"; // apis.js

export default function Products() {
  apis;
  const { isLoading, isError, data } = useSelector(({ products }) => products);
  console.log(`🚀 ~ Products ~ { isLoading, isError, data }:`, {
    isLoading,
    isError,
    data,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <div className="text-center">
      <div className="d-flex flex-wrap justify-content-between">
        {isLoading && <div>Loading data ...</div>}
        {!isLoading && isError && <div>Faild getting data ❌</div>}
        {!isLoading &&
          !isError &&
          data.map(({ id, title, image, description, price }) => (
            <Link key={id} to={`/product-details/${id}`} className="px-5">
              <Card style={{ width: "12rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Card.Text>{price}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          ))}
        {/* <Outlet /> */}
      </div>
    </div>
  );
}
