import React from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { motion } from 'framer-motion';

const Contact = ({ handleSubmit }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="container px-6 py-20 min-h-screen flex flex-col justify-center" data-reveal>
      <motion.div 
        className="mx-auto max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h3 
          className="text-xl md:text-2xl font-semibold mb-6 text-center"
          variants={itemVariants}
        >
          Let's work together
        </motion.h3>
        
        <motion.form 
          onSubmit={handleSubmit} 
          className="grid gap-4"
          variants={itemVariants}
        >
          <motion.div 
            className="grid md:grid-cols-2 gap-4"
            variants={itemVariants}
          >
            <motion.div 
              className="grid gap-2"
              variants={itemVariants}
            >
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" autoComplete="name" />
            </motion.div>
            <motion.div 
              className="grid gap-2"
              variants={itemVariants}
            >
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" autoComplete="email" />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid gap-2"
            variants={itemVariants}
          >
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows="5" />
          </motion.div>
          
          <motion.div 
            className="mt-2 flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <Button type="submit">Send message</Button>
            <Button asChild variant="secondary">
              <a href="https://wa.me/" target="_blank" rel="noreferrer noopener" aria-label="Open WhatsApp">
                Chat on WhatsApp
              </a>
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
