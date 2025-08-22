import React from 'react';
import { motion } from 'framer-motion';

const About = ({ logoSrc }) => {
  return (
    <section id="about" className="container px-6 pb-24 min-h-screen flex flex-col justify-center" data-reveal>
      <motion.div 
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay: 0.2
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.img
          src={logoSrc}
          alt="Mindtoscreen logo"
          className="mx-auto w-auto mb-4"
          loading="lazy"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.4
          }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
        />
        <motion.p 
          className="text-sm text-white text-muted-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.6
          }}
          viewport={{ once: true }}
        >
          Jl. Terusan Segawe 5, Bandungrejosari, Sukun, Malang, 65148 <br/>
          cvmindtoscreentechnology@gmail.com <br/>
          (+62) 813-3502-1658
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
