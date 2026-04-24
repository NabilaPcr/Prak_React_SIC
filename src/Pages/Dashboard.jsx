// pages/Dashboard.jsx
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  return (
    <div id="dashboard-container">
      <PageHeader 
        title="Dashboard" 
        breadcrumb={["Dashboard", "Order List"]}
      >
        <button className="bg-hijau hover:opacity-80 transition text-teks px-6 py-2 rounded-xl shadow-md font-medium flex items-center gap-2">
          <span>+</span> Add New Order
        </button>
      </PageHeader>

      <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Card Total Orders */}
        <div className="flex items-center space-x-5 bg-bg-komponen rounded-lg shadow-sm p-4 border border-garis transition-transform hover:scale-105">
          <div className="bg-hijau rounded-full p-4">
            <FaShoppingCart className="text-3xl text-teks" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-teks">75</span>
            <span className="text-teks-samping text-sm">Total Orders</span>
          </div>
        </div>

        {/* Card Total Delivered */}
        <div className="flex items-center space-x-5 bg-bg-komponen rounded-lg shadow-sm p-4 border border-garis transition-transform hover:scale-105">
          <div className="bg-biru rounded-full p-4">
            <FaTruck className="text-3xl text-teks" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-teks">175</span>
            <span className="text-teks-samping text-sm">Total Delivered</span>
          </div>
        </div>

        {/* Card Total Canceled */}
        <div className="flex items-center space-x-5 bg-bg-komponen rounded-lg shadow-sm p-4 border border-garis transition-transform hover:scale-105">
          <div className="bg-merah rounded-full p-4">
            <FaBan className="text-3xl text-teks" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-teks">40</span>
            <span className="text-teks-samping text-sm">Total Canceled</span>
          </div>
        </div>

        {/* Card Total Revenue */}
        <div className="flex items-center space-x-5 bg-bg-komponen rounded-lg shadow-sm p-4 border border-garis transition-transform hover:scale-105">
          <div className="bg-kuning rounded-full p-4">
            <FaDollarSign className="text-3xl text-teks" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-teks">Rp 128k</span>
            <span className="text-teks-samping text-sm">Total Revenue</span>
          </div>
        </div>
      </div>
    </div>
  );
}