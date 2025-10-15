import { useSelector } from "react-redux";

function Category() {
  const storeData = useSelector(({ counter, products }) => ({
    counter,
    products,
  }));

  return <div>Category</div>;
}

export default Category;
