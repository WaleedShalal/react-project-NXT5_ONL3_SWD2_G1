import { Link, NavLink } from "react-router";
import { Container, Nav } from "react-bootstrap";

import classes from "./TheHeader.module.css";
import { useContext } from "react";
import UserContext from "@/context/user/UserContext";
import { useTranslation } from "react-i18next";

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
  const {
    i18n: { t, dir, changeLanguage, language, languages, ...rest },
  } = useTranslation();
  console.log("🚀 ~ TheHeader ~ rest:", rest);
  const userData = useContext(UserContext);

  return (
    <header className={classes["header"]}>
      <ul>
        {languages.map((lang) => (
          <li key={lang}>
            <button onClick={() => changeLanguage(lang)}>{lang}</button>
          </li>
        ))}
      </ul>
      <Container>
        <Nav className={classes["custom-nav"]}>
          <ul className="nav-list d-flex justify-content-between w-100">
            {navLinks.map(({ path, name }) => (
              <li key={path} className="nav-item">
                <NavLink to={path} className={classes["nav-link"]}>
                  {t(name)}
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
