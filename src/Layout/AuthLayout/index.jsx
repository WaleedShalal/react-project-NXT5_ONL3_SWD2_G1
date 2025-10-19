import { Outlet } from "react-router";

import TheFooter from "../../components/TheFooter/TheFooter";

function AuthLayout() {
  return (
    <div className="auth-layout">
      <main>
        <Outlet />
      </main>
      <TheFooter />
    </div>
  );
}

export default AuthLayout;
