import { useSelector } from "react-redux";

function Cart() {
  const { value: counterValue } = useSelector(({ counter }) => counter);
  return (
    <div>
      <h1>Cart Page</h1>
      <h2>Counter: {counterValue}</h2>
    </div>
  );
}

export default Cart;
