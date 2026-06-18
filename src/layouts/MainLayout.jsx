import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    // 'h-screen flex flex-col overflow-hidden' locks the screen window boundaries and stops scrolling dead
    <div className="h-screen bg-zinc-950 text-white flex flex-col overflow-hidden">
      <Navbar />

      {/* 'flex-1 overflow-hidden' gives all remaining space to your home page without spilling out */}
      <main className="flex-1 max-w-7xl mx-auto px-6 w-full overflow-hidden flex flex-col justify-center">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
