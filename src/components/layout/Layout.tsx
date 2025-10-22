import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./Whatsapp";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full text-secondary-700">
      <Navbar />
      <main className="flex-1">
        <Outlet />
        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  );
}
