import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, lazy } from 'react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Skills = lazy(() => import('./pages/Skills'));
const Experience = lazy(() => import('./pages/Experience'));
const Education = lazy(() => import('./pages/Education'));
const Research = lazy(() => import('./pages/Research'));
const Contact = lazy(() => import('./pages/Contact'));
const Resume = lazy(() => import('./pages/Resume'));

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 10, // 10 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-background text-text-primary dark:bg-slate-900 dark:text-slate-200">
            <Navbar />
            
            <main className="relative">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projects/:slug" element={<ProjectDetail />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/research" element={<Research />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/resume" element={<Resume />} />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
