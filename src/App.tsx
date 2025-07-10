import { RouterProvider } from "react-router";
import { router } from "./router/router";

function App() {
  return (
    <>
      <h1>Monkey</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
