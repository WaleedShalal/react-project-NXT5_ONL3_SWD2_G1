import { Outlet } from "react-router";
import TheHeader from "../../components/TheHeader/TheHeader";
import TheFooter from "./../../components/TheFooter/TheFooter";
import UserProvider from "@/context/user/UserProvider";
import { Container } from "react-bootstrap";
import useWindowResize from "@/hooks/useWindowResize";
import { ErrorBoundary } from "react-error-boundary";

function MainLayout() {
  // const { width, height } = useWindowResize();

  return (
    <div className="main-layout">
      <Container>
        <TheHeader />
        <main>
          <Outlet />
        </main>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <TheFooter />
        </ErrorBoundary>
      </Container>
    </div>
  );
}

export default MainLayout;
