import { useState, useEffect } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

const ProfileImage = () => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const processImage = async () => {
      try {
        // Fetch the uploaded image
        const response = await fetch('/lovable-uploads/995eb134-0d51-428c-99c0-69d21410f495.png');
        const blob = await response.blob();
        
        // Load image
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for the processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(url);
        setIsProcessing(false);
      } catch (error) {
        console.error('Error processing image:', error);
        // Fallback to original image if processing fails
        setProcessedImageUrl('/lovable-uploads/995eb134-0d51-428c-99c0-69d21410f495.png');
        setIsProcessing(false);
      }
    };

    processImage();
  }, []);

  if (isProcessing) {
    return (
      <div className="w-80 h-80 rounded-full bg-muted animate-pulse flex items-center justify-center">
        <div className="text-muted-foreground">Processing...</div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="w-80 h-96 overflow-hidden shadow-xl">
        {processedImageUrl && (
          <img
            src={processedImageUrl}
            alt="Prabhash - Full Stack Developer"
            className="w-full h-full object-cover object-left-top"
          />
        )}
      </div>
    </div>
  );
};

export default ProfileImage;