import { FaPlus, FaHome, FaClipboardList, FaUsers, FaExclamationTriangle, FaLock, FaBan } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const getMenuClass = ({ isActive }) => 
    `flex items-center space-x-3 rounded-xl p-4 font-medium transition-all duration-300 ${
      isActive 
      ? 'bg-biru/10 text-teks shadow-sm border-r-4 border-teks' 
      : 'text-teks-samping hover:bg-latar hover:text-teks'
    }`;

  return (
    <div id="sidebar" className="flex min-h-screen w-80 flex-col bg-bg-komponen p-8 shadow-xl border-r border-garis">
      {/* SECTION LOGO  */}
      <div id="sidebar-logo" className="flex flex-col mb-12">
        <span className="font-poppins text-[40px] text-teks leading-none font-bold">
          Sedap <b className="text-biru">.</b>
        </span>
        <span className="font-semibold text-teks-samping text-[10px] uppercase tracking-[3px] mt-2">Modern Admin Dashboard</span>
      </div>

      {/* MENU UTAMA */}
      <nav id="sidebar-menu" className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="mb-8">
          <p className="text-[10px] font-bold text-teks-samping uppercase mb-4 tracking-widest opacity-40">Main Menu</p>
          <ul className="space-y-1">
            <li>
              <NavLink to="/" className={getMenuClass}>
                <div className="w-5 flex justify-center"><FaHome className="text-lg" /></div>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/orders" className={getMenuClass}>
                <div className="w-5 flex justify-center"><FaClipboardList className="text-lg" /></div>
                <span>Orders</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/customers" className={getMenuClass}>
                <div className="w-5 flex justify-center"><FaUsers className="text-lg" /></div>
                <span>Customers</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* SECTION ERROR HANDLERS  */}
        <div className="mb-8">
          <p className="text-[10px] font-bold text-teks-samping uppercase mb-4 tracking-widest opacity-40">Error Handlers</p>
          <ul className="space-y-1">
            <li>
              <NavLink to="/error-400" className={getMenuClass}>
                <div className="w-5 flex justify-center"><FaExclamationTriangle className="text-lg" /></div>
                <span>Error 400</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/error-401" className={getMenuClass}>
                <div className="w-5 flex justify-center"><FaLock className="text-lg" /></div>
                <span>Error 401</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/error-403" className={getMenuClass}>
                <div className="w-5 flex justify-center"><FaBan className="text-lg" /></div>
                <span>Error 403</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <div id="sidebar-footer" className="mt-auto pt-6 border-t border-garis">
        <div className="bg-teks p-5 rounded-3xl shadow-lg mb-6 relative overflow-hidden group">
          <p className="text-white text-[11px] relative z-10 mb-4 opacity-70 leading-relaxed">Please organize your menus through button below!</p>
          <button className="flex justify-center items-center w-full p-3 bg-biru text-white rounded-2xl space-x-2 hover:bg-white hover:text-teks transition-all duration-300 relative z-10 font-bold text-xs">
            <FaPlus />
            <span>Add Menus</span>
          </button>


          <FaClipboardList className="absolute -right-4 -bottom-4 text-white opacity-5 text-7xl rotate-12" />
        </div>
        <div className="px-2">
           <p className="font-bold text-teks text-xs">Sedap Restaurant</p>
           <p className="font-medium text-teks-samping text-[10px] opacity-50 uppercase tracking-tighter mt-1">&copy; 2026 All Right Reserved</p>
        </div>
      </div>
    </div>
  );
}