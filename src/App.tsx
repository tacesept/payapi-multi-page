// Layout.
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import ReadyToStart from "./components/ReadyToStart";

export default function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
        <ReadyToStart />
      </main>
      <Footer />
    </>
  );
}
