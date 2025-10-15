import { useSelector } from "react-redux";

function Category() {
  const storeData1 = useSelector(({ counter }) => counter);
  const storeData2 = useSelector(({ products }) => products);

  return <div>Category</div>;
}

export default Category;
