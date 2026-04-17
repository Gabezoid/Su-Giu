import { useState, ReactNode } from "react";
import { Search, ShoppingCart, Mail } from "lucide-react";
import { Logo } from "./components/Logo";
import StyleGuide from "./StyleGuide";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pantagonna } from "./pages/Pantagonna";

// Componente per scrollare in alto al cambio pagina
function ScrollToTop() {
  const { pathname } = useLocation();
  useState(() => {
    window.scrollTo(0, 0);
  });
  return null;
}

function Layout({ children, onOpenStyleGuide }: { children: ReactNode, onOpenStyleGuide: () => void }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="film-grain" />

      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-surface/80 backdrop-blur-md flex justify-between items-center px-8 py-6">
        <Link to="/" className="cursor-pointer flex items-center">
          <Logo className="h-24 md:h-32 w-auto object-contain" />
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="font-headline uppercase tracking-tighter font-black text-sm text-on-surface hover:text-primary-container transition-colors focus:outline-none">
            Collezione
          </Link>
          <Link to="/pantagonna" className="font-headline uppercase tracking-tighter font-black text-sm text-primary-container border-b-2 border-primary-container pb-1 focus:outline-none">
            Pantagonna
          </Link>
          <a href="#" className="font-headline uppercase tracking-tighter font-black text-sm text-on-surface hover:text-primary-container transition-colors">
            Su misura
          </a>
          <a href="#" className="font-headline uppercase tracking-tighter font-black text-sm text-on-surface hover:text-primary-container transition-colors">
            Come funziona
          </a>
        </div>
        <div className="flex gap-6 items-center">
          <Search className="w-5 h-5 cursor-pointer hover:text-primary-container transition-colors" />
          <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-primary-container transition-colors" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-high text-on-surface font-label text-xs uppercase tracking-widest mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16">
          <div className="space-y-6">
            <Logo className="h-32 md:h-40 w-auto object-contain" variant="footer" />
            <p className="opacity-70 normal-case tracking-normal font-body">Fatto a Mano con cura, pezzo dopo pezzo, nel nostro laboratorio di Via Santa Giulia.</p>
            <p>© Su&Giù Torino - Fatto a Mano</p>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold border-b border-outline-variant pb-2 mb-2">Esplora</h5>
            <Link to="/" className="opacity-70 hover:opacity-100 hover:text-primary-container transition-all">Collezione</Link>
            <Link to="/pantagonna" className="opacity-70 hover:opacity-100 hover:text-primary-container transition-all">Il Pantagonna</Link>
            <a href="#" className="opacity-70 hover:opacity-100 hover:text-primary-container transition-all">Sostenibilità</a>
            <a href="#" className="opacity-70 hover:opacity-100 hover:text-primary-container transition-all">Cura dei capi</a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold border-b border-outline-variant pb-2 mb-2">Contatti</h5>
            <a href="#" className="opacity-70 hover:opacity-100 hover:text-primary-container transition-all underline decoration-primary-container">Instagram</a>
            <a href="#" className="opacity-70 hover:opacity-100 hover:text-primary-container transition-all">Via Santa Giulia 29/a, Torino</a>
            <a href="mailto:suegiu.abbigliamento@gmail.com" className="opacity-70 hover:opacity-100 hover:text-primary-container transition-all lowercase">suegiu.abbigliamento@gmail.com</a>
            <div className="flex gap-4 mt-4">
              <Mail className="w-5 h-5" />
              <span className="material-symbols-outlined w-5 h-5">alternate_email</span>
            </div>
            <button 
              onClick={onOpenStyleGuide}
              className="mt-8 opacity-30 hover:opacity-100 transition-opacity text-[10px] font-label uppercase tracking-[0.3em] border border-on-surface/20 px-4 py-2"
            >
              [ UI KIT / STYLE GUIDE ]
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const [showStyleGuide, setShowStyleGuide] = useState(false);

  if (showStyleGuide) {
    return <StyleGuide onBack={() => setShowStyleGuide(false)} />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout onOpenStyleGuide={() => setShowStyleGuide(true)}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pantagonna" element={<Pantagonna />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}