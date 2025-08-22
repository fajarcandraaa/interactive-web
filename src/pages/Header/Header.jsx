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
      script.src = "https://unpkg.com/@splinetool/viewer@1.10.48/build/spline-viewer.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen opacity-90 place-items-center overflow-hidden">
      
      <div className="relative -z-10 w-[100%] h-[100%] flex items-center justify-center">
        <spline-viewer
        url="https://prod.spline.design/t2usglXlAX7p0qjT/scene.splinecode"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          // opacity: 0.6
        }}
      ></spline-viewer>
      </div>
    </section>
  );
}


{/* 
<script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.48/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/t2usglXlAX7p0qjT/scene.splinecode"></spline-viewer>
*/}
