import "./App.css";
//import Layout from "./layout/Layout.jsx";
// import Login from "./pages/Login/Login.jsx";
//import Routers from "./routes/Routers.jsx";
// import Routers from "./routes/Routers.jsx";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { GlobalProvider } from "./context/GlobalContext.jsx";

import Router from "./routes/Router.jsx";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalProvider>
          <Router />
        </GlobalProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
