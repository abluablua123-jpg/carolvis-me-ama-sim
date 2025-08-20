import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import romanticBg from "@/assets/romantic-bg.jpg";

interface HeroSectionProps {
  onScrollToGallery: () => void;
}

export const HeroSection = ({ onScrollToGallery }: HeroSectionProps) => {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${romanticBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-accent/30 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              fontSize: `${20 + Math.random() * 20}px`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Para a Carolis
            <span className="block text-accent animate-heartbeat">💕</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            A pessoa mais especial da Formula UTFPR
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="love"
              size="lg"
              onClick={onScrollToGallery}
              className="text-lg px-8 py-4 animate-romantic-glow"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Ver Momentos Especiais
            </Button>
          </div>
          
          <div className="mt-12 text-lg opacity-80">
            <p>Continue rolando para uma surpresa especial... ❤️</p>
          </div>
        </div>
      </div>
    </div>
  );
};