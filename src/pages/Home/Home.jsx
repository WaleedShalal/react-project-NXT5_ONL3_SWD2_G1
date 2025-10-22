import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  reset,
} from "@/store/counterSlice/counterSlice";
import { useState } from "react";
import { useLocation } from "react-router";

function Home() {
  const location = useLocation();
  console.log("🚀 ~ Home ~ location:", location);
  const [isRedClass, setIsRedClass] = useState(true);
  const [numbers, setNumbers] = useState([1, 2, 3]);
  const { value: counterValue } = useSelector(({ counter }) => counter);
  const dispatch = useDispatch();

  return (
    <div className="home-page">
      <ul>
        {numbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
      <button onClick={() => setNumbers((prev) => [...prev, prev.length + 1])}>
        Add number with push
      </button>
      <button onClick={() => setNumbers((prev) => [prev.length + 1, ...prev])}>
        Add number with unshfit
      </button>
      <h1 className={isRedClass ? "text-danger" : "text-success"}>Home Page</h1>
      <button onClick={() => setIsRedClass((prev) => !prev)}>
        Change Class Color
      </button>
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
