import React, { useEffect, useState, Suspense, lazy } from "react";
import { useToast } from "../hooks/use-toast";
import Header from "./Header/Header";

// Lazy load non-critical sections so Header paints first
const Services = lazy(() => import("./Services"));
const Workflow = lazy(() => import("./Workflow"));
const Products = lazy(() => import("./Products"));
const Partners = lazy(() => import("./Partners"));
const Contact = lazy(() => import("./Contact"));
const About = lazy(() => import("./About"));

import ScrollToTop from "../components/ScrollToTop";
import SectionNavigation from "../components/SectionNavigation";
import SectionNavigationBottom from "../components/SectionNavigationBottom";

const logoSrc = "/lovable-uploads/logo.png";

const Index = () => {
  const { toast } = useToast();
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    // Defer mounting of non-header sections until the browser is idle
    const idle = (cb) => {
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        window.requestIdleCallback(cb, { timeout: 1200 });
      } else {
        setTimeout(cb, 1); // next tick fallback
      }
    };
    idle(() => setShowRest(true));
  }, []);

  useEffect(() => {
    // Load Spline viewer script after mount (non-blocking)
    if (!document.querySelector("#spline-viewer-script")) {
      const script = document.createElement("script");
      script.id = "spline-viewer-script";
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer@1.10.48/build/spline-viewer.js";
      document.body.appendChild(script);
    }

    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-enter");
            entry.target.classList.remove("opacity-0", "translate-y-3");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) {
      toast({ title: "Missing information", description: "Please fill out all fields." });
      return;
    }
    toast({ title: "Thanks!", description: "We’ll get back to you shortly." });
    e.currentTarget.reset();
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mindtoscreen",
    url: typeof window !== "undefined" ? window.location.origin : "",
    logo: logoSrc,
    description:
      "Mindtoscreen is a human-friendly B2B software house: web, mobile, integrations, and design.",
  };

  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mindtoscreen",
    url: typeof window !== "undefined" ? window.location.origin : "",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
      />

      <div className="fixed inset-0 -z-10 pointer-events-none opacity-95">
        <img className='w-full h-full object-cover' src="/img/assets/BG-1.png" alt="" />
      </div>
      <main className="bg-black bg-opacity-90 flex flex-col justify-center items-center">
        {/* Header paints immediately */}
        <Header />

        {/* Defer the rest of the site until idle to avoid blocking first paint */}
        {showRest && (
          <Suspense fallback={null}>
            <Services />
            <Workflow />
            <Products />
            <Partners />
            {/* <Contact handleSubmit={handleSubmit} /> */}
            <About logoSrc={logoSrc} />
          </Suspense>
        )}
      </main>

      {showRest && (
        <>
          {/* <footer className="py-8 border-t">
            <div className="container px-6 text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} Mindtoscreen. All rights reserved.
            </div>
          </footer> */}

          <SectionNavigation />
          <SectionNavigationBottom />
          <ScrollToTop />
        </>
      )}
    </>
  );
};

export default Index;


// <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.48/build/spline-viewer.js"></script>
// <spline-viewer url="https://prod.spline.design/6PmOuwwxp5E0mDNK/scene.splinecode"></spline-viewer>
