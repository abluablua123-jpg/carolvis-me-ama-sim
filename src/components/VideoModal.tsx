import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export const VideoModal = ({ isOpen, onClose, videoUrl }: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full bg-gradient-soft border-accent/20 shadow-romantic">
        <div className="flex justify-between items-center mb-4">
          <DialogTitle className="text-2xl font-bold text-primary">
            💕 Mensagem Especial para Carolis 💕
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-accent/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <DialogDescription className="text-center text-muted-foreground mb-6">
          Um vídeo especial feito com amor para você ❤️
        </DialogDescription>

        <div className="w-full h-[400px] bg-muted rounded-lg flex items-center justify-center shadow-soft">
          {videoUrl ? (
            <video
              controls
              className="w-full h-full object-cover rounded-lg"
              src={videoUrl}
            >
              Seu navegador não suporta vídeos.
            </video>
          ) : (
            <div className="text-center text-muted-foreground">
              <div className="text-6xl mb-4">🎥</div>
              <p className="text-lg">
                Aguardando o vídeo especial...
              </p>
              <p className="text-sm mt-2">
                (O vídeo será adicionado em breve!)
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};