import "./App.css";
//import Layout from "./layout/Layout.jsx";
// import Login from "./pages/Login/Login.jsx";
//import Routers from "./routes/Routers.jsx";
// import Routers from "./routes/Routers.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Router from "./routes/Router.jsx";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  );
}

export default App;
