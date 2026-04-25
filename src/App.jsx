import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Customers from "./Pages/Customers";
import NotFound from "./Pages/NotFound";
import ErrorPage from "./Pages/ErrorPage"; // Pastikan ini di-import

function App() {
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
            {/* --- Main Pages --- */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />

            {/* --- Tugas: Error Pages dengan Ikon Flatline Dinamis --- */}

            {/* Error 400: Bad Request (Ikon: Kertas kusut / Broken file) */}
            <Route
              path="/error-400"
              element={
                <ErrorPage
                  code="400"
                  title="Bad Request!"
                  description="Permintaan kamu tidak valid. Coba periksa kembali data yang dikirim."
                  image="https://illustrations.popsy.co/blue/bad-gateway.svg"
                />
              }
            />
            <Route
              path="/error-401"
              element={
                <ErrorPage
                  code="401"
                  title="Unauthorized!"
                  description="Akses ditolak. Kamu perlu login untuk melihat halaman ini."
                  image="https://illustrations.popsy.co/blue/key.svg"
                />
              }
            />

            <Route
              path="/error-403"
              element={
                <ErrorPage
                  code="403"
                  title="Forbidden!"
                  description="Kamu tidak memiliki izin untuk mengakses halaman rahasia ini."
                  image="https://illustrations.popsy.co/blue/stop-sign.svg"
                />
              }
            />

            {/* --- Catch-all (404) --- */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
