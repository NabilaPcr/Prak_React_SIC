import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaUser, FaEnvelope, FaPhone, FaMedal, FaShoppingBag, FaCalendarAlt } from "react-icons/fa";
import customersData from "../data/customers.json";

export default function CustomerDetail() {
  const { id } = useParams(); // Mengambil nilai id dari URL params
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    
    // Cari customer berdasarkan customerId dari params
    const foundCustomer = customersData.find(c => c.customerId === id);
    
    setTimeout(() => {
      if (foundCustomer) {
        setCustomer(foundCustomer);
        setError(null);
      } else {
        setError(`Customer with ID "${id}" not found`);
        setCustomer(null);
      }
      setLoading(false);
    }, 300);
  }, [id]);

  // Fungsi untuk menentukan warna badge loyalty
  const getLoyaltyColor = (loyalty) => {
    switch(loyalty) {
      case 'Gold': return 'bg-orange-100 text-orange-600 border border-orange-200';
      case 'Silver': return 'bg-slate-100 text-slate-600 border border-slate-200';
      case 'Bronze': return 'bg-amber-700/10 text-amber-800 border border-amber-200';
      default: return 'bg-gray-100 text-gray-600 border border-gray-200';
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col h-full bg-latar/30">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-biru border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-teks-samping">Loading customer details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col h-full bg-latar/30">
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-2xl max-w-md">
            <p className="font-bold mb-2">Error</p>
            <p>{error}</p>
            <Link to="/customers" className="inline-block mt-4 text-red-700 hover:text-red-900 underline">
              ← Back to Customers
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-latar/30">
      {/* Header */}
      <div className="bg-white border-b border-garis px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-teks">Customer Detail</h1>
            <p className="text-teks-samping text-sm mt-1">View detailed customer information</p>
          </div>
          <Link 
            to="/customers" 
            className="flex items-center space-x-2 bg-teks hover:bg-biru text-white px-4 py-2 rounded-xl transition shadow-lg font-bold text-sm"
          >
            <FaArrowLeft /> <span>Back to Customers</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Profile Card */}
          <div className="bg-white rounded-3xl shadow-sm border border-garis overflow-hidden">
            {/* Header Banner */}
            <div className={`h-32 bg-gradient-to-r ${
              customer.loyalty === 'Gold' ? 'from-orange-400 to-orange-600' :
              customer.loyalty === 'Silver' ? 'from-slate-400 to-slate-600' :
              'from-amber-600 to-amber-800'
            }`}></div>
            
            {/* Profile Section */}
            <div className="relative px-6 pb-6">
              <div className="flex flex-col md:flex-row md:items-end -mt-12 mb-6">
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg border-4 border-white">
                  <FaUser className="text-4xl text-teks" />
                </div>
                <div className="mt-4 md:mt-0 md:ml-4 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-teks">{customer.customerName}</h2>
                      <p className="text-teks-samping text-sm">{customer.customerId}</p>
                    </div>
                    <span className={`px-4 py-2 rounded-xl text-sm font-bold ${getLoyaltyColor(customer.loyalty)}`}>
                      <FaMedal className="inline mr-1" /> {customer.loyalty} Member
                    </span>
                  </div>
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-latar/30 rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-biru/10 rounded-xl flex items-center justify-center">
                      <FaEnvelope className="text-biru" />
                    </div>
                    <div>
                      <p className="text-xs text-teks-samping uppercase font-bold">Email</p>
                      <p className="text-teks font-medium">{customer.email}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-latar/30 rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-biru/10 rounded-xl flex items-center justify-center">
                      <FaPhone className="text-biru" />
                    </div>
                    <div>
                      <p className="text-xs text-teks-samping uppercase font-bold">Phone</p>
                      <p className="text-teks font-medium">{customer.phone}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-latar/30 rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-biru/10 rounded-xl flex items-center justify-center">
                      <FaShoppingBag className="text-biru" />
                    </div>
                    <div>
                      <p className="text-xs text-teks-samping uppercase font-bold">Total Orders</p>
                      <p className="text-teks font-medium">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-garis">
                <h3 className="font-bold text-teks mb-4">Additional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between py-2 border-b border-garis">
                    <span className="text-teks-samping">Member Since</span>
                    <span className="text-teks font-medium">2024</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-garis">
                    <span className="text-teks-samping">Status</span>
                    <span className="text-green-600 font-medium">Active</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-garis">
                    <span className="text-teks-samping">Last Order</span>
                    <span className="text-teks font-medium">-</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-garis">
                    <span className="text-teks-samping">Total Spent</span>
                    <span className="text-teks font-medium">Rp 0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}