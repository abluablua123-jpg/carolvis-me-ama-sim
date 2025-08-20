import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Photo {
  src: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-romantic transition-all duration-300">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">{photo.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl w-full bg-gradient-soft border-accent/20 shadow-romantic">
          {selectedPhoto && (
            <div className="w-full">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-center mt-4 text-lg font-medium text-primary">
                {selectedPhoto.alt}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};