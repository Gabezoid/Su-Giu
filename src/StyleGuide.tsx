import { ReactNode } from "react";
import { Search, ShoppingCart, Mail, ArrowRight, Instagram, MapPin, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Polaroid } from "./components/Polaroid";
import { SectionLabel } from "./components/SectionLabel";
import { cn } from "./lib/utils";

export default function StyleGuide({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-surface text-on-surface p-8 md:p-16 space-y-24">
      <div className="film-grain" />

      {/* Header */}
      <header className="border-b border-outline-variant pb-8 flex justify-between items-end">
        <div>
          <h1 className="font-headline text-6xl font-black uppercase tracking-tighter">UI Kit / Style Guide</h1>
          <p className="font-serif italic text-2xl text-primary-container">Su&Giù Torino - Sistema Visivo</p>
        </div>
        <button 
          onClick={onBack}
          className="bg-on-surface text-surface px-6 py-3 font-headline uppercase tracking-widest text-sm hover:scale-95 transition-transform cursor-pointer"
        >
          Torna al Sito
        </button>
      </header>

      {/* Typography */}
      <section className="space-y-12">
        <SectionLabel>Tipografia</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="font-label text-xs uppercase opacity-50">[ Headline - Outfit / Epilogue ]</p>
              <h2 className="font-headline text-8xl font-black uppercase leading-none tracking-tighter">Headline XL</h2>
              <h2 className="font-headline text-6xl font-black uppercase leading-none tracking-tighter">Headline L</h2>
              <h2 className="font-headline text-4xl font-black uppercase leading-none tracking-tighter">Headline M</h2>
              <h2 className="font-headline text-2xl font-black uppercase leading-none tracking-tighter">Headline S</h2>
            </div>
          </div>
          <div className="space-y-12">
            <div className="space-y-2">
              <p className="font-label text-xs uppercase opacity-50">[ Body - Manrope ]</p>
              <p className="font-body text-2xl leading-relaxed">Corpo del testo grande. Una sartoria che parla di te, non di taglie standard.</p>
              <p className="font-body text-base leading-relaxed">Corpo del testo base. Fatto a mano con cura, pezzo dopo pezzo, nel nostro laboratorio di Via Santa Giulia a Torino. Utilizziamo solo fibre naturali e processi sostenibili.</p>
            </div>
            <div className="space-y-2">
              <p className="font-label text-xs uppercase opacity-50">[ Serif - Cormorant Garamond ]</p>
              <p className="font-serif italic text-4xl leading-tight text-primary-container">"I vestiti si adattano a te, non tu a loro."</p>
              <p className="font-serif italic text-2xl">L'eleganza del su misura.</p>
            </div>
            <div className="space-y-2">
              <p className="font-label text-xs uppercase opacity-50">[ Label - Space Grotesk ]</p>
              <p className="font-label text-sm uppercase tracking-[0.2em]">Etichetta / Micro-copy</p>
              <p className="font-label text-xs uppercase tracking-widest">[ Dettaglio Tecnico ]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="space-y-12">
        <SectionLabel>Colori</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <ColorSwatch name="Surface" hex="#FEF9F1" className="bg-surface border border-outline-variant" />
          <ColorSwatch name="On Surface" hex="#1D1C17" className="bg-on-surface text-surface" />
          <ColorSwatch name="Primary" hex="#7E5700" className="bg-primary text-on-primary" />
          <ColorSwatch name="Primary Container" hex="#C8922A" className="bg-primary-container text-on-surface" />
          <ColorSwatch name="Surface Container" hex="#F2EDE5" className="bg-surface-container" />
          <ColorSwatch name="Surface High" hex="#ECE8E0" className="bg-surface-container-high" />
          <ColorSwatch name="Outline Variant" hex="#D4C4B0" className="bg-outline-variant" />
          <ColorSwatch name="Manifesto BG" hex="#EDE5D6" className="bg-[#EDE5D6]" />
        </div>
      </section>

      {/* Components */}
      <section className="space-y-12">
        <SectionLabel>Componenti</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="font-headline text-2xl uppercase font-bold">Bottoni</h3>
            <div className="flex flex-wrap gap-6">
              <button className="bg-primary text-on-primary px-10 py-4 font-headline uppercase tracking-widest text-sm hover:scale-95 transition-transform">
                Primary Button
              </button>
              <button className="border border-on-surface text-on-surface px-10 py-4 font-headline uppercase tracking-widest text-sm hover:bg-on-surface hover:text-surface transition-all">
                Secondary Button
              </button>
              <button className="font-headline uppercase tracking-widest text-sm border-b-4 border-primary-container pb-1 hover:text-primary-container transition-all inline-flex items-center gap-2">
                Text Link <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="font-headline text-2xl uppercase font-bold">Etichette di Sezione</h3>
            <div className="flex flex-wrap gap-4">
              <SectionLabel>Label Standard</SectionLabel>
              <SectionLabel className="bg-primary-container text-on-surface border-none">Label Accent</SectionLabel>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="font-headline text-2xl uppercase font-bold">Polaroid</h3>
            <div className="max-w-xs">
              <Polaroid 
                src="https://picsum.photos/seed/sugiu1/800/1000" 
                alt="Esempio Polaroid" 
                caption="Dettaglio Sartoriale"
              />
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="font-headline text-2xl uppercase font-bold">Icone</h3>
            <div className="grid grid-cols-4 gap-8">
              <div className="flex flex-col items-center gap-2">
                <Search className="w-6 h-6" />
                <span className="text-[10px] font-label uppercase">Search</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ShoppingCart className="w-6 h-6" />
                <span className="text-[10px] font-label uppercase">Cart</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-6 h-6" />
                <span className="text-[10px] font-label uppercase">Mail</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-2xl">straighten</span>
                <span className="text-[10px] font-label uppercase">Measure</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-2xl">palette</span>
                <span className="text-[10px] font-label uppercase">Palette</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-2xl">format_quote</span>
                <span className="text-[10px] font-label uppercase">Quote</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layout Patterns */}
      <section className="space-y-12">
        <SectionLabel>Pattern di Layout</SectionLabel>
        <div className="space-y-8">
          <div className="bg-surface-container p-12 border border-outline-variant">
            <h3 className="font-headline text-2xl uppercase font-bold mb-6">Griglia 3 Colonne (Prodotti)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-[3/4] bg-on-surface/5 border border-dashed border-on-surface/20 flex items-center justify-center font-label text-xs uppercase">
                  Product Card Placeholder
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-24 border-t border-outline-variant text-center opacity-50">
        <p className="font-label text-xs uppercase tracking-widest">Su&Giù Torino © 2026 - Design System v1.0</p>
      </footer>
    </div>
  );
}

function ColorSwatch({ name, hex, className }: { name: string, hex: string, className?: string }) {
  return (
    <div className="space-y-3">
      <div className={cn("aspect-square rounded-sm flex items-end p-3", className)}>
        <span className="font-label text-[10px] font-bold uppercase tracking-tighter">{hex}</span>
      </div>
      <p className="font-headline text-sm font-bold uppercase tracking-tight">{name}</p>
    </div>
  );
}
