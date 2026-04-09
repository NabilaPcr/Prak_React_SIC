import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  return (
    // Background hijau cerah dengan tekstur percikan air (water splash)
    <div className="min-h-screen p-8 font-sans bg-[#c8e66e]" 
         style={{ backgroundImage: "url('/images/water-splash-pattern.png')", backgroundSize: 'cover' }}>
      
      {/* Container Header Utama */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b-4 border-black pb-6 px-4 bg-white/50 rounded-xl shadow-inner">
        {/* LOGO JUS (gaya playful) */}
        <div className="mb-4 md:mb-0">
          <span className="block text-xl font-bold text-gray-700 tracking-wider">MARK'S</span>
          <h1 className="text-5xl font-extrabold text-[#3a8d40] font-playful tracking-tighter"
              style={{ textShadow: "3px 3px 0px #ffffff, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000, 1px 1px 0px #000" }}>
            TheFirstJuice
          </h1>
          <p className="text-gray-600 mt-2 font-semibold">"First Fruit" - Framework Collection</p>
        </div>
        
        {/* Barcode / Album Info Section */}
        <div className="bg-white border-4 border-black p-4 flex flex-col items-end gap-2 rotate-1 shadow-2xl">
          <p className="text-sm font-bold">ALBUM INFO ver. 1.0</p>
          <p className="text-xs text-right">Contains: {frameworkData.length} unique framework packs</p>
          <img src="/images/frame-list-qr.png" alt="QR Code" className="w-20 h-20 mt-1"/> {/* QR / Barcode aesthetic */}
          <span className="font-mono text-xs">8 809633 181958</span>
        </div>
      </div>

      {/* Grid Utama: Container untuk setiap box jus */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {frameworkData.map((item) => (
          <div key={item.id} className="relative group transition-all duration-300 hover:scale-105">
            
            {/* Box Jus - Container Utama */}
            <div className="bg-white border-4 border-black p-4 pt-10 shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-none relative overflow-hidden h-[420px] flex flex-col justify-between">
              
              {/* Tutup Box / Bagian Atas */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-[#3a8d40] border-b-4 border-black flex justify-between items-center px-4">
                <span className="text-xs font-bold text-white uppercase">{item.id} / FxP</span>
                <span className="text-xs font-bold text-white">OPEN HERE</span>
              </div>

              {/* Konten Utama */}
              <div className="flex-grow">
                {/* Judul Framework (gaya playful, outline/shadow) */}
                <h2 className="text-4xl font-extrabold text-[#c8e66e] mb-4 font-playful tracking-tight"
                    style={{ textShadow: "-2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000, 2px 2px 0px #000" }}>
                  {item.name}
                </h2>
                
                {/* Deskripsi (ala slogan jus) */}
                <div className="bg-[#f0f9c4] border-t-4 border-b-4 border-black p-3 my-4">
                  <p className="text-[#333] font-semibold italic text-lg leading-snug">
                    "Crafting the perfect blend for {item.name}. Ready to serve!"
                  </p>
                </div>

                {/* Info Detail */}
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>

              {/* Bagian Bawah (Details & CTA) */}
              <div className="border-t-4 border-black pt-4 bg-gray-50 -mx-4 px-4 pb-2">
                <div className="text-xs text-gray-500 space-y-1 mb-3">
                  <p>📍 DEVELOPED BY: <span className="font-bold text-gray-800">{item.details.developer}</span></p>
                  <p>📅 RELEASE YEAR: <span className="font-bold text-gray-800">{item.details.releaseYear}</span></p>
                </div>

                {/* CTA Link (gaya button pop-art) */}
                <a href={item.details.officialWebsite} 
                   target='_blank' 
                   rel="noreferrer"
                   className="inline-block px-5 py-2 w-full text-center border-4 border-black bg-[#3a8d40] text-white font-extrabold text-lg uppercase shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#c8e66e] hover:text-black hover:shadow-none transition-all duration-150">
                  VISIT PACK ↗
                </a>
              </div>

              {/* Decorative Apple Magnet Icon (from reference image) */}
              <div className="absolute top-10 right-4 transform rotate-12 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <img src="/images/apple-magnet-doodle.png" alt="Apple doodle" className="w-16 h-16"/>
              </div>

            </div>
            
            {/* Bayangan Box Terpisah */}
            <div className="absolute top-2 left-2 w-full h-full border-4 border-black bg-black rounded-none -z-10 group-hover:top-0 group-hover:left-0 transition-all"></div>
          </div>
        ))}
      </div>
      
      
      {/* Footer ala credit album & warning 'DO NOT EAT' */}
      <footer className="mt-20 text-center text-gray-800 uppercase tracking-widest text-xs border-t-4 border-black pt-8 space-y-3">
        <p className="font-mono text-2xl font-extrabold text-black bg-white p-2 inline-block shadow-2xl rotate-2 border-4 border-black">
          🚫 DO NOT CONSUME. FRAMEWORK PACK ONLY. 🍎
        </p>
        <p>© 2024 Mark's Firstfruit Concepts. Made in Pekanbaru.</p>
        <p>Warning: Contains potentially complex API interfaces. Usage at your own risk.</p>
      </footer>
    </div>
  )
}