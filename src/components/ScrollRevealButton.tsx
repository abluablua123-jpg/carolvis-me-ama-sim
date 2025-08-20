import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface ScrollRevealButtonProps {
  onLoveClick: () => void;
  onSecondVideoClick: () => void;
}

export const ScrollRevealButton = ({ onLoveClick, onSecondVideoClick }: ScrollRevealButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show button after scrolling 70% of viewport height
      if (scrollY > windowHeight * 0.7) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12 pointer-events-none"
      }`}
    >
      <div className="flex flex-col gap-3 items-center">
        <Button
          variant="romantic"
          size="lg"
          onClick={onLoveClick}
          className="animate-float shadow-heart"
        >
          <Heart className="w-6 h-6 mr-2 animate-heartbeat" />
          VOLTA PRO LINGUICINHA
          <Heart className="w-6 h-6 ml-2 animate-heartbeat" />
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          onClick={onSecondVideoClick}
          className="animate-float shadow-heart border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Heart className="w-5 h-5 mr-2 animate-heartbeat" />
          EU TREINEI DIA E NOITE PARA SER O SEU LINGUICINHA VEJA O RESULTADO
          <Heart className="w-5 h-5 ml-2 animate-heartbeat" />
        </Button>
      </div>
    </div>
  );
};