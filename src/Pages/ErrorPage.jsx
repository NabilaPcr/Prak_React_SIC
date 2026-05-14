import { FaHome, FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function ErrorPage({ code, title, description, image }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-latar/30">
      <PageHeader title={`${code} Error`} breadcrumb={["Error", code]} />

      <div className="flex-1 flex items-center justify-center p-10">
        <div className="flex flex-col md:flex-row items-center max-w-5xl w-full gap-12">
          
          <div className="flex-1 text-left order-2 md:order-1">
            <h1 className="text-9xl font-bold text-teks mb-2 tracking-tighter opacity-10">
              {code}
            </h1>
            <h2 className="text-4xl font-bold text-teks mb-4">
              {title}
            </h2>
            <p className="text-teks-samping text-lg max-w-md mb-8 leading-relaxed">
              {description}
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center space-x-2 bg-white border-2 border-garis text-teks px-6 py-3 rounded-2xl hover:bg-garis transition shadow-sm font-bold"
              >
                <FaArrowLeft /> <span>Kembali</span>
              </button>
              <Link
                to="/"
                className="flex items-center space-x-2 bg-teks hover:bg-biru text-white px-8 py-3 rounded-2xl transition shadow-lg font-bold"
              >
                <FaHome /> <span>Dashboard</span>
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center order-1 md:order-2">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-biru/10 rounded-full scale-125 blur-3xl animate-pulse"></div>
              <img 
                src={image} 
                alt="Error Illustration" 
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl" 
                onError={(e) => { e.target.src = "https://illustrations.popsy.co/blue/crashed-error.svg" }} // Backup jika link mati
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}