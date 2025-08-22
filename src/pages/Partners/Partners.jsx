import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Partners = () => {
  const [counts, setCounts] = useState({
    established: 0,
    teamExp: 0,
    client: 0,
    projects: 0
  });

  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.5,
    triggerOnce: true
  });

  const partners = [
    {
      name: "SATKOM Indo",
      logo: "/img/assets/logo_satkom.png",
      type: "satkom"
    },
    {
      name: "BADR",
      logo: "/img/assets/badr.png",
      type: "badr"
    },
    {
      name: "TransTRACK",
      logo: "/img/assets/transtrack.png",
      type: "transtrack"
    }
  ];

  const stats = [
    { value: 2024, label: "Established", key: "established" },
    { value: 5, label: "Team Exp", key: "teamExp", suffix: " year+" },
    { value: 5, label: "Client", key: "client", suffix: "+" },
    { value: 7, label: "Projects", key: "projects", suffix: "+" }
  ];

  // Counting animation effect
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts(prevCounts => ({
          ...prevCounts,
          established: Math.floor(2024 * progress),
          teamExp: Math.floor(5 * progress),
          client: Math.floor(5 * progress),
          projects: Math.floor(7 * progress)
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts({
            established: 2024,
            teamExp: 5,
            client: 5,
            projects: 7
          });
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="partners" className="px-6 py-16 min-h-screen w-[200%] flex flex-col justify-center" data-reveal>
      
      <div className="flex flex-col px-6 py-16 relative z-10">
        {/* Quote and Description */}
        <motion.div 
          className="text-center my-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
            Kami Berkembang Bersama{' '}
            <span className="text-cyan-400">Mitra Kami</span>
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Setiap kerja sama adalah perjalanan membangun solusi yang{' '}
            <span className="text-cyan-400">bermanfaat</span> dan{' '}
            <span className="text-cyan-400">berdampak nyata</span>
          </p>
        </motion.div>

        {/* Partner Logos */}
        <motion.div 
          className="bg-gray-200 bg-opacity-40 py-10 my-16 flex justify-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex space-x-16">
            {partners.map((partner, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center space-y-4"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="h-20 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistics with Counting Animation */}
        <motion.div 
          ref={ref}
          className="flex items-center justify-center gap-40 my-16"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-start"
            >
              <div className="text-3xl md:text-6xl font-bold text-white mb-2">
                {counts[stat.key] || 0}
                {stat.suffix}
              </div>
              <div className="text-xl text-gray-200 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
