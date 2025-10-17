import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';

const ImageGallery = ({ images, isOpen, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') onClose();
  };

  if (!isOpen || !images || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-60 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-300"
          aria-label="Close gallery"
        >
          <FaTimes className="w-6 h-6 text-white" />
        </button>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-300"
              aria-label="Previous image"
            >
              <FaChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-300"
              aria-label="Next image"
            >
              <FaChevronRight className="w-6 h-6 text-white" />
            </button>
          </>
        )}

        {/* Main Image */}
        <div className="flex items-center justify-center h-full p-8">
          <motion.div
            key={currentIndex}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onError={(e) => {
                e.target.src = `data:image/svg+xml;base64,${btoa(`
                  <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#1e293b"/>
                    <rect x="100" y="100" width="600" height="400" rx="12" fill="#00f7a4" opacity="0.1"/>
                    <text x="400" y="320" text-anchor="middle" fill="#00f7a4" font-family="Arial" font-size="24">Image ${currentIndex + 1}</text>
                  </svg>
                `)}`;
              }}
            />
          </motion.div>
        </div>

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-60">
            <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white text-sm">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        )}

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-60">
            <div className="flex space-x-2 bg-black/50 backdrop-blur-sm rounded-lg p-2 max-w-md overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all duration-300 ${
                    index === currentIndex
                      ? 'border-primary-500 scale-110'
                      : 'border-transparent hover:border-gray-400'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="64" height="48" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="#1e293b"/>
                          <rect x="8" y="8" width="48" height="32" rx="4" fill="#00f7a4" opacity="0.3"/>
                        </svg>
                      `)}`;
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageGallery;
