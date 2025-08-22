import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="min-h-screen w-full h-full flex items-center justify-center" data-reveal>
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
        <motion.h2 
          className="text-2xl md:text-3xl font-semibold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.4
          }}
          viewport={{ once: true }}
        >
          Human-friendly B2B software house
        </motion.h2>
        <motion.p 
          className="text-white mt-4 text-muted-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.6
          }}
          viewport={{ once: true }}
        >
          Mindtoscreen partners with organizations to design, build, and maintain modern software systems.
          We keep processes simple, communication clear, and delivery consistent.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Home;
