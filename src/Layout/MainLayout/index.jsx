import { Outlet } from "react-router";
import TheHeader from "../../components/TheHeader/TheHeader";
import TheFooter from "./../../components/TheFooter/TheFooter";
import UserProvider from "@/context/user/UserProvider";
import { Container } from "react-bootstrap";
import useWindowResize from "@/hooks/useWindowResize";

function MainLayout() {
  // const { width, height } = useWindowResize();

  return (
    <div className="main-layout">
      <Container>
        <TheHeader />
        <main>
          <Outlet />
        </main>
        <TheFooter />
      </Container>
    </div>
  );
}

export default MainLayout;
