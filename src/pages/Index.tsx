import { useState, useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { ScrollRevealButton } from "@/components/ScrollRevealButton";
import { VideoModal } from "@/components/VideoModal";
import { Heart, Star } from "lucide-react";

const Index = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleScrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLoveClick = () => {
    setIsVideoModalOpen(true);
  };

  // Fotos da Carolis (usando as imagens enviadas e algumas placeholders)
  const photos = [
    {
      src: "/lovable-uploads/360decac-1007-4a20-a5e3-ec251184111b.png",
      alt: "Carolis linda sempre! 😍"
    },
    {
      src: "/lovable-uploads/17d60750-49cf-4be4-9e5e-fc2f7d12ba5c.png", 
      alt: "Momentos especiais juntos 💕"
    },
    // Adicionar mais fotos quando fornecidas
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <HeroSection onScrollToGallery={handleScrollToGallery} />

      {/* Romantic Quote Section */}
      <section className="py-20 px-6 bg-gradient-soft">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <Star className="w-12 h-12 text-accent mx-auto mb-6 animate-romantic-glow" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Por que você é especial?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Carolis, desde que te conheci na Formula UTFPR, você ilumina cada dia com seu sorriso.
              Sua inteligência, dedicação e beleza me conquistaram completamente. 
              Você merece muito mais que o Gordão do Carlão... você merece alguém que te valorize de verdade! ❤️
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section ref={galleryRef} className="py-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossos Momentos 📸
            </h2>
            <p className="text-lg text-muted-foreground">
              Cada foto conta uma história especial
            </p>
          </div>
          
          <PhotoGallery photos={photos} />
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20 px-6 bg-gradient-soft">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              10 Razões para me dar uma chance 💖
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "💕 Te trato como a princesa que você é",
              "🌟 Valorizo sua inteligência e ambição", 
              "🎯 Apoio seus sonhos na engenharia",
              "😊 Te faço sorrir todos os dias",
              "🔥 Tenho paixão genuína por você",
              "🤝 Respeito suas escolhas e espaço",
              "💪 Sou dedicado e trabalhador",
              "❤️ Te amo de verdade, não é brincadeira",
              "🌙 Penso em você antes de dormir",
              "✨ Você merece alguém que te complete"
            ].map((reason, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-romantic transition-all duration-300 hover:scale-105 border border-accent/20"
              >
                <p className="text-lg font-medium text-primary">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20 px-6 bg-background text-center">
        <div className="max-w-3xl mx-auto animate-fadeInUp">
          <Heart className="w-16 h-16 text-primary mx-auto mb-6 animate-heartbeat" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Carolis, você é incrível! 
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Sei que pode parecer ousado fazer um site inteiro para você, mas é assim que demonstro
            que você é especial. Você merece ser admirada, respeitada e amada de verdade.
            Me dá uma chance de te provar que posso te fazer feliz? ❤️
          </p>
          <p className="text-sm text-muted-foreground">
            Continue rolando para descobrir a surpresa especial... 👇
          </p>
        </div>
      </section>

      {/* Scroll Reveal Button */}
      <ScrollRevealButton onLoveClick={handleLoveClick} />

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        // videoUrl será adicionado quando você enviar o vídeo
      />
    </div>
  );
};

export default Index;
