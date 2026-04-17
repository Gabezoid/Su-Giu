import { useRef } from "react";
import { ArrowRight, Search, ShoppingCart, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Polaroid } from "../components/Polaroid";
import { SectionLabel } from "../components/SectionLabel";
import { Link } from "react-router-dom";

export function Home() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <>
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK8wpSmWbIecREZ4bLXUPIxr36e_duDbhL9HWYoGQNGNdyBaIO4tiT-0ohXqR-T_ex6CrRFwQCg6bT0hNmCPZGbMtFOmbPSJGN7LpCg42T7ItNEpcgDQ9oy1gkyKqbYgZky7y_BsLAPwxQQM1LGvHf-0x64vRfMIvIY-NqqCHGIcgs_E34W9YyNI0h90QCNB0Q3ldpfjCUVlE3wuecG7Vp7oNrS_B1W1gxEReIbg6F6rHMnRgEHa3FrtPj9hGh9afQgr9QJMWNW-4h" 
            alt="Woman in movement" 
            className="w-full h-full object-cover filter contrast-[0.95] brightness-[0.95]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-on-background/10" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="font-headline font-black text-[10vw] md:text-[12vw] leading-none text-surface uppercase tracking-tighter mix-blend-difference w-full flex flex-wrap justify-center gap-x-[0.3em]"
          >
            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              Cucito
            </motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="opacity-50">
              /
            </motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              Su di te
            </motion.span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-serif italic text-2xl md:text-4xl text-surface mt-4 drop-shadow-lg"
          >
            nessuna taglia. solo te.
          </motion.p>
          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/pantagonna" className="bg-primary text-on-primary px-10 py-4 font-headline uppercase tracking-widest text-sm hover:scale-95 transition-transform text-center">
              Scopri il Pantagonna
            </Link>
            <button className="border border-surface text-surface px-10 py-4 font-headline uppercase tracking-widest text-sm hover:bg-surface hover:text-on-surface transition-all">
              Sfoglia i capi
            </button>
          </div>
        </div>
      </header>

      {/* Feature Banner */}
      <section ref={sectionRef} className="py-24 px-8 md:px-24 bg-surface relative overflow-hidden">
        {/* Animated Thread SVG */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
          <svg viewBox="0 0 1000 400" className="w-full h-full" preserveAspectRatio="none">
            <motion.path 
              d="M -50 150 C 150 150, 250 50, 350 50 C 450 50, 450 250, 350 250 C 250 250, 250 150, 550 150 C 800 150, 850 350, 1050 250"
              fill="transparent"
              stroke="#DDA15E"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ pathLength }}
            />
          </svg>
        </div>
        
        <div className="paint-stroke absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl -z-0" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <h2 className="font-headline font-black text-5xl md:text-7xl uppercase leading-tight tracking-tighter">
              Gonna o pantalone?<br />Entrambe le cose.<br />
              <span className="text-primary-container">E nessun limite.</span>
            </h2>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-md font-body leading-relaxed">
              Fatto a mano, su misura per te. Dal tuo corpo, non da uno standard industriale.
            </p>
            <Link to="/pantagonna" className="inline-flex items-center gap-2 font-headline uppercase tracking-widest text-lg border-b-4 border-primary-container pb-1 hover:text-primary-container transition-all">
              Configuralo adesso <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="relative flex justify-center">
            <Polaroid 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1JT2_zWGIiOwWuR6wy3IZ7vOnHMSklktDdecJXANfIwJ2mb89Xg-n3WUoQKQNafVN6kIEZWeDWLjSnC0XzKA8V7NiPUnKjeoROKLpKuOIQMo2ATtoTjxYMSnYSk3uD2b1IsHTXAEwuzLDnS4ZvBWzV3DlIzMJV5q0HqJLMlYV3qSRmaTJk2JaoxKqS1YRdR3lI8fzUi8TK938EyEmFx6ZzazapE6bJzrcY23HtCy5YmvkrysVYO-GlkaxZb58J0XSvwOTv5i2oHGl"
              alt="Pantagonna detail"
              caption="Il taglio perfetto."
              className="max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-surface-container">
        <div className="px-8 md:px-24">
          <div className="mb-16">
            <SectionLabel>Come funziona</SectionLabel>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="font-headline text-6xl text-primary-container">01</span>
                <div className="w-10 h-10 bg-on-surface/5 flex items-center justify-center">
                  <span className="material-symbols-outlined">straighten</span>
                </div>
              </div>
              <h3 className="font-headline text-2xl uppercase font-bold tracking-tight">Mi prendo le misure</h3>
              <p className="text-on-surface-variant leading-relaxed">Solo 3 misure chiave. Ti guideremo noi passo dopo passo con un video semplice.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="font-headline text-6xl text-primary-container">02</span>
                <div className="w-10 h-10 bg-on-surface/5 flex items-center justify-center">
                  <span className="material-symbols-outlined">palette</span>
                </div>
              </div>
              <h3 className="font-headline text-2xl uppercase font-bold tracking-tight">Scelgo il tessuto</h3>
              <p className="text-on-surface-variant leading-relaxed">Dalla nostra palette stagionale. Fibre naturali, cotoni biologici e lane rigenerate.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="font-headline text-6xl text-primary-container">03</span>
                <div className="w-10 h-10 bg-on-surface/5 flex items-center justify-center">
                  <span className="material-symbols-outlined">featured_seasonal_and_gifts</span>
                </div>
              </div>
              <h3 className="font-headline text-2xl uppercase font-bold tracking-tight">Lo ricevo</h3>
              <p className="text-on-surface-variant leading-relaxed">Il tuo capo unico viene cucito a Torino e arriva a casa tua in 15 giorni lavorativi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 px-8 md:px-24 bg-surface">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <SectionLabel>Questa stagione</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl uppercase font-black">Le chicche di stagione</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Product 1 */}
          <div className="group cursor-pointer">
            <div className="bg-surface-container overflow-hidden">
              <img 
                src="/product-1.jpg" 
                alt="Camicia Denim Fiorita" 
                className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-6 flex justify-between items-end">
              <div>
                <h4 className="font-headline text-2xl uppercase font-bold">Camicia Denim Fiorita</h4>
                <p className="font-body text-on-surface-variant">Denim Ricamato</p>
              </div>
              <div className="text-right">
                <p className="font-headline text-xl">€140</p>
                <button className="font-label text-xs uppercase underline tracking-tighter hover:text-primary-container transition-colors">Scopri</button>
              </div>
            </div>
          </div>
          {/* Product 2 */}
          <div className="group cursor-pointer translate-y-8">
            <div className="bg-surface-container overflow-hidden">
              <img 
                src="/product-2.jpg" 
                alt="Abito Beige" 
                className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-6 flex justify-between items-end">
              <div>
                <h4 className="font-headline text-2xl uppercase font-bold">Abito Beige</h4>
                <p className="font-body text-on-surface-variant">Cotone Organico</p>
              </div>
              <div className="text-right">
                <p className="font-headline text-xl">€195</p>
                <button className="font-label text-xs uppercase underline tracking-tighter hover:text-primary-container transition-colors">Scopri</button>
              </div>
            </div>
          </div>
          {/* Product 3 */}
          <div className="group cursor-pointer">
            <div className="bg-surface-container overflow-hidden">
              <img 
                src="/product-3.jpg" 
                alt="Tuta Gialla" 
                className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-6 flex justify-between items-end">
              <div>
                <h4 className="font-headline text-2xl uppercase font-bold">Tuta Gialla</h4>
                <p className="font-body text-on-surface-variant">Lino Naturale</p>
              </div>
              <div className="text-right">
                <p className="font-headline text-xl">€210</p>
                <button className="font-label text-xs uppercase underline tracking-tighter hover:text-primary-container transition-colors">Scopri</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-32 bg-[#EDE5D6] text-center px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <span className="material-symbols-outlined text-5xl text-primary-container">format_quote</span>
          <p className="font-serif italic text-3xl md:text-5xl leading-tight text-on-background">
            Su&Giù nasce da ago, filo e un'idea precisa: che i vestiti si adattino a te, non tu a loro. Niente taglie. Niente standard. Solo capi pensati per come sei davvero.
          </p>
          <div className="pt-8 flex flex-col items-center gap-2">
            <p className="font-headline uppercase font-black text-xl">Susanna</p>
            <p className="font-label text-xs uppercase tracking-widest">[ LA FONDATRICE ]</p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="px-8 md:px-24 mb-16 text-center md:text-left">
          <SectionLabel>Donne che indossano</SectionLabel>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4">
          <Polaroid 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjdKSzhlFobVdUkrvuu37fdP6XDgA3CwA4O8LL2K36MGNcu6ONIIhzXR_Sxed4S1c1LkQ7sJbtmtzZZjdAUOeAa8HYbHlqu2s2Gun0ljLkUu-Ipo8lRUrL86yRDB5vzFYz4s_Np2WAKiWRrevemOmNkProGGVsZAqYY1WgBrqdDgpG_VMQebp3f4MAOmhHYaGzJ34hwr6nJOcAy05lCYkSzc6Ffw9VSDljJCt0rXAnxbr0Kl9Nt7o-kgFR-hZfGv8RNyNvyDawJl0y"
            alt="Client 1"
            rotation="-rotate-3"
          />
          <Polaroid 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYj9NQHol_eoVj-SCyIXIIfqJA9Sgy4g7nuAfaHhDoqkFwsM6uHdEnBX7Fi-5IW0BHcyVZ2bxwUd1WUPKI7xwfpXTj4S1MVYx73dMzot56U16TvL2nhWI4r8Az7f0wk4iQwWOJ-MmcdctJVQGRBR-6gkX8v18FedvNudVcUoSECN-tkP6muqdkkPNnaat4yjPI8AKgJK7BtF2ypwBXlTtTJZasULBANQZOr2lreSyz5rr7gyNvoamT0WISRUJ5GfNnEq-Dml_7sKZH"
            alt="Client 2"
            rotation="rotate-6"
            className="mt-12"
          />
          <Polaroid 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM9jTTJdi7fE6IcW6oJnEKH3EVnD6JANx4RjdWrEEYbNZwCKAEBg6CafdlKQibhN_ZbyW_NRua0fFTH49bmGaMNrc3o1-y5TeF5WRHMl4jlEDgvNdLM4nwqjYPlyQHl4_SVm5BHE26hLvrpmT9M2XqL2AbEQaobnZ2fZctnfl_kPQJdWaIVYl2B4kKCqBJQHfpe4OZ2WMigJ56wihHpnSinFQ0ZgOJfwiE6q0U8DHcvBzeoDzFcdcG8arH2vy2hS5lXKkr6KlQWez3"
            alt="Client 3"
            rotation="-rotate-6"
          />
          <Polaroid 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIMWl8FNgbJvrAj7RJh5WcWz7wTAGqC0YktO9k3bF3aq3I_7u7wTVtdBWvlx1RGXQYyPpifWK8raJYTZAuw1H5IiXVTC-I-Y0g9FmDeDN1L2AbU_1Io2vN014FXCnw7CXFKjdFbJD16cfLd-Q6vT5DaCCqeIsL_a8W6uXBVhgcf2f7xIH4B5R3CLcWHIdG9OMen65sxIp9LrobEXO4t1HiruAKl9MDZHZO9LfPsNBAEK8wc01YKpkBxnDhEt5iIo8S8J4QC3TaVVS8"
            alt="Client 4"
            rotation="rotate-3"
            className="mt-8"
          />
          <Polaroid 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgJcfqHKCi6P4MW7LOhbbs25BZ0hW6XBTcoLKPfDzNi5d9BjYUy0JAn383ETE7a6S2xJ0wcdmQw8BPSmKKb1UfF-6JOiA3Gk_uFoUDOB5WCrAA9gtpG8B19WSHiKYNu_6hWubOCT-CovMpvxZhGa7xRo2Qcpp7wG-iWCmM785uXiXsg165I5fYSCyTsvgk0Ot3a28h-ycGdsgCvNacFgU-Nr9VGaSnnNIIHG5ulQhvYN4CMdaX4BSGNiVqwAEf9wwend1N8fWwCbqS"
            alt="Client 5"
            rotation="-rotate-2"
            className="hidden lg:block"
          />
        </div>
      </section>
    </>
  );
}
