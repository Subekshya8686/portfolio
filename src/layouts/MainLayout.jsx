import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    // Lock the shell to the viewport: column flex with a single scrollable main region.
    <div className="h-screen bg-zinc-950 text-white flex flex-col overflow-hidden">
      <Navbar />

      {/* flex-1 + overflow-y-auto: short pages (Home) center with no scrollbar,
          taller pages scroll internally without breaking the shell. */}
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}
