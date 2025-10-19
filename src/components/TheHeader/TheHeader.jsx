import { Link, NavLink } from "react-router";
import { Container, Nav } from "react-bootstrap";

import classes from "./TheHeader.module.css";
import { useContext } from "react";
import UserContext from "@/context/user/UserContext";

const navLinks = [
  { path: "/", name: "Home" },
  { path: "/products", name: "Products" },
  { path: "/cart", name: "Cart" },
  { path: "/category", name: "Category" },
  { path: "/login", name: "Login" },
  { path: "/register", name: "Register" },
  { path: "/admin", name: "Admin" },
  { path: "/users", name: "Users" },
];

function TheHeader() {
  const userData = useContext(UserContext);
  return (
    <header className={classes["header"]}>
      <Container>
        <Nav className={classes["custom-nav"]}>
          <ul className="nav-list">
            {navLinks.map(({ path, name }) => (
              <li key={path} className="nav-item">
                <NavLink to={path} className={classes["nav-link"]}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </Nav>
      </Container>
    </header>
  );
}

export default TheHeader;
