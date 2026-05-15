import { useState } from "react";
import { Link } from "react-router-dom"; // Tambahkan import Link
import { FaPlus, FaTimes, FaEye } from "react-icons/fa";
import customersData from "../data/customers.json";
import PageHeader from "../components/PageHeader";

export default function Customers() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col h-full bg-latar/30">
      <PageHeader title="Customers" breadcrumb={["Dashboard", "Customers"]}>
        <button 
          onClick={() => setShowForm(!showForm)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition shadow-lg font-bold text-sm ${
            showForm ? "bg-red-500 hover:bg-red-600 text-white" : "bg-teks hover:bg-biru text-white"
          }`}
        >
          {showForm ? (
            <>
              <FaTimes /> <span>Close</span>
            </>
          ) : (
            <>
              <FaPlus /> <span>Add Customer</span>
            </>
          )}
        </button>
      </PageHeader>

      <div className="p-6 space-y-6">
        {showForm && (
          <div className="bg-white p-6 rounded-3xl border-2 border-dashed border-garis animate-in fade-in zoom-in duration-300">
            <h3 className="text-lg font-bold mb-4 text-teks">Form Tambah Customer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Customer Name" className="p-3 bg-latar rounded-xl outline-none border border-transparent focus:border-biru" />
              <input type="email" placeholder="Email" className="p-3 bg-latar rounded-xl outline-none border border-transparent focus:border-biru" />
              <input type="text" placeholder="Phone" className="p-3 bg-latar rounded-xl outline-none border border-transparent focus:border-biru" />
              <select className="p-3 bg-latar rounded-xl outline-none border border-transparent focus:border-biru">
                <option value="" disabled selected>Pilih Loyalty</option>
                <option>Bronze</option>
                <option>Silver</option>
                <option>Gold</option>
              </select>
            </div>
            <button className="mt-4 bg-biru text-white px-6 py-2 rounded-xl font-bold">Simpan Data</button>
          </div>
        )}

        {/* Tabel Data */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-garis">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-latar/50 text-teks-samping text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-bold">ID</th>
                <th className="px-6 py-4 font-bold">Customer Name</th>
                <th className="px-6 py-4 font-bold">Email</th>
                <th className="px-6 py-4 font-bold">Phone</th>
                <th className="px-6 py-4 font-bold">Loyalty</th>
                <th className="px-6 py-4 font-bold text-center">Action</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-garis">
              {customersData.map((customer) => (
                <tr key={customer.customerId} className="hover:bg-latar/30 transition-colors group">
                  <td className="px-6 py-4 font-bold text-teks">{customer.customerId}</td>
                  <td className="px-6 py-4">
                    <Link 
                      to={`/customers/${customer.customerId}`}  // Dynamic route ke detail
                      className="text-teks font-medium hover:text-biru transition-colors"
                    >
                      {customer.customerName}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-teks-samping text-sm">{customer.email}</td>
                  <td className="px-6 py-4 text-teks-samping text-sm">{customer.phone}</td>
                  <td className="px-6 py-4">
                    <span className={`px-4 py-1 rounded-lg text-[10px] font-bold ${
                      customer.loyalty === 'Gold' ? 'bg-orange-100 text-orange-600 border border-orange-200' : 
                      customer.loyalty === 'Silver' ? 'bg-slate-100 text-slate-600 border border-slate-200' : 
                      'bg-amber-700/10 text-amber-800 border border-amber-200'
                    }`}>
                      {customer.loyalty}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Link 
                      to={`/customers/${customer.customerId}`}
                      className="inline-flex items-center space-x-1 text-biru hover:text-teks transition-colors"
                    >
                      <FaEye />
                      <span className="text-xs">Detail</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}