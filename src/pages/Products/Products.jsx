import React from 'react';
import { MessageSquare, ListChecks, Code2, Rocket } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { motion } from 'framer-motion';

const Products = () => {
  const workflowSteps = [
    { icon: <MessageSquare className="h-6 w-6" />, title: "Discussion", desc: "Understand goals & constraints." },
    { icon: <ListChecks className="h-6 w-6" />, title: "Planning", desc: "Roadmap, scope, and timeline." },
    { icon: <Code2 className="h-6 w-6" />, title: "Development", desc: "Deliver clean, testable code." },
    { icon: <Rocket className="h-6 w-6" />, title: "Deployment", desc: "Ship, monitor, and iterate." },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
        delayChildren: 0.1,   // Initial delay before first child
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
    <section id="products" className="container min-h-screen flex flex-col justify-center" data-reveal>
     
      
      <motion.div 
        className="h-[50%] w-[200%] flex"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className='w-[100%] h-[50%] flex items-center justify-center'>
          <spline-viewer 
            url="https://prod.spline.design/RQ9-tX0fVD8AZ7Qj/scene.splinecode"
            style={{
              width: "100%",
              height: "100%",
              border: "none"
            }}
          />
        </div>
        
        
      </motion.div>
    </section>
  );
};

export default Products;

// <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.48/build/spline-viewer.js"></script>
// <spline-viewer url="https://prod.spline.design/RQ9-tX0fVD8AZ7Qj/scene.splinecode"></spline-viewer>
