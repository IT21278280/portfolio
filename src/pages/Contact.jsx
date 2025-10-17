import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
  FaUpload,
  FaTimes
} from 'react-icons/fa';
import { sendEmail } from '../utils/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    attachment: null,
    honeypot: '' // Anti-spam field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'prabodhawith@gmail.com',
      link: 'mailto:prabodhawith@gmail.com',
      color: 'text-primary-500'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+94 769782381',
      link: 'tel:+94769782381',
      color: 'text-green-500'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Katuneriya, Sri Lanka',
      link: null,
      color: 'text-blue-500'
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'IT21278280',
      link: 'https://github.com/IT21278280',
      color: 'hover:text-gray-400'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Rusith Fernando',
      link: 'https://www.linkedin.com/in/rusith-fernando-aaa77a215/',
      color: 'hover:text-blue-400'
    }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    if (formData.attachment && formData.attachment.size > 2 * 1024 * 1024) {
      newErrors.attachment = 'File size must be less than 2MB';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      attachment: file
    }));

    if (errors.attachment) {
      setErrors(prev => ({
        ...prev,
        attachment: ''
      }));
    }
  };

  const removeAttachment = () => {
    setFormData(prev => ({
      ...prev,
      attachment: null
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot (anti-spam)
    if (formData.honeypot) {
      return; // Likely spam
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare email data
      const emailData = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Rusith Fernando',
        reply_to: formData.email
      };

      // If there's an attachment, convert to base64
      if (formData.attachment) {
        const reader = new FileReader();
        reader.onload = async () => {
          emailData.attachment = reader.result;
          emailData.attachment_name = formData.attachment.name;
          
          await sendEmailWithData(emailData);
        };
        reader.readAsDataURL(formData.attachment);
      } else {
        await sendEmailWithData(emailData);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  const sendEmailWithData = async (emailData) => {
    try {
      // Check if EmailJS is configured
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      if (!serviceId || serviceId === 'demo_service') {
        // Show demo success for development
        console.log('Demo mode: Email would be sent with data:', emailData);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          attachment: null,
          honeypot: ''
        });
        return;
      }
      
      await sendEmail(emailData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        attachment: null,
        honeypot: ''
      });
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
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
        <title>Contact - Rusith Fernando | Get In Touch</title>
        <meta 
          name="description" 
          content="Get in touch with Rusith Fernando. Send a message, view contact information, and connect on social media." 
        />
        <meta 
          name="keywords" 
          content="Contact Rusith Fernando, get in touch, email, phone, social media, collaboration" 
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
                Get In <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-xl text-text-muted dark:text-slate-400 max-w-3xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, 
                or just having a conversation about technology and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <div className="card">
                  <h2 className="text-2xl font-heading font-bold mb-6 text-text-primary dark:text-slate-200">Send a Message</h2>
                  
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center space-x-3"
                    >
                      <FaCheckCircle className="w-5 h-5 text-green-400" />
                      <p className="text-green-400">Message sent successfully! I'll get back to you soon.</p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center space-x-3"
                    >
                      <FaExclamationTriangle className="w-5 h-5 text-red-400" />
                      <p className="text-red-400">Failed to send message. Please try again or contact me directly.</p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field (hidden) */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleInputChange}
                      style={{ display: 'none' }}
                      tabIndex="-1"
                      autoComplete="off"
                    />

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-text-primary placeholder-text-muted transition-colors duration-300 ${
                          errors.name ? 'border-red-500' : 'border-gray-700'
                        }`}
                        placeholder="Your full name"
                        required
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-text-primary placeholder-text-muted transition-colors duration-300 ${
                          errors.email ? 'border-red-500' : 'border-gray-700'
                        }`}
                        placeholder="your.email@example.com"
                        required
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-text-primary placeholder-text-muted transition-colors duration-300 ${
                          errors.subject ? 'border-red-500' : 'border-gray-700'
                        }`}
                        placeholder="What's this about?"
                        required
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-text-primary placeholder-text-muted transition-colors duration-300 resize-none ${
                          errors.message ? 'border-red-500' : 'border-gray-700'
                        }`}
                        placeholder="Tell me about your project, question, or just say hello..."
                        required
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                      )}
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Attachment (Optional)
                      </label>
                      
                      {!formData.attachment ? (
                        <div className="relative">
                          <input
                            type="file"
                            id="attachment"
                            name="attachment"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                            className="hidden"
                          />
                          <label
                            htmlFor="attachment"
                            className="flex items-center justify-center w-full px-4 py-6 bg-background border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:border-primary-500 transition-colors duration-300"
                          >
                            <div className="text-center">
                              <FaUpload className="w-8 h-8 text-text-muted mx-auto mb-2" />
                              <p className="text-text-muted">Click to upload a file</p>
                              <p className="text-text-muted text-xs mt-1">Max 2MB • PDF, DOC, TXT, JPG, PNG</p>
                            </div>
                          </label>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between p-3 bg-background border border-gray-700 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FaUpload className="w-4 h-4 text-primary-500" />
                            <div>
                              <p className="text-text-primary text-sm">{formData.attachment.name}</p>
                              <p className="text-text-muted text-xs">
                                {(formData.attachment.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={removeAttachment}
                            className="p-1 text-text-muted hover:text-red-400 transition-colors duration-300"
                          >
                            <FaTimes className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                      
                      {errors.attachment && (
                        <p className="mt-1 text-sm text-red-400">{errors.attachment}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div variants={itemVariants} className="space-y-8">
                {/* Contact Details */}
                <div className="bg-surface rounded-2xl p-8 border border-gray-800">
                  <h2 className="text-2xl font-heading font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-4"
                      >
                        <div className={`p-3 bg-background rounded-lg ${info.color}`}>
                          <info.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-text-muted text-sm">{info.label}</p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-text-primary hover:text-primary-500 transition-colors duration-300"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-text-primary">{info.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-surface rounded-2xl p-8 border border-gray-800">
                  <h2 className="text-2xl font-heading font-bold mb-6">Connect With Me</h2>
                  
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className={`flex items-center space-x-4 p-4 bg-background rounded-lg border border-gray-800 hover:border-primary-500/50 transition-all duration-300 ${social.color}`}
                      >
                        <social.icon className="w-6 h-6" />
                        <div>
                          <p className="text-text-primary font-medium">{social.label}</p>
                          <p className="text-text-muted text-sm">{social.value}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Quick Response */}
                <div className="bg-surface rounded-2xl p-8 border border-gray-800">
                  <h3 className="text-xl font-heading font-semibold mb-4">Quick Response</h3>
                  <p className="text-text-muted mb-4">
                    I typically respond to messages within 24-48 hours. For urgent matters, 
                    feel free to reach out via phone or LinkedIn.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-primary-500">
                    <FaCheckCircle className="w-4 h-4" />
                    <span>Usually responds within 24 hours</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
