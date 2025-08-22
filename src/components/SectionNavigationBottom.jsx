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
    const header = document.querySelector('#home');
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

  // Only render the active section's button
  const currentSection = sections.find((s) => s.id === activeSection) || sections[0];

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          key="section-nav"
          className="fixed bottom-0 inset-x-0 z-40 flex justify-center pointer-events-none"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute w-[40%] h-[100%] flex items-end justify-center">
            <img className='bg-opacity-90 opacity-60 max-w-full max-h-full object-contain' src="/img/assets/bg-nav-footer.png" alt="" />
          </div>
          <div className="hidden lg:flex mt-6 flex-row gap-2 px-2 py-2 bg-background/80  pointer-events-auto">
            {(() => {
              const Icon = currentSection.icon;
              return (
                <motion.div
                  key={currentSection.id}
                  className={`relative px-4 py-2 text-sm bg-primary text-primary-foreground  select-none`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ scale: 1.05 }}
                  title={currentSection.label}
                >
                  <span className="inline-flex text-2xl text-gray-400 items-center gap-2">
                    <Icon className="h-5 w-5" />
                    {currentSection.label}
                  </span>
                </motion.div>
              );
            })()}
          </div>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SectionNavigation;
