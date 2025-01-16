import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import App from "./App.tsx";
import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Step 1 Wrap the app in the query client provider */}
    <QueryClientProvider client={client}>
      <Theme>
        <App />
      </Theme>
    </QueryClientProvider>
  </StrictMode>
);
