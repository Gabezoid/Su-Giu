import { useState, useEffect } from "react";

interface LogoProps {
  className?: string;
  variant?: "header" | "footer";
}

export function Logo({ className, variant = "header" }: LogoProps) {
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [timestamp] = useState(Date.now());

  // Percorsi dei loghi con cache-buster per forzare il ricaricamento
  const logoPaths = [
    `/S%26G%20Logo.svg?v=${timestamp}`,
    `/logo.png?v=${timestamp}`,
    `/su-e-giu-logo-v2.png?v=${timestamp}`,
    `/su-e-giu-logo.png?v=${timestamp}`
  ];

  const currentPath = logoPaths[retryCount % logoPaths.length];

  const handleError = () => {
    if (retryCount < logoPaths.length * 2) { // Riprova ogni percorso due volte
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
      }, 500); // Piccolo ritardo tra i tentativi
    } else {
      setError(true);
    }
  };

  // Se l'immagine carica ma è un placeholder (testo), l'evento onError non scatta sempre.
  // Tuttavia, in questo ambiente, se il file è testo ma ha estensione .png, il browser darà errore di decodifica.

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center ${className} select-none`}>
        <div className="relative">
          <span className="font-headline font-black text-4xl md:text-5xl tracking-tighter uppercase leading-none text-primary-container block">
            Su<span className="text-on-surface-variant">&</span>Giù
          </span>
          {/* Elemento decorativo che richiama l'ago/matita del logo originale */}
          <div className="h-0.5 w-full bg-primary-container mt-1 relative">
            <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-primary-container" />
          </div>
        </div>
        <span className="font-label text-[10px] uppercase tracking-[0.4em] mt-2 opacity-60 font-bold">
          Torino • Fatto a Mano
        </span>
      </div>
    );
  }

  return (
    <img
      src={currentPath}
      alt="Su&Giù Logo"
      className={className}
      referrerPolicy="no-referrer"
      onError={handleError}
    />
  );
}
