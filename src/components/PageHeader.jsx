// components/PageHeader.jsx
export default function PageHeader({ title, breadcrumb, children }) {
  return (
    <div id="pageheader-container" className="flex items-center justify-between p-4 mb-6">
      <div id="pageheader-left" className="flex flex-col">
        {/* Menggunakan props title */}
        <span id="page-title" className="text-3xl font-semibold text-teks">
          {title}
        </span>
        
        <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
          {/* Logika untuk breadcrumb (bisa string atau array) */}
          {Array.isArray(breadcrumb) ? (
            breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className={index === breadcrumb.length - 1 ? "text-hijau" : "text-gray-500"}>
                  {item}
                </span>
                {index < breadcrumb.length - 1 && <span className="text-gray-500">/</span>}
              </div>
            ))
          ) : (
            <span className="text-hijau">{breadcrumb}</span>
          )}
        </div>
      </div>

      {/* Menggunakan props children untuk tombol atau elemen di sisi kanan */}
      <div id="action-button">
        {children}
      </div>
    </div>
  );
}