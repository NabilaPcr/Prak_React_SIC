import { FaHome, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function NotFound() {
  return (
    <div id="notfound-container" className="flex flex-col h-full">
      <PageHeader title="404 Not Found" breadcrumb="Error Page" />

      <div className="flex-1 flex items-center justify-center p-10">
        <div className="flex flex-col md:flex-row items-center max-w-5xl w-full gap-12">
                    <div className="flex-1 text-left order-2 md:order-1">
            <h1 className="text-9xl font-bold text-teks mb-4 tracking-tighter">
              404
            </h1>
            <h2 className="text-4xl font-bold text-teks mb-4">
              Whale hello there!
            </h2>
            <p className="text-teks-samping text-lg max-w-md mb-8 leading-relaxed">
              Looks like this page is gone. Which makes sense because I ate it. 
              <span className="block font-semibold italic text-teks opacity-70 mt-2">Oooops!</span>
            </p>

            <div className="flex gap-4">
              <Link
                to="/"
                className="flex items-center space-x-2 bg-teks hover:bg-biru text-white font-bold py-3 px-8 rounded-2xl transition duration-300 shadow-lg shadow-blue-100"
              >
                <FaHome />
                <span>Home</span>
              </Link>
              <Link
                to="/orders"
                className="flex items-center space-x-2 bg-white border-2 border-garis text-teks font-bold py-3 px-8 rounded-2xl hover:bg-latar transition duration-300"
              >
                <FaClipboardList />
                <span>Orders</span>
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center order-1 md:order-2">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-biru opacity-10 rounded-full scale-125 blur-3xl animate-pulse"></div>
              
              <img 
                src="/img/paus.jpg" 
                alt="404 Whale" 
                className="relative z-10 w-full h-auto drop-shadow-2xl transform hover:scale-105 transition duration-500" 
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}