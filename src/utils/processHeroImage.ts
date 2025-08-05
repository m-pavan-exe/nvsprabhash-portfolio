import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

/**
 * Process the hero image once and save it to a static location
 * This should be run once during build or development setup
 */
export const processAndSaveHeroImage = async (): Promise<void> => {
  try {
    console.log('Processing hero image for one-time use...');
    
    // Fetch the uploaded image
    const response = await fetch('/lovable-uploads/995eb134-0d51-428c-99c0-69d21410f495.png');
    const blob = await response.blob();
    
    // Load image
    const imageElement = await loadImage(blob);
    
    // Remove background
    const processedBlob = await removeBackground(imageElement);
    
    // Create a download link to save the processed image
    const url = URL.createObjectURL(processedBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'hero-portrait-processed.png';
    link.click();
    
    // Clean up
    URL.revokeObjectURL(url);
    
    console.log('Hero image processed and downloaded. Please save it to src/assets/ folder.');
  } catch (error) {
    console.error('Error processing hero image:', error);
    throw error;
  }
};

// Development helper - call this function manually in console to process the image
if (typeof window !== 'undefined') {
  (window as any).processHeroImage = processAndSaveHeroImage;
}
