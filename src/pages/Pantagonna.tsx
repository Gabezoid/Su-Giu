import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Ruler, Plus, Minus } from "lucide-react";
import { SectionLabel } from "../components/SectionLabel";
import { motion } from "motion/react";

export function Pantagonna() {
  const [selectedColor, setSelectedColor] = useState("nero");
  const [waistMeasurement, setWaistMeasurement] = useState("");
  const [hipsMeasurement, setHipsMeasurement] = useState("");

  const colors = [
    { id: "nero", name: "Nero Classico", class: "bg-black" },
    { id: "beige", name: "Sabbia", class: "bg-[#d4c3b3]" },
    { id: "terracotta", name: "Terracotta", class: "bg-[#c15e47]" },
    { id: "verde", name: "Verde Salvia", class: "bg-[#8a9a86]" }
  ];

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8 md:px-24">
        
        {/* Breadcrumb */}
        <div className="flex gap-2 font-label text-xs uppercase tracking-widest text-on-surface-variant mb-12">
          <Link to="/" className="hover:text-primary-container transition-colors">Home</Link>
          <span>/</span>
          <span className="text-on-surface">Prodotti</span>
          <span>/</span>
          <span className="text-on-surface font-bold">Pantagonna</span>
        </div>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Images */}
          <div className="space-y-6">
            <div className="aspect-[3/4] bg-surface-container overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1JT2_zWGIiOwWuR6wy3IZ7vOnHMSklktDdecJXANfIwJ2mb89Xg-n3WUoQKQNafVN6kIEZWeDWLjSnC0XzKA8V7NiPUnKjeoROKLpKuOIQMo2ATtoTjxYMSnYSk3uD2b1IsHTXAEwuzLDnS4ZvBWzV3DlIzMJV5q0HqJLMlYV3qSRmaTJk2JaoxKqS1YRdR3lI8fzUi8TK938EyEmFx6ZzazapE6bJzrcY23HtCy5YmvkrysVYO-GlkaxZb58J0XSvwOTv5i2oHGl" 
                alt="Pantagonna Su&Giù"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-[3/4] bg-surface-container overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM9jTTJdi7fE6IcW6oJnEKH3EVnD6JANx4RjdWrEEYbNZwCKAEBg6CafdlKQibhN_ZbyW_NRua0fFTH49bmGaMNrc3o1-y5TeF5WRHMl4jlEDgvNdLM4nwqjYPlyQHl4_SVm5BHE26hLvrpmT9M2XqL2AbEQaobnZ2fZctnfl_kPQJdWaIVYl2B4kKCqBJQHfpe4OZ2WMigJ56wihHpnSinFQ0ZgOJfwiE6q0U8DHcvBzeoDzFcdcG8arH2vy2hS5lXKkr6KlQWez3" 
                  alt="Dettaglio pantagonna"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-[3/4] bg-surface-container p-8 flex flex-col justify-center items-center text-center space-y-4">
                <SectionLabel>100% Su Misura</SectionLabel>
                <p className="font-serif italic text-xl">Ogni pezzo è unico, cucito a mano su di te a Torino.</p>
              </div>
            </div>
          </div>

          {/* Details & Configurator */}
          <div className="flex flex-col">
            <div className="sticky top-32">
              <h1 className="font-headline font-black text-5xl md:text-6xl uppercase tracking-tighter leading-none mb-4">
                Il <br/><span className="text-primary-container">Pantagonna</span>
              </h1>
              <p className="text-2xl font-headline font-bold mb-8">€ 145</p>

              <div className="space-y-6 text-on-surface-variant font-body leading-relaxed mb-12">
                <p>
                  Il nostro capo iconico. La libertà di movimento di un pantalone unita all'eleganza fluida di una gonna. Disegnato per adattarsi a ogni corpo e occasione.
                </p>
                <p>
                  Senza bottoni, con una morbida fascia elastica sul retro e cinturini regolabili sul davanti che non segnano e assecondano il tuo corpo durante l'anno. Realizzato nel tessuto che preferisci.
                </p>
              </div>

              <div className="h-px w-full bg-outline-variant mb-12" />

              {/* Configurator */}
              <div className="space-y-12">
                
                {/* Modulistica Colore */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <h3 className="font-headline uppercase font-bold text-lg tracking-tight">1. Scegli il tessuto</h3>
                    <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Lino Naturale</span>
                  </div>
                  <div className="flex gap-4">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color.id)}
                        className={`w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 flex items-center justify-center ${color.class} ${selectedColor === color.id ? 'ring-2 ring-primary-container ring-offset-4 ring-offset-background' : ''}`}
                        title={color.name}
                        aria-label={color.name}
                      >
                         {/* Visually hidden check for selected */}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Misure */}
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <h3 className="font-headline uppercase font-bold text-lg tracking-tight">2. Le tue misure</h3>
                    <button className="font-label text-xs flex items-center gap-1 uppercase tracking-widest text-primary hover:text-primary-container transition-colors underline underline-offset-4 line-through decoration-transparent hover:decoration-primary-container">
                      <Ruler className="w-4 h-4" /> Scopri come misurarti
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-label text-xs uppercase tracking-widest text-on-surface">Circonferenza Vita (cm)</label>
                      <input 
                        type="number" 
                        value={waistMeasurement}
                        onChange={(e) => setWaistMeasurement(e.target.value)}
                        placeholder="Es. 72"
                        className="w-full bg-surface border border-outline p-4 font-body outline-none focus:border-primary-container transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label text-xs uppercase tracking-widest text-on-surface">Circonferenza Fianchi (cm)</label>
                      <input 
                        type="number" 
                        value={hipsMeasurement}
                        onChange={(e) => setHipsMeasurement(e.target.value)}
                        placeholder="Es. 98"
                        className="w-full bg-surface border border-outline p-4 font-body outline-none focus:border-primary-container transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Extra Options */}
                <div className="space-y-4">
                   <h3 className="font-headline uppercase font-bold text-lg tracking-tight">3. Personalizzazioni extra</h3>
                   <div className="flex items-center gap-3">
                     <input type="checkbox" id="pockets" className="w-5 h-5 accent-primary border-outline" defaultChecked />
                     <label htmlFor="pockets" className="font-body text-on-surface-variant cursor-pointer">Aggiungi tasche laterali a scomparsa (+ € 15)</label>
                   </div>
                </div>

                <div className="pt-8">
                  <button className="w-full bg-primary text-on-primary py-5 font-headline uppercase font-bold tracking-widest hover:scale-[0.98] transition-transform flex justify-center items-center gap-2">
                    Aggiungi al carrello <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="font-label text-xs text-center text-on-surface-variant uppercase tracking-widest mt-4">
                     Tempi di realizzazione: ~15 giorni lavorativi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detail Tabs / Accordion placeholder */}
        <div className="mt-32 max-w-3xl mx-auto border-t border-outline-variant pt-12">
           <details className="group border-b border-outline-variant py-6 cursor-pointer" open>
             <summary className="font-headline uppercase font-bold text-2xl tracking-tighter flex justify-between items-center list-none">
               Dettagli del Modello
               <span className="group-open:rotate-180 transition-transform"><Plus className="w-6 h-6"/></span>
             </summary>
             <p className="mt-6 text-on-surface-variant font-body leading-relaxed">
               Il Pantagonna presenta una linea svasata ampissima che simula l'effetto di una gonna longuette pur offrendo la comodità di un pantalone cavallo sceso. I cinturini in vita non sono solo decorativi ma permettono di variare la vestibilità stringendola in vita qualora cambiaste leggermente peso.
             </p>
           </details>
           <details className="group border-b border-outline-variant py-6 cursor-pointer">
             <summary className="font-headline uppercase font-bold text-2xl tracking-tighter flex justify-between items-center list-none">
               Sostenibilità e Tessuti
               <span className="group-open:rotate-180 transition-transform"><Plus className="w-6 h-6"/></span>
             </summary>
             <p className="mt-6 text-on-surface-variant font-body leading-relaxed">
               Lavoriamo esclusivamente con materie prime certificate o deadstock (tessuti di rimanenza di grandi casi di moda riutilizzati). Cucito senza sprechi nella nostra sartoria.
             </p>
           </details>
           <details className="group border-b border-outline-variant py-6 cursor-pointer">
             <summary className="font-headline uppercase font-bold text-2xl tracking-tighter flex justify-between items-center list-none">
               Resi & Modifiche
               <span className="group-open:rotate-180 transition-transform"><Plus className="w-6 h-6"/></span>
             </summary>
             <p className="mt-6 text-on-surface-variant font-body leading-relaxed">
               Se il capo non calza a perfezione offriamo una sessione di regolazione gratuita presso il nostro laboratorio a Torino o ti guidiamo in un reso se non sei soddisfatta.
             </p>
           </details>
        </div>
      </div>
    </div>
  );
}
