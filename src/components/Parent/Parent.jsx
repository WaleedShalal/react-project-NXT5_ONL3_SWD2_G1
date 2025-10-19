import React, { useCallback, useState } from "react";
import ChildOne from "./ChildOne/ChildOne";
import ChildTwo from "./ChildTwo/ChildTwo";
import { Button } from "react-bootstrap";

function Parent() {
  const [counter, setCounter] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  console.log("Log Parent Component");

  const componentsData = { key: "value" }; // xvty

  // TODO:// useMemo
  const memoizedComponentsData = useCallback(() => {
    return componentsData; // xvty
  }, [counterTwo]);

  return (
    <div>
      <h1>Parent Component</h1>
      <h2>{counter}</h2>
      <Button onClick={() => setCounter((prev) => prev + 1)}>+</Button>
      <h2>{counterTwo}</h2>
      <Button onClick={() => setCounterTwo((prev) => prev + 1)}>2+</Button>
      {/* <ChildOne simpleData={componentsData} />
      <ChildTwo simpleData={componentsData} /> */}
      <ChildOne simpleData={memoizedComponentsData()} />
      <ChildTwo simpleData={memoizedComponentsData()} />
    </div>
  );
}

export default Parent;
