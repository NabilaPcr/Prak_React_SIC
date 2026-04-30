import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div
      id="app-container"
      className="bg-gray-100 min-h-screen flex font-barlow"
    >
      <Sidebar />

      <div
        id="main-content"
        className="flex-1 flex flex-col h-screen overflow-y-auto"
      >
        <Header />

        <Outlet />
      </div>
    </div>
  );
}
