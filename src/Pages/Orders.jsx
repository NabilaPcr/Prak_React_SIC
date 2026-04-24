// pages/Orders.jsx
import { FaClipboardList, FaFilter, FaDownload } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Orders() {
  return (
    <div id="orders-container">
      <PageHeader 
        title="Orders" 
        breadcrumb={["Dashboard", "Orders History"]}
      >
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-bg-komponen border border-garis text-teks-samping px-4 py-2 rounded-xl hover:bg-garis transition shadow-sm font-medium">
            <FaFilter className="text-xs" /> Filter
          </button>
          <button className="flex items-center gap-2 bg-hijau text-teks px-5 py-2 rounded-xl hover:opacity-80 transition shadow-md font-medium">
            <FaDownload className="text-xs" /> Report
          </button>
        </div>
      </PageHeader>

      <div className="p-5">
        <div className="bg-bg-komponen rounded-2xl shadow-sm p-8 text-center border border-garis">
          <div className="flex justify-center mb-4">
            <FaClipboardList className="text-teks-samping text-6xl opacity-30" />
          </div>
          <h3 className="text-lg font-semibold text-teks">Belum ada pesanan</h3>
          <p className="text-teks-samping">Semua pesanan pelanggan akan muncul di daftar ini.</p>
        </div>
      </div>
    </div>
  );
}