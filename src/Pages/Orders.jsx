import { FaClipboardList, FaFilter, FaDownload } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Orders() {
  return (
    <div id="dashboard-container">
      {/* Menggunakan Props secara dinamis */}
      <PageHeader 
        title="Orders" 
        breadcrumb={["Dashboard", "Orders History"]}
      >
        {/* Children: Kita masukkan dua tombol aksi */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-xl hover:bg-gray-50 transition shadow-sm font-medium">
            <FaFilter className="text-xs" /> Filter
          </button>
          <button className="flex items-center gap-2 bg-hijau text-white px-5 py-2 rounded-xl hover:bg-green-600 transition shadow-md font-medium">
            <FaDownload className="text-xs" /> Report
          </button>
        </div>
      </PageHeader>

      <div className="p-5">
        <div className="bg-white rounded-2xl shadow-sm p-8 text-center border border-gray-100">
          <div className="flex justify-center mb-4">
            <FaClipboardList className="text-gray-200 text-6xl" />
          </div>
          <h3 className="text-lg font-semibold text-gray-700">Belum ada pesanan</h3>
          <p className="text-gray-400">Semua pesanan pelanggan akan muncul di daftar ini.</p>
        </div>
      </div>
    </div>
  );
}