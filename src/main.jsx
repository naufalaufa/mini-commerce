import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "src/styles/index.less";
import "./App.css";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MyProvider from "./context/index.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <MyProvider>
      <App />
    </MyProvider>
  </QueryClientProvider>
);
