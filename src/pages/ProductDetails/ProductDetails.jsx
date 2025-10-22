import { useEffect } from "react";
import { Container } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import useFetching from "../../hooks/useFetching";

const URL = "https://fakestoreapi.com/products/";

function ProductDetails() {
  console.log("ProductDetails Component");
  const { setEnableFetch, isLoading, isError, data, refetch } =
    useFetching(URL);

  // useEffect(() => {
  //   handleFecthData();
  // }, []);

  return (
    <div className="product-details">
      <Container>
        <button onClick={() => setEnableFetch(true)}>Start loading data</button>
        <button onClick={refetch}>reftech</button>
        {isLoading && <div>Loading product details data ...</div>}
        {!isLoading && isError && <div>Faild to fetch data </div>}
        {!isLoading && !isError && (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.description}</Card.Text>
              <Card.Text>{data.price}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </Container>
    </div>
  );
}

export default ProductDetails;
