import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      bg: '/img/assets/service-1.png',
      l1: 'SOFTWARE',
      l2: 'DEVELOPMENT',
      desc:
        'Kami merancang dan mengembangkan software custom multiplatform untuk perusahaan.',
    },
    {
      bg: '/img/assets/service-2.png',
      l1: 'WEB',
      l2: 'DEVELOPMENT',
      desc: 'Kami membangun berbagai jenis website sesuai dengan kebutuhan.',
    },
    {
      bg: '/img/assets/service-3.png',
      l1: 'MOBILE APP',
      l2: 'DEVELOPMENT',
      desc:
        'Kami membangun aplikasi mobile Android dan iOS dengan performa tinggi dan tampilan modern.',
    },
    {
      bg: '/img/assets/service-4.png',
      l1: 'UI/UX',
      l2: 'DESIGN',
      desc:
        'Kami fokus pada experience atau pengalaman pengguna.',
    },
    {
      bg: '/img/assets/service-5.png',
      l1: 'SYSTEM',
      l2: 'INTEGRATION',
      desc:
        'Kami merancang dan mengembangkan software custom multiplatform untuk perusahaan.',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="container px-6 py-16 min-h-screen w-[200%] flex flex-col justify-center" data-reveal>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -20 }}
            className="relative h-[30rem] rounded-3xl overflow-hidden border border-white/50 shadow-lg shadow-slate-700"
          >
            <img
              src={service.bg}
              alt="service background"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ filter: 'grayscale(15%) brightness(1)' }}
            />
            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-4 text-center text-white">
              <h4 className="text-2xl leading-tight md:text-3xl font-extrabold tracking-wide drop-shadow">
                {service.l1}
                <br />
                {service.l2}
              </h4>
              <p className="mt-3 text-[11px] md:text-xs text-white/90 max-w-[85%] leading-relaxed">
                {service.desc}
              </p>
            </div>

            {/* Soft inner shadow for vignette effect */}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
