import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FaDownload, 
  FaEye, 
  FaFilePdf, 
  FaCalendarAlt, 
  FaUser, 
  FaTag,
  FaCopy,
  FaCheckCircle,
  FaLightbulb,
  FaCogs,
  FaDatabase,
  FaImages
} from 'react-icons/fa';
import PDFViewer from '../components/PDFViewer';
import ImageGallery from '../components/ImageGallery';

const Research = () => {
  const [isPDFViewerOpen, setIsPDFViewerOpen] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [copiedText, setCopiedText] = useState('');

  // Research project data
  const researchProject = {
    title: 'Real-Time Vehicle Horn Detection and Alert System for Deaf Drivers',
    abstract: `This research presents an innovative IoT-based solution designed to enhance road safety for deaf and hard-of-hearing drivers. The system utilizes advanced audio processing techniques with MEMS microphones and Arduino microcontrollers to detect vehicle horn sounds in real-time and provide immediate alerts through multiple sensory channels including visual LED indicators and vibration feedback mechanisms.`,
    objectives: [
      'Develop a real-time audio processing system for vehicle horn detection',
      'Design and implement multi-sensory alert mechanisms for deaf drivers',
      'Create a low-power, cost-effective IoT solution using Arduino platform',
      'Reduce false positives through advanced signal processing techniques',
      'Ensure system reliability in various environmental conditions',
      'Provide adjustable sensitivity settings for different driving scenarios'
    ],
    methodology: [
      'Literature review on existing assistive technologies for deaf drivers',
      'Audio signal analysis and horn pattern recognition algorithms',
      'Hardware design and prototyping with Arduino and MEMS microphones',
      'Development of real-time signal processing algorithms',
      'Implementation of multi-modal alert systems (visual and haptic)',
      'Field testing and validation in real-world driving conditions',
      'Performance evaluation and optimization'
    ],
    datasets: [
      'Vehicle horn audio samples from various vehicle types',
      'Environmental noise recordings (traffic, construction, etc.)',
      'Real-world driving scenario audio data',
      'Controlled laboratory test recordings',
      'User feedback and response time measurements'
    ],
    models: [
      'Fast Fourier Transform (FFT) for frequency analysis',
      'Digital signal processing filters for noise reduction',
      'Pattern recognition algorithms for horn identification',
      'Machine learning classifiers for improved accuracy',
      'Real-time audio processing pipeline'
    ],
    timeline: [
      { phase: 'Research & Planning', duration: '2 months', status: 'completed' },
      { phase: 'Hardware Design', duration: '2 months', status: 'completed' },
      { phase: 'Software Development', duration: '2 months', status: 'completed' },
      { phase: 'Testing & Validation', duration: '1.5 months', status: 'completed' },
      { phase: 'Documentation', duration: '0.5 months', status: 'completed' }
    ],
    images: [
      '/assets/projects/horn-detection/hero.jpg',
      '/assets/projects/horn-detection/circuit.jpg',
      '/assets/projects/horn-detection/prototype.jpg',
      '/assets/projects/horn-detection/testing.jpg',
      '/assets/projects/horn-detection/hardware-setup.jpg',
      '/assets/projects/horn-detection/dashboard.jpg'
    ],
    attachments: [
      {
        name: 'Final Research Report',
        filename: 'horn-detection-final-report.pdf',
        url: '/assets/projects/horn-detection/final-report.pdf',
        type: 'pdf',
        size: '2.5 MB',
        description: 'Complete research documentation including methodology, results, and conclusions'
      },
      {
        name: 'Research Poster',
        filename: 'research-poster.pdf',
        url: '/assets/projects/horn-detection/poster.pdf',
        type: 'pdf',
        size: '1.2 MB',
        description: 'Academic poster presentation summarizing key findings'
      },
      {
        name: 'Technical Presentation',
        filename: 'technical-presentation.pdf',
        url: '/assets/projects/horn-detection/presentation.pdf',
        type: 'pdf',
        size: '3.1 MB',
        description: 'Detailed technical presentation slides'
      }
    ]
  };

  const bibtexCitation = `@mastersthesis{fernando2024horn,
  title={Real-Time Vehicle Horn Detection and Alert System for Deaf Drivers},
  author={Fernando, Rusith},
  year={2024},
  school={Sri Lanka Institute of Information Technology},
  type={Final Year Project},
  address={Malabe, Sri Lanka}
}`;

  const handlePDFView = (attachment) => {
    setSelectedPDF(attachment);
    setIsPDFViewerOpen(true);
  };

  const handleImageClick = (index) => {
    setGalleryIndex(index);
    setIsGalleryOpen(true);
  };

  const handleCopyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(bibtexCitation);
      setCopiedText('BibTeX');
      setTimeout(() => setCopiedText(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <>
      <Helmet>
        <title>Research - Rusith Fernando | Final Year Project</title>
        <meta 
          name="description" 
          content="Explore Rusith Fernando's final year research project on Real-Time Vehicle Horn Detection and Alert System for Deaf Drivers using IoT and Arduino." 
        />
        <meta 
          name="keywords" 
          content="Rusith Fernando research, vehicle horn detection, deaf drivers, IoT, Arduino, accessibility technology" 
        />
      </Helmet>

      <div className="min-h-screen pt-24 pb-12 bg-background dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-text-primary dark:text-slate-200">
                Research <span className="text-gradient">Project</span>
              </h1>
              <p className="text-xl text-text-muted dark:text-slate-400 max-w-3xl mx-auto">
                My final year research project focusing on assistive technology 
                for the deaf and hard-of-hearing community using IoT and signal processing.
              </p>
            </motion.div>

            {/* Project Title & Meta */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="card">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h2 className="text-3xl font-heading font-bold mb-4 text-text-primary dark:text-slate-200">
                      {researchProject.title}
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-text-muted dark:text-slate-400">
                        <FaCalendarAlt className="w-4 h-4 text-primary-500" />
                        <span className="text-sm">2024 (8 months)</span>
                      </div>
                      <div className="flex items-center space-x-2 text-text-muted dark:text-slate-400">
                        <FaUser className="w-4 h-4 text-primary-500" />
                        <span className="text-sm">Lead Researcher</span>
                      </div>
                      <div className="flex items-center space-x-2 text-text-muted dark:text-slate-400">
                        <FaTag className="w-4 h-4 text-primary-500" />
                        <span className="text-sm">IoT & Accessibility</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Abstract */}
                <motion.section variants={itemVariants}>
                  <h3 className="text-2xl font-heading font-bold mb-6 flex items-center space-x-3">
                    <FaLightbulb className="w-6 h-6 text-primary-500" />
                    <span>Abstract</span>
                  </h3>
                  <div className="bg-surface rounded-xl p-6 border border-gray-800">
                    <p className="text-text-muted leading-relaxed">
                      {researchProject.abstract}
                    </p>
                  </div>
                </motion.section>

                {/* Objectives */}
                <motion.section variants={itemVariants}>
                  <h3 className="text-2xl font-heading font-bold mb-6">Research Objectives</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {researchProject.objectives.map((objective, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 p-4 bg-surface rounded-lg border border-gray-800"
                      >
                        <div className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary-500 text-sm font-bold">{index + 1}</span>
                        </div>
                        <p className="text-text-muted">{objective}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Methodology */}
                <motion.section variants={itemVariants}>
                  <h3 className="text-2xl font-heading font-bold mb-6 flex items-center space-x-3">
                    <FaCogs className="w-6 h-6 text-secondary-400" />
                    <span>Methodology</span>
                  </h3>
                  <div className="space-y-3">
                    {researchProject.methodology.map((method, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 p-4 bg-surface rounded-lg border border-gray-800"
                      >
                        <FaCheckCircle className="w-5 h-5 text-secondary-400 mt-0.5 flex-shrink-0" />
                        <p className="text-text-muted">{method}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Timeline */}
                <motion.section variants={itemVariants}>
                  <h3 className="text-2xl font-heading font-bold mb-6">Project Timeline</h3>
                  <div className="space-y-4">
                    {researchProject.timeline.map((phase, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between p-4 bg-surface rounded-lg border border-gray-800"
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-4 h-4 rounded-full ${
                            phase.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                          }`}></div>
                          <div>
                            <h4 className="font-semibold text-text-primary">{phase.phase}</h4>
                            <p className="text-text-muted text-sm">{phase.duration}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          phase.status === 'completed' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          {phase.status}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Gallery */}
                <motion.section variants={itemVariants}>
                  <h3 className="text-2xl font-heading font-bold mb-6 flex items-center space-x-3">
                    <FaImages className="w-6 h-6 text-green-500" />
                    <span>Project Gallery</span>
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {researchProject.images.map((image, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="aspect-square rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => handleImageClick(index)}
                      >
                        <img
                          src={image}
                          alt={`Research project image ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = `data:image/svg+xml;base64,${btoa(`
                              <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100%" height="100%" fill="#1e293b"/>
                                <rect x="50" y="50" width="200" height="200" rx="8" fill="#00f7a4" opacity="0.1"/>
                                <text x="150" y="160" text-anchor="middle" fill="#00f7a4" font-family="Arial" font-size="16">Research Image ${index + 1}</text>
                              </svg>
                            `)}`;
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Datasets & Models */}
                <motion.div variants={itemVariants} className="bg-surface rounded-2xl p-6 border border-gray-800">
                  <h4 className="text-xl font-heading font-semibold mb-4 flex items-center space-x-2">
                    <FaDatabase className="w-5 h-5 text-primary-500" />
                    <span>Datasets Used</span>
                  </h4>
                  <div className="space-y-2 mb-6">
                    {researchProject.datasets.map((dataset, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-text-muted text-sm">{dataset}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-xl font-heading font-semibold mb-4">Models & Algorithms</h4>
                  <div className="space-y-2">
                    {researchProject.models.map((model, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-text-muted text-sm">{model}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Documents */}
                <motion.div variants={itemVariants} className="bg-surface rounded-2xl p-6 border border-gray-800">
                  <h4 className="text-xl font-heading font-semibold mb-4">Research Documents</h4>
                  <div className="space-y-4">
                    {researchProject.attachments.map((attachment, index) => (
                      <div key={index} className="p-4 bg-background rounded-lg border border-gray-800">
                        <div className="flex items-start space-x-3 mb-3">
                          <FaFilePdf className="w-5 h-5 text-red-500 mt-1" />
                          <div className="flex-1">
                            <h5 className="font-medium text-text-primary">{attachment.name}</h5>
                            <p className="text-text-muted text-sm mb-2">{attachment.description}</p>
                            <p className="text-text-muted text-xs">{attachment.size}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handlePDFView(attachment)}
                            className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300 text-sm"
                          >
                            <FaEye className="w-3 h-3" />
                            <span>Preview</span>
                          </button>
                          <a
                            href={attachment.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors duration-300 text-sm"
                          >
                            <FaDownload className="w-3 h-3" />
                            <span>Download</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Citation */}
                <motion.div variants={itemVariants} className="bg-surface rounded-2xl p-6 border border-gray-800">
                  <h4 className="text-xl font-heading font-semibold mb-4">Cite This Work</h4>
                  <div className="bg-background rounded-lg p-4 border border-gray-800 mb-4">
                    <pre className="text-text-muted text-xs whitespace-pre-wrap font-mono">
                      {bibtexCitation}
                    </pre>
                  </div>
                  <button
                    onClick={handleCopyBibtex}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors duration-300"
                  >
                    {copiedText === 'BibTeX' ? (
                      <>
                        <FaCheckCircle className="w-4 h-4" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy className="w-4 h-4" />
                        <span>Copy BibTeX</span>
                      </>
                    )}
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      <PDFViewer
        attachment={selectedPDF}
        isOpen={isPDFViewerOpen}
        onClose={() => setIsPDFViewerOpen(false)}
      />

      {/* Image Gallery Modal */}
      <ImageGallery
        images={researchProject.images}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        initialIndex={galleryIndex}
      />
    </>
  );
};

export default Research;
