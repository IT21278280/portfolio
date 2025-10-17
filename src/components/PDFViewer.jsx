import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaTimes, FaExpand, FaCompress, FaFilePdf } from 'react-icons/fa';
import { downloadFile } from '../utils/api';

const PDFViewer = ({ attachment, isOpen, onClose }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleDownload = () => {
    downloadFile(attachment.url, attachment.filename);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (!isOpen || !attachment) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`relative bg-background border border-gray-800 rounded-lg overflow-hidden ${
            isFullscreen 
              ? 'w-full h-full m-0' 
              : 'w-11/12 h-5/6 max-w-6xl mx-auto mt-8'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-surface">
            <div className="flex items-center space-x-3">
              <FaFilePdf className="w-5 h-5 text-red-500" />
              <div>
                <h3 className="font-semibold text-text-primary">{attachment.name}</h3>
                <p className="text-sm text-text-muted">{attachment.size}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={handleDownload}
                className="p-2 bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors duration-300"
                title="Download PDF"
              >
                <FaDownload className="w-4 h-4" />
              </button>
              
              <button
                onClick={toggleFullscreen}
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? (
                  <FaCompress className="w-4 h-4" />
                ) : (
                  <FaExpand className="w-4 h-4" />
                )}
              </button>
              
              <button
                onClick={onClose}
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300"
                title="Close"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* PDF Content */}
          <div className="relative flex-1 h-full bg-gray-900">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="inline-block w-8 h-8 border-4 border-gray-600 border-t-primary-500 rounded-full mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <p className="text-text-muted">Loading PDF...</p>
                </div>
              </div>
            )}
            
            <iframe
              src={`${attachment.url}#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH`}
              className="w-full h-full border-0"
              title={attachment.name}
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                // Fallback: open in new tab
                window.open(attachment.url, '_blank');
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PDFViewer;
