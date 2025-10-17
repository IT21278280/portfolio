# Rusith Fernando — Production Portfolio

A modern, responsive portfolio website built with **Vite + React + TailwindCSS** featuring dark mode, smooth animations, and comprehensive project showcases. This portfolio demonstrates expertise in web development, IoT systems, and AI technologies.

## 🚀 Features

- **Modern Tech Stack**: Vite, React 19, TailwindCSS, Framer Motion
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Dark Mode**: Default dark theme with light mode toggle
- **Performance Optimized**: Lazy loading, code splitting, optimized assets
- **SEO Friendly**: Meta tags, structured data, sitemap
- **Accessibility**: WCAG compliant with keyboard navigation
- **Interactive Elements**: Smooth animations and micro-interactions
- **PDF Management**: Upload, preview, and download project documents
- **Image Galleries**: Lightbox with keyboard navigation
- **Contact Form**: EmailJS integration with file attachments
- **Firebase Integration**: Optional file storage and authentication

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with concurrent features
- **Vite** - Lightning-fast build tool
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router v6** - Client-side routing
- **React Helmet Async** - SEO meta management
- **React Query** - Server state management

### Icons & UI
- **React Icons** - Comprehensive icon library
- **Lucide React** - Beautiful SVG icons
- **Font Awesome** - Professional icons

### Backend Integration
- **Firebase** - Authentication and file storage
- **EmailJS** - Contact form email service
- **React PDF** - PDF viewing capabilities

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── images/           # Profile and general images
│   │   └── projects/         # Project-specific assets
│   │       ├── horn-detection/
│   │       └── ecommerce/
│   ├── resume.pdf           # Downloadable CV
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── PDFViewer.jsx
│   │   └── ImageGallery.jsx
│   ├── pages/              # Route components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Research.jsx
│   │   ├── Contact.jsx
│   │   └── Resume.jsx
│   ├── data/               # Static data
│   │   ├── projectsData.js
│   │   ├── skillsData.js
│   │   └── experienceData.js
│   ├── utils/              # Utility functions
│   │   ├── firebase.js
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example            # Environment variables template
├── tailwind.config.js      # Tailwind configuration
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/IT21278280/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your configuration:
   ```env
   # Firebase (Optional - for file uploads)
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   
   # EmailJS (For contact form)
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_USER_ID=your_user_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors

# Testing (if implemented)
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

## 🔥 Firebase Setup (Optional)

For file upload functionality, set up Firebase:

1. **Create Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication and Storage

2. **Configure Storage Rules**
   ```javascript
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /{allPaths=**} {
         allow read: if true;
         allow write: if request.auth != null;
       }
     }
   }
   ```

3. **Enable Authentication**
   - Enable Google Sign-in method
   - Add your domain to authorized domains

4. **Get Configuration**
   - Go to Project Settings > General
   - Copy the Firebase config object
   - Add values to your `.env` file

## 📧 EmailJS Setup

For the contact form to work:

1. **Create EmailJS Account**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a new service (Gmail, Outlook, etc.)

2. **Create Email Template**
   ```html
   Subject: New message from {{from_name}}
   
   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```

3. **Get Credentials**
   - Service ID from Services
   - Template ID from Email Templates
   - User ID from Account settings

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#00f7a4', // Your brand color
      },
      secondary: {
        400: '#38bdf8', // Accent color
      },
      background: '#0f172a', // Dark background
    }
  }
}
```

### Content Updates
- **Personal Info**: Update `src/data/` files
- **Projects**: Modify `src/data/projectsData.js`
- **Resume**: Replace `public/resume.pdf`
- **Images**: Add to `public/assets/images/`

### Adding New Projects
```javascript
// In src/data/projectsData.js
{
  id: 'new-project',
  slug: 'new-project',
  title: 'Your Project Title',
  shortDescription: 'Brief description...',
  description: 'Detailed description...',
  technologies: ['React', 'Node.js'],
  images: ['/assets/projects/new-project/hero.jpg'],
  github: 'https://github.com/username/repo',
  demo: 'https://demo-url.com',
  featured: true
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure environment variables
4. Set up continuous deployment

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 📱 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized for speed
- **Bundle Size**: Optimized with code splitting
- **Images**: Lazy loading with fallbacks
- **Caching**: Efficient asset caching

## 🔒 Security

- **Environment Variables**: Sensitive data in .env
- **Firebase Rules**: Secure storage access
- **Input Validation**: Form validation and sanitization
- **HTTPS**: SSL/TLS encryption required

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Firebase Issues**
- Check API keys in `.env`
- Verify Firebase project configuration
- Ensure proper authentication rules

**EmailJS Not Working**
- Verify service and template IDs
- Check email template syntax
- Ensure domain is whitelisted

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

**Rusith Fernando**
- Email: prabodhawith@gmail.com
- LinkedIn: [Rusith Fernando](https://www.linkedin.com/in/rusith-fernando-aaa77a215/)
- GitHub: [IT21278280](https://github.com/IT21278280)

---

**Built with ❤️ using React, TailwindCSS, and modern web technologies.**
