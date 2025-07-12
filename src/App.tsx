// Layout.
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

export default function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
