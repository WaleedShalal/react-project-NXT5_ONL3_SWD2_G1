import React from "react";

function ChildOne(props) {
  console.log("Log ChildOne Component", props);
  return (
    <div>
      <h1>ChildOne Component</h1>
    </div>
  );
}

export default React.memo(ChildOne);

// export default React.memo(ChildOne, (prev, next) => {
//   // console.log("🚀 ~ Log prev,next:", prev, next);
//   // return prev.simpleData.key === next.simpleData.key;
// });
