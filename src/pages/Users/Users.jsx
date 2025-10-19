import { Children } from "react";
import { useLoaderData } from "react-router";

function Users() {
  const users = useLoaderData();
  console.log("🚀 ~ Users ~ users:", users);
  return (
    <div className="users">
      <ul>
        {Children.toArray(
          users.map(({ name, email, address, phone }) => (
            <li>
              <div>
                <span className="pe-1">{name.firstname}</span>
                <span>{name.lastname}</span>
              </div>
              <p className="mb-0">{email}</p>
              <p className="mb-0">{address.street}</p>
              <p className="mb-0">{phone}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Users;
