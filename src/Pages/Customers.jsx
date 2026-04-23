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
          <button className="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-xl shadow-sm font-medium flex items-center gap-2 hover:bg-gray-50">
            <FaFileExport /> Export
          </button>
          <button className="bg-hijau text-white px-6 py-2 rounded-xl shadow-md font-medium flex items-center gap-2 hover:bg-green-600">
            <FaUserPlus /> Add Customer
          </button>
        </div>
      </PageHeader>
      
      <div className="p-5">
        <div className="bg-white p-10 rounded-2xl shadow-sm text-center border-2 border-dashed border-gray-100">
           <p className="text-gray-400">Belum ada data pelanggan untuk ditampilkan.</p>
        </div>
      </div>
    </div>
  );
}