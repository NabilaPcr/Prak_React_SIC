// components/PageHeader.jsx
export default function PageHeader({ title, breadcrumb, children }) {
  return (
    <div id="pageheader-container" className="flex items-center justify-between p-4 mb-6 border-b border-garis">
      <div id="pageheader-left" className="flex flex-col">
        <span id="page-title" className="text-3xl font-semibold text-teks">
          {title}
        </span>
        
        <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
          {Array.isArray(breadcrumb) ? (
            breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className={index === breadcrumb.length - 1 ? "text-teks font-bold" : "text-teks-samping"}>
                  {item}
                </span>
                {index < breadcrumb.length - 1 && <span className="text-teks-samping">/</span>}
              </div>
            ))
          ) : (
            <span className="text-teks font-bold">{breadcrumb}</span>
          )}
        </div>
      </div>

      <div id="action-button">
        {children}
      </div>
    </div>
  );
}