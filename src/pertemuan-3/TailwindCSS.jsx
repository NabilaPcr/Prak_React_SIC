export default function TailwindCSS() {
  return (
    // Background utama menggunakan warna mutiara lembut
    <div className="min-h-screen bg-[#FDFCF0] text-slate-700 font-sans p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extralight tracking-widest text-cyan-900 mb-4 uppercase">
          Belajar Tailwind CSS 4
        </h1>
        <button className="bg-cyan-700 hover:bg-cyan-800 text-white px-8 py-3 rounded-full shadow-md transition-all duration-300 ease-in-out hover:scale-105 active:scale-95">
          Explore More
        </button>
      </header>

      <div className="max-w-4xl mx-auto space-y-12">
        <FlexboxGrid />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Spacing />
          <ShadowEffects />
        </div>
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-white">
          <Typography />
          <div className="mt-6 flex gap-4 items-center">
             <BorderRadius />
             <span className="text-sm italic text-cyan-600/60">Style: Deep Ocean Pearl</span>
          </div>
        </div>
        <BackgroundColors />
      </div>
    </div>
  );
}

// Komponen Child dengan vibes lembut
function Spacing() {
  return (
    <div className="bg-white/80 shadow-sm border border-cyan-100 p-8 rounded-2xl">
      <h2 className="text-xl font-light text-cyan-900 border-b border-cyan-50 pb-2">Elegant Card</h2>
      <p className="mt-4 text-slate-500 leading-relaxed">
        Menggunakan padding dan margin yang lega memberikan kesan bersih dan mewah pada layout.
      </p>
    </div>
  );
}

function Typography() {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-serif italic text-cyan-800">Visual Harmony</h1>
      <p className="text-slate-500 text-lg max-w-prose">
        Pemilihan tipografi yang tepat menciptakan suasana yang tenang layaknya riak air di tepi pantai.
      </p>
    </div>
  );
}

function BorderRadius() {
  return (
    <button className="border border-cyan-700 text-cyan-700 px-6 py-2 rounded-full hover:bg-cyan-700 hover:text-white transition-colors duration-500">
      Get Started
    </button>
  );
}

function BackgroundColors() {
  return (
    <div className="bg-gradient-to-br from-cyan-900 via-cyan-800 to-blue-900 text-cyan-50 p-10 rounded-[2rem] shadow-xl relative overflow-hidden">
        {/* Ornamen pemanis */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
      
      <h3 className="text-2xl font-light tracking-wide">Ocean Depths</h3>
      <p className="mt-3 opacity-80 font-light">
        Gradasi biru laut memberikan kontras yang kuat namun tetap elegan pada elemen mutiara.
      </p>
    </div>
  );
}

function FlexboxGrid() {
  return (
    <nav className="flex justify-between items-center bg-white/60 backdrop-blur-md px-8 py-4 rounded-2xl shadow-sm border border-white">
      <h1 className="text-xl font-semibold tracking-tighter text-cyan-900">PEARL.</h1>
      <ul className="flex space-x-8 text-sm uppercase tracking-widest text-cyan-800/70">
        <li><a href="#" className="hover:text-cyan-500 transition">Home</a></li>
        <li><a href="#" className="hover:text-cyan-500 transition">Gallery</a></li>
        <li><a href="#" className="hover:text-cyan-500 transition">Contact</a></li>
      </ul>
    </nav>
  );
}

function ShadowEffects() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(8,112,184,0.1)] transition-all duration-500 group cursor-pointer">
      <h3 className="text-xl font-medium text-cyan-900 group-hover:text-cyan-600 transition">Soft Elevation</h3>
      <p className="text-slate-400 mt-2">Sentuh kartu ini untuk melihat transisi bayangan yang halus.</p>
    </div>
  );
}