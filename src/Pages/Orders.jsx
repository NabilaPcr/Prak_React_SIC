import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import ordersData from "../data/orders.json";
import PageHeader from "../components/PageHeader";

export default function Orders() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col h-full bg-latar/30">
      <PageHeader title="Orders" breadcrumb={["Dashboard", "Orders"]}>
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
              <FaPlus /> <span>Add Orders</span>
            </>
          )}
        </button>
      </PageHeader>
      
      <div className="p-6 space-y-6">
        {/* Form Sederhana Orders */}
        {showForm && (
          <div className="bg-white p-6 rounded-3xl border-2 border-dashed border-garis animate-in fade-in zoom-in duration-300">
            <h3 className="text-lg font-bold mb-4 text-teks">Form Tambah Order </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Customer Name" className="p-3 bg-latar rounded-xl outline-none border border-transparent focus:border-biru" />
              <input type="number" placeholder="Total Price" className="p-3 bg-latar rounded-xl outline-none border border-transparent focus:border-biru" />
              <input type="date" className="p-3 bg-latar rounded-xl outline-none border border-transparent focus:border-biru" />
              <select className="p-3 bg-latar rounded-xl outline-none border border-transparent focus:border-biru">
                <option value="" disabled selected>Pilih Status</option>
                <option>Pending</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
            </div>
            <button className="mt-4 bg-biru text-white px-6 py-2 rounded-xl font-bold">Simpan Order</button>
          </div>
        )}

        {/* Tabel Data */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-garis">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-latar/50 text-teks-samping text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-bold">Order ID</th>
                <th className="px-6 py-4 font-bold">Customer Name</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold">Total Price</th>
                <th className="px-6 py-4 font-bold">Order Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-garis">
              {ordersData.map((order) => (
                <tr key={order.orderId} className="hover:bg-latar/30 transition-colors group">
                  <td className="px-6 py-4 font-bold text-teks">{order.orderId}</td>
                  <td className="px-6 py-4 text-teks-samping group-hover:text-teks">{order.customerName}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-600' : 
                      order.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 
                      'bg-red-100 text-red-600'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-teks">
                    Rp {order.totalPrice.toLocaleString('id-ID')}
                  </td>
                  <td className="px-6 py-4 text-teks-samping text-sm">{order.orderDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}