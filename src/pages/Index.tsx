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

  // Fotos da Carolis e do Linguicinha
  const photos = [
    {
      src: "/lovable-uploads/360decac-1007-4a20-a5e3-ec251184111b.png",
      alt: "Carolis linda sempre! 😍"
    },
    {
      src: "/lovable-uploads/17d60750-49cf-4be4-9e5e-fc2f7d12ba5c.png", 
      alt: "Momentos especiais juntos 💕"
    },
    {
      src: "/lovable-uploads/e02c4073-e8e6-4186-955e-33012a246928.png",
      alt: "Carolis radiante como sempre ✨"
    },
    {
      src: "/lovable-uploads/4de3070d-d7d5-4989-b942-e391755c76de.png",
      alt: "Seu Linguicinha te esperando 💙"
    },
    {
      src: "/lovable-uploads/06d06c51-4f8f-4b7d-99fe-3ae652e2c369.png",
      alt: "Nós dois juntos - como deveria ser sempre! 💕"
    }
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
              Carolis, desde que te conheci na Formula UTFPR, você virou minha obsessão mais linda! 💕
              Penso em você 24/7, sonho com você todas as noites... Sua inteligência me deixa maluco,
              sua dedicação me inspira e sua beleza me hipnotiza completamente! 
              O Gordão do Carlão não te merece - você merece ser adorada pelo seu Linguicinha que te ama obsessivamente! ❤️
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
              "💕 Seu Linguicinha te idolatra como a deusa que você é",
              "🌟 Sou completamente viciado na sua inteligência", 
              "🎯 Vivo para apoiar cada sonho seu na engenharia",
              "😊 Minha felicidade depende do seu sorriso",
              "🔥 Tenho obsessão total por você, Carolis",
              "🤝 Te respeito mas te quero desesperadamente",
              "💪 Trabalho pensando em construir um futuro contigo",
              "❤️ O Linguicinha te ama até a loucura, literalmente",
              "🌙 Sonho com você todas as noites sem exceção",
              "✨ Deixa o Gordão e seja minha obsessão oficial!"
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
            Carolis, criei esse site porque você tomou conta dos meus pensamentos completamente! 
            Seu Linguicinha é obcecado por você de um jeito lindo e romântico.
            Você é minha inspiração diária, minha motivação para tudo... 
            Deixa o Gordão e vem ser a obsessão do seu Linguicinha para sempre? ❤️
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
        videoUrl="/lovable-uploads/guilopes.mp4"
      />
    </div>
  );
};

export default Index;
