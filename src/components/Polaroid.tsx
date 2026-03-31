import { cn } from "@/src/lib/utils";

interface PolaroidProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  rotation?: string;
  tapeRotation?: string;
}

export function Polaroid({ src, alt, caption, className, rotation = "rotate-3", tapeRotation = "-rotate-2" }: PolaroidProps) {
  return (
    <div className={cn("polaroid transition-transform duration-500 relative group", rotation, "hover:rotate-0", className)}>
      <div className={cn("washi-tape absolute -top-4 left-1/2 -translate-x-1/2", tapeRotation)}></div>
      <img 
        src={src} 
        alt={alt} 
        className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        referrerPolicy="no-referrer"
      />
      {caption && (
        <p className="font-serif italic text-center mt-6 text-xl text-on-surface">
          {caption}
        </p>
      )}
    </div>
  );
}
