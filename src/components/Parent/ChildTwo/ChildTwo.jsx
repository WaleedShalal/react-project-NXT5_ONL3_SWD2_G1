import React from "react";

function ChildTwo(props) {
  console.log("Log ChildTwo Component", props);

  return (
    <div>
      <h1>ChildTwo Component</h1>
    </div>
  );
}

export default React.memo(ChildTwo);
