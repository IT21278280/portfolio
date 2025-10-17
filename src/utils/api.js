// API utility functions for file uploads and external services

import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { storage, db } from './firebase';
import emailjs from 'emailjs-com';

// File upload utilities
export const uploadFile = async (file, path, onProgress = null) => {
  try {
    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (onProgress) {
            onProgress(progress);
          }
        },
        (error) => {
          console.error('Upload error:', error);
          reject(error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            resolve({
              url: downloadURL,
              path: path,
              name: file.name,
              size: file.size,
              type: file.type
            });
          } catch (error) {
            reject(error);
          }
        }
      );
    });
  } catch (error) {
    console.error('Upload failed:', error);
    throw error;
  }
};

// Delete file from Firebase Storage
export const deleteFile = async (filePath) => {
  try {
    const fileRef = ref(storage, filePath);
    await deleteObject(fileRef);
    return true;
  } catch (error) {
    console.error('Delete failed:', error);
    throw error;
  }
};

// Firestore document operations
export const addDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Add document failed:', error);
    throw error;
  }
};

export const getDocuments = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const documents = [];
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    return documents;
  } catch (error) {
    console.error('Get documents failed:', error);
    throw error;
  }
};

export const updateDocument = async (collectionName, docId, data) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, {
      ...data,
      updatedAt: new Date()
    });
    return true;
  } catch (error) {
    console.error('Update document failed:', error);
    throw error;
  }
};

export const deleteDocument = async (collectionName, docId) => {
  try {
    await deleteDoc(doc(db, collectionName, docId));
    return true;
  } catch (error) {
    console.error('Delete document failed:', error);
    throw error;
  }
};

// Email service using EmailJS
export const sendEmail = async (templateParams) => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      userId
    );

    return response;
  } catch (error) {
    console.error('Email send failed:', error);
    throw error;
  }
};

// File validation utilities
export const validateFile = (file, options = {}) => {
  const {
    maxSize = 5 * 1024 * 1024, // 5MB default
    allowedTypes = ['image/*', 'application/pdf'],
    maxFiles = 1
  } = options;

  const errors = [];

  // Check file size
  if (file.size > maxSize) {
    errors.push(`File size must be less than ${maxSize / (1024 * 1024)}MB`);
  }

  // Check file type
  const isValidType = allowedTypes.some(type => {
    if (type.includes('*')) {
      const baseType = type.split('/')[0];
      return file.type.startsWith(baseType);
    }
    return file.type === type;
  });

  if (!isValidType) {
    errors.push(`File type not allowed. Allowed types: ${allowedTypes.join(', ')}`);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Generate unique file path
export const generateFilePath = (projectId, fileName, folder = 'attachments') => {
  const timestamp = Date.now();
  const cleanFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, '_');
  return `projects/${projectId}/${folder}/${timestamp}_${cleanFileName}`;
};

// Format file size
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Download file
export const downloadFile = (url, filename) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
