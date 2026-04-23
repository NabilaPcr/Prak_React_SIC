import { FaHome, FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function NotFound() {
  return (
    <div id="dashboard-container" className="flex flex-col h-full">
      {/* Header tetap ada agar navigasi user tidak terputus */}
      <PageHeader />

      <div className="flex-1 flex flex-col items-center justify-center text-center p-10">
        {/* Ikon besar dengan latar belakang lembut */}
        <div className="bg-green-100 p-8 rounded-full mb-6">
          <FaExclamationTriangle className="text-hijau text-7xl" />
        </div>

        {/* Teks Error */}
        <h1 className="text-8xl font-bold text-gray-900 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Oops! Halaman Tidak Ditemukan
        </h2>
        <p className="text-gray-500 max-w-md mb-8">
          Sepertinya menu yang kamu cari tidak ada di dapur kami atau link yang kamu tuju sudah kedaluwarsa.
        </p>

        {/* Tombol kembali ke Beranda */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 bg-hijau hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition duration-300 shadow-lg shadow-green-200"
        >
          <FaHome />
          <span>Kembali ke Dashboard</span>
        </Link>
      </div>
    </div>
  );
}