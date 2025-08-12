import React, { useEffect } from 'react';

import { Button } from "../../components/ui/button";
import logoSrc from "../../../public/lovable-uploads/logo.png"; // Adjust the path as necessary

export default function Header() {
    useEffect(() => {
    // Cek jika script belum ada
    if (!document.querySelector("#spline-viewer-script")) {
      const script = document.createElement("script");
      script.id = "spline-viewer-script";
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer@1.10.44/build/spline-viewer.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <header className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <spline-viewer
        url="https://prod.spline.design/jZSegny77gcr6Bp2/scene.splinecode"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          opacity: 0.1
        }}
      ></spline-viewer>
      </div>

      <div className="container px-6 py-20 md:py-28 text-center">
        <img
          src={logoSrc}
          alt="Mindtoscreen logo"
          loading="eager"
          className="mx-auto mb-6 h-16 w-auto md:h-20"
        />
        <h1 className="mx-auto max-w-3xl text-3xl md:text-5xl font-semibold tracking-tight">
          Mindtoscreen — Your Business Support System
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Building reliable software with a human touch. Web, mobile, and integrations for growing businesses.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button asChild size="lg" className="hover-scale">
            <a href="#contact" aria-label="Go to contact form">
              Get in touch
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary" className="hover-scale">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Chat on WhatsApp"
            >
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}


{/* 
<script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.44/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/jZSegny77gcr6Bp2/scene.splinecode"></spline-viewer> 
*/}
