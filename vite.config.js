import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add any aliases or custom resolutions here if needed
    },
  },
  optimizeDeps: {
    include: [
      'yet-another-react-lightbox',
      'yet-another-react-lightbox/plugins/fullscreen',
      'yet-another-react-lightbox/plugins/slideshow',
      'yet-another-react-lightbox/plugins/thumbnails',
      'yet-another-react-lightbox/plugins/video',
      'yet-another-react-lightbox/plugins/zoom',
    ],
  },
});
