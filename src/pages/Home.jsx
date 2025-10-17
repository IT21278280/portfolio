import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Rusith Fernando - Software Engineer | Full-Stack Developer</title>
        <meta 
          name="description" 
          content="Rusith Fernando is a passionate Software Engineer and Full-Stack Developer specializing in web development, IoT, and AI technologies. Currently pursuing IT degree at SLIIT." 
        />
        <meta 
          name="keywords" 
          content="Rusith Fernando, Software Engineer, Full-Stack Developer, React, Node.js, IoT, AI, Sri Lanka, SLIIT" 
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rusithfernando.dev/" />
        <meta property="og:title" content="Rusith Fernando - Software Engineer | Full-Stack Developer" />
        <meta 
          property="og:description" 
          content="Passionate Software Engineer specializing in web development, IoT, and AI technologies." 
        />
        <meta property="og:image" content="https://rusithfernando.dev/assets/images/profile.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rusithfernando.dev/" />
        <meta property="twitter:title" content="Rusith Fernando - Software Engineer | Full-Stack Developer" />
        <meta 
          property="twitter:description" 
          content="Passionate Software Engineer specializing in web development, IoT, and AI technologies." 
        />
        <meta property="twitter:image" content="https://rusithfernando.dev/assets/images/profile.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Rusith Fernando",
            "jobTitle": "Software Engineer",
            "description": "Software Engineer and Full-Stack Developer specializing in web development, IoT, and AI technologies",
            "url": "https://rusithfernando.dev",
            "sameAs": [
              "https://github.com/IT21278280",
              "https://www.linkedin.com/in/rusith-fernando-aaa77a215/"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Katuneriya",
              "addressCountry": "Sri Lanka"
            },
            "email": "prabodhawith@gmail.com",
            "telephone": "+94769782381"
          })}
        </script>
      </Helmet>

      <Hero />
    </>
  );
};

export default Home;
