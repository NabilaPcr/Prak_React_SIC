// pages/Customers.jsx
import PageHeader from "../components/PageHeader";
import { FaUserPlus, FaFileExport } from "react-icons/fa";

export default function Customers() {
  return (
    <div id="customers-container">
      <PageHeader 
        title="Customers" 
        breadcrumb={["Dashboard", "Customer List"]}
      >
        <div className="flex gap-3">
          <button className="bg-bg-komponen border border-garis text-teks-samping px-4 py-2 rounded-xl shadow-sm font-medium flex items-center gap-2 hover:bg-garis">
            <FaFileExport /> Export
          </button>
          <button className="bg-hijau text-teks px-6 py-2 rounded-xl shadow-md font-medium flex items-center gap-2 hover:opacity-80">
            <FaUserPlus /> Add Customer
          </button>
        </div>
      </PageHeader>
      
      <div className="p-5">
        <div className="bg-bg-komponen p-10 rounded-2xl shadow-sm text-center border-2 border-dashed border-garis">
           <p className="text-teks-samping">Belum ada data pelanggan untuk ditampilkan.</p>
        </div>
      </div>
    </div>
  );
}