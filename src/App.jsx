import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router komponen
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Customers from "./Pages/Customers"; 
import NotFound from "./Pages/NotFound";

function App() {
  // Catatan: state currentPage mungkin tidak lagi diperlukan jika Sidebar menggunakan <Link>
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
      <div
        id="app-container"
        className="bg-gray-100 min-h-screen flex font-barlow"
      >
        <Sidebar onNavigate={setCurrentPage} activePage={currentPage} />

        <div
          id="main-content"
          className="flex-1 flex flex-col h-screen overflow-y-auto"
        >
          <Header />

          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
  );
}

export default App;