import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ListChecks, Settings, Package, Users, MessageSquare, Info } from 'lucide-react';

const SectionNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showNav, setShowNav] = useState(false);

  const sections = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'services', label: 'Services', icon: Settings },
    { id: 'workflow', label: 'Workflow', icon: ListChecks },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'partners', label: 'Partners', icon: Users },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
    { id: 'about', label: 'About', icon: Info },
  ];

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Show nav only after header is out of view
  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) {
      setShowNav(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowNav(!entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          key="section-nav"
          className="fixed top-0 inset-x-0 z-40 flex justify-center pointer-events-none"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <img className='absolute top-3 left-5 w-[19%]' src="/lovable-uploads/logo.png" alt="" />
          <div className="absolute w-[55%] h-[100%] flex items-end justify-center">
            <img className='bg-opacity-90 opacity-90' src="/img/assets/bg-navbar.png" alt="" />
          </div>
          <div className="hidden lg:flex mt-6 flex-row gap-2 px-2 py-2 bg-background/80 backdrop-blur-sm rounded-full  shadow-lg pointer-events-auto">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;

              return (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-gray-400 text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title={section.label}
                >
                  <span className={`inline-flex ${isActive ? 'text-black' : 'text-gray-400'} items-center gap-2`}>
                    <Icon className="h-4 w-4" />
                    {section.label}
                  </span>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 h-1 w-1 rounded-full bg-primary-foreground"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.15 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SectionNavigation;
