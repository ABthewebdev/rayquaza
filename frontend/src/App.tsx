import { createRouter, RouterProvider } from "@tanstack/react-router";
import "./index.css";
import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
  defaultPendingComponent: () => <div>Loading...</div>,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  // This stuff is just to tweak our sandbox setup in real-time
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
