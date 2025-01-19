import "@radix-ui/themes/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Theme } from "@radix-ui/themes";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const client = new QueryClient();
// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={client}>
        <Theme>
          <App />
        </Theme>
      </QueryClientProvider>
    </StrictMode>
  );
}
