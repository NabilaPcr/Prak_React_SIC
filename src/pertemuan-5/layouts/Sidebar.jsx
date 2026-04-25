import { FaPlus, FaHome, FaClipboardList, FaUsers, FaExclamationTriangle, FaLock, FaBan } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  // Helper function untuk styling menu yang aktif vs tidak aktif
  const getMenuClass = ({ isActive }) => 
    `flex items-center space-x-3 rounded-xl p-4 font-medium transition duration-300 ${
      isActive 
      ? 'bg-biru/10 text-teks shadow-sm' 
      : 'text-teks-samping hover:bg-latar hover:text-teks'
    }`;

  return (
    <div id="sidebar" className="flex min-h-screen w-80 flex-col bg-bg-komponen p-8 shadow-xl border-r border-garis">
      {/* LOGO SECTION */}
      <div id="sidebar-logo" className="flex flex-col mb-10">
        <span className="font-poppins text-[40px] text-teks leading-none font-bold">
          Sedap <b className="text-biru">.</b>
        </span>
        <span className="font-semibold text-teks-samping text-xs uppercase tracking-widest">Admin Dashboard</span>
      </div>

      {/* MENU SECTION */}
      <nav id="sidebar-menu" className="flex-1 overflow-y-auto pr-2">
        <p className="text-[10px] font-bold text-teks-samping uppercase mb-4 tracking-tighter opacity-50">Main Menu</p>
        <ul className="space-y-2">
          <li>
            <NavLink to="/" className={getMenuClass}>
              <FaHome className="text-lg" /> <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" className={getMenuClass}>
              <FaClipboardList className="text-lg" /> <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/customers" className={getMenuClass}>
              <FaUsers className="text-lg" /> <span>Customers</span>
            </NavLink>
          </li>
        </ul>

        {/* ERROR PAGES MENU (Tugas Baru) */}
        <p className="text-[10px] font-bold text-teks-samping uppercase mt-8 mb-4 tracking-tighter opacity-50">Error Handlers</p>
        <ul className="space-y-2">
          <li>
            <NavLink to="/error-400" className={getMenuClass}>
              <FaExclamationTriangle className="text-lg" /> <span>Error 400</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/error-401" className={getMenuClass}>
              <FaLock className="text-lg" /> <span>Error 401</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/error-403" className={getMenuClass}>
              <FaBan className="text-lg" /> <span>Error 403</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* FOOTER SECTION */}
      <div id="sidebar-footer" className="mt-10">
        <div className="bg-teks p-6 rounded-3xl shadow-lg mb-6 relative overflow-hidden group">
          <p className="text-white text-xs relative z-10 mb-4 opacity-80">Organize your restaurant menus easily.</p>
          <button className="flex justify-center items-center w-full p-3 bg-biru text-white rounded-2xl space-x-2 hover:bg-white hover:text-teks transition-all duration-300 relative z-10 font-bold text-sm shadow-md">
            <FaPlus />
            <span>Add Menus</span>
          </button>
          {/* Dekorasi Ikon Transparan di Background */}
          <FaClipboardList className="absolute -right-4 -bottom-4 text-white opacity-5 text-7xl rotate-12 group-hover:rotate-0 transition-transform duration-700" />
        </div>
        <div className="px-2">
           <p className="font-bold text-teks text-xs">Sedap Restaurant</p>
           <p className="font-medium text-teks-samping text-[10px] mt-1 opacity-60">&copy; 2026 All Right Reserved</p>
        </div>
      </div>
    </div>
  );
}