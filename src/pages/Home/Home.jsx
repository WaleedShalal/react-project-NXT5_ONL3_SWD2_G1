import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  reset,
} from "@/store/counterSlice/counterSlice";

function Home() {
  const { value: counterValue } = useSelector(({ counter }) => counter);
  const dispatch = useDispatch();

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <h2>Counter: {counterValue}</h2>
      <div className="d-flex gap-5">
        <button onClick={() => dispatch(increment())}>increase</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          increase by +5
        </button>
        <button onClick={() => dispatch(decrement())}>decrease</button>
        <button onClick={() => dispatch(decrementByAmount(5))}>
          decrease by -5
        </button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </div>
  );
}

export default Home;
