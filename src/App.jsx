import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";

import { store } from "./store/store";
import router from "./routes/routes";
import queryClient from "./services/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />;
      </Provider>
      <ReactQueryDevtools position="top" />
    </QueryClientProvider>
  );
}

export default App;
