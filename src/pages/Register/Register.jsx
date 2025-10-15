import { Form, useActionData } from "react-router";
import "./Register.css";

function Register() {
  const data = useActionData();
  console.log("🚀 ~ Register ~ data:", data);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const data = Object.fromEntries(formData.entries());
  //   console.log("🚀 ~ handleSubmit ~ data:", data);
  //   // sending data
  //   // ...
  // };
  return (
    // <form onSubmit={handleSubmit}>
    <Form method="post">
      <div>
        <label htmlFor="user-name">User Name</label>
        <input type="text" id="user-name" name="userName" />
      </div>
      <div>
        <label htmlFor="user-email">User Email</label>
        <input type="email" id="user-email" name="userEmail" />
      </div>
      <div>
        <label htmlFor="user-password">User Password</label>
        <input type="password" id="user-password" name="userPassword" />
      </div>
      <button>Submit</button>
    </Form>
    // </form>
  );
}

export default Register;
