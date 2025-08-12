import { useEffect } from "react";
// import { Button } from "./components/ui/button";
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../hooks/use-toast";
import Header from "./Header/Header";
import {
  MessageSquare,
  ListChecks,
  Code2,
  Rocket,
  Laptop,
  Layers3,
  Palette,
} from "lucide-react";

const logoSrc = "/lovable-uploads/logo.png";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
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

      <Header />

      <main>
        {/* Home / Intro */}
        <section id="home" className="container px-6 py-20" data-reveal>
          home
          {/* <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Human-friendly B2B software house</h2>
            <p className="mt-4 text-muted-foreground">
              Mindtoscreen partners with organizations to design, build, and maintain modern software systems.
              We keep processes simple, communication clear, and delivery consistent.
            </p>
          </div> */}
        </section>

        {/* Workflow */}
        <section id="workflow" className="container px-6 py-16" data-reveal>
          workflow
          {/* <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center">Our Workflow</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <MessageSquare className="h-6 w-6" />, title: "Discussion", desc: "Understand goals & constraints." },
              { icon: <ListChecks className="h-6 w-6" />, title: "Planning", desc: "Roadmap, scope, and timeline." },
              { icon: <Code2 className="h-6 w-6" />, title: "Development", desc: "Deliver clean, testable code." },
              { icon: <Rocket className="h-6 w-6" />, title: "Deployment", desc: "Ship, monitor, and iterate." },
            ].map((s, i) => (
              <Card key={i} className="transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                      {s.icon}
                    </span>
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{s.desc}</CardContent>
              </Card>
            ))}
          </div> */}
        </section>

        {/* Services */}
        <section id="services" className="container px-6 py-16" data-reveal>
          services
          {/* <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center">Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Laptop className="h-6 w-6" />, title: "Software Development", desc: "Web-based & Mobile-based solutions." },
              { icon: <Layers3 className="h-6 w-6" />, title: "Integration System", desc: "Connect apps, services, and data." },
              { icon: <Palette className="h-6 w-6" />, title: "UI/UX Design", desc: "Usable interfaces with modern aesthetics." },
            ].map((s, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                      {s.icon}
                    </span>
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{s.desc}</CardContent>
              </Card>
            ))}
          </div> */}
        </section>

        {/* Products */}
        <section id="products" className="container px-6 py-16" data-reveal>
          products
          {/* <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center">Products</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {["HRIS", "eOffice", "Landing Page / Company Profile"].map((p) => (
              <Card key={p}>
                <CardHeader>
                  <CardTitle>{p}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Tailored to your operations with clean UX and scalable tech.
                </CardContent>
              </Card>
            ))}
          </div> */}
        </section>

        {/* Partners */}
        <section id="partners" className="container px-6 py-16" data-reveal>
          partners
          {/* <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center">Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {["Satkomindo", "ClooserLook", "BADR", "Transtrack"].map((name) => (
              <div
                key={name}
                className="flex h-20 items-center justify-center rounded-md bg-secondary text-sm font-semibold"
                aria-label={`${name} logo`}
              >
                {name}
              </div>
            ))}
          </div> */}
        </section>

        {/* Call To Action */}
        <section id="contact" className="container px-6 py-20" data-reveal>
          CTA
          {/* <div className="mx-auto max-w-3xl">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">Let’s work together</h3>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" autoComplete="name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" autoComplete="email" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows="5" />
              </div>
              <div className="mt-2 flex flex-wrap gap-4">
                <Button type="submit">Send message</Button>
                <Button asChild variant="secondary">
                  <a href="https://wa.me/" target="_blank" rel="noreferrer noopener" aria-label="Open WhatsApp">
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </form>
          </div> */}
        </section>

        {/* About */}
        <section id="about" className="container px-6 pb-24" data-reveal>
          about us
          {/* <div className="mx-auto max-w-3xl text-center">
            <img
              src={logoSrc}
              alt="Mindtoscreen logo"
              className="mx-auto h-12 w-auto mb-4"
              loading="lazy"
            />
            <p className="text-sm text-muted-foreground">
              Address: Jl. Example No. 123, Jakarta, Indonesia
            </p>
          </div> */}
        </section>
      </main>

      <footer className="py-8 border-t">
        <div className="container px-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mindtoscreen. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Index;
