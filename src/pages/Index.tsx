import { useEffect, useRef } from "react";

const skills = [
  { name: "Adobe Photoshop", pct: 92 },
  { name: "Adobe Illustrator", pct: 90 },
  { name: "Brand Identity Design", pct: 88 },
  { name: "POD / Print Design", pct: 90 },
  { name: "Canva Pro", pct: 82 },
  { name: "Wacom Tablet", pct: 85 },
  { name: "CapCut Pro", pct: 75 },
  { name: "AI Tools (Firefly, GenFill)", pct: 80 },
  { name: "HTML / CSS", pct: 65 },
  { name: "Figma / UI-UX", pct: 68 },
  { name: "PS Actions & JS Scripts", pct: 78 },
  { name: "Klaviyo Email Design", pct: 72 },
];

const softSkills = [
  "Creative Thinking", "Attention to Detail", "Fast Execution",
  "Team Collaboration", "Client Communication", "Self-learning",
  "Deadline-driven", "Problem Solving",
];

const portfolio = [
  {
    title: "POD Anime Collection",
    desc: "50+ apparel designs for anime-themed POD store targeting US market",
    result: "Generated $20,000+ revenue in Q1 2024",
    link: "https://behance.net/trantieungoc",
  },
  {
    title: "Racing Apparel Line",
    desc: "Complete brand identity kit + 30 product designs for US racing niche",
    result: "Full brand system from logo to mockup-ready print files",
    link: "https://behance.net/trantieungoc",
  },
  {
    title: "E-commerce Email System",
    desc: "15+ Klaviyo email templates for POD ecommerce campaigns",
    result: "28% avg open rate — above industry benchmark of 21%",
    link: "https://behance.net/trantieungoc",
  },
];

const tools = [
  "Photoshop", "Illustrator", "Firefly", "Canva", "Figma",
  "CapCut", "Wacom", "Klaviyo", "Banana Pro", "Generative Fill",
];

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Font Awesome
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
      document.head.appendChild(link);
    }

    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll(".scroll-reveal");
    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* OG meta handled in index.html */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* SIDEBAR */}
        <aside className="w-full md:w-[33%] bg-sidebar sidebar-pattern p-8 flex flex-col items-center md:min-h-screen">
          <div className="fade-section flex flex-col items-center mb-8">
            <div
              className="w-[130px] h-[130px] rounded-full overflow-hidden mb-4"
              style={{
                border: "3px solid hsl(42, 55%, 54%)",
                boxShadow: "0 0 20px rgba(201,168,76,0.4)",
              }}
            >
              <img
                src="https://i.postimg.cc/qRjsxDvw/download-id-1sxaDWMiwXcT4mDm5BJgzU2aow1A8aWbG-authuser-0.jpg"
                alt="Trần Tiểu Ngọc"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
              Trần Tiểu Ngọc
            </h1>
            <p className="text-sm text-muted-foreground mt-1 text-center leading-relaxed">
              Senior Graphic Designer
              <br />
              POD & Brand Visual | AI-Powered Design
            </p>
          </div>

          {/* Contact */}
          <div className="fade-section w-full mb-8">
            <h3 className="section-header">Contact</h3>
            <div className="space-y-3 text-sm">
              <ContactRow icon="fa-envelope" text="trantieungoc.designer@gmail.com" href="mailto:trantieungoc.designer@gmail.com" />
              <ContactRow icon="fa-phone" text="+84 393 258 483" href="tel:+84393258483" />
              <ContactRow icon="fa-location-dot" text="Thu Duc, HCM City" />
              <ContactRow icon="fa-brands fa-linkedin" text="LinkedIn" href="https://linkedin.com/in/trantieungoc" />
              <ContactRow icon="fa-brands fa-behance" text="Behance" href="https://behance.net/trantieungoc" />
            </div>
          </div>

          {/* Hard Skills */}
          <div className="fade-section w-full mb-8">
            <h3 className="section-header">Hard Skills</h3>
            <div className="space-y-3">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-foreground">{s.name}</span>
                    <span className="text-primary font-semibold">{s.pct}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ "--target-width": `${s.pct}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="fade-section w-full mb-8">
            <h3 className="section-header">Languages</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-foreground">Vietnamese</span>
                <span className="text-muted-foreground">Native</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">English</span>
                <span className="text-muted-foreground">B2 — Upper Intermediate</span>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="fade-section w-full">
            <h3 className="section-header">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span key={s} className="soft-tag">{s}</span>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="w-full md:w-[67%] p-8 md:p-12 space-y-10">
          {/* Why Hire Me */}
          <section className="scroll-reveal">
            <h2 className="section-header">What I Bring to Your Team</h2>
            <ul className="space-y-3 text-sm text-foreground leading-relaxed">
              <li className="flex gap-3">
                <i className="fa-solid fa-chart-line text-primary mt-0.5" />
                <span><strong className="text-primary">Proven Revenue Impact</strong> — Generated $20,000+ from a single POD anime collection in one quarter.</span>
              </li>
              <li className="flex gap-3">
                <i className="fa-solid fa-gears text-primary mt-0.5" />
                <span><strong className="text-primary">Automation Expert</strong> — Built Photoshop Actions & JS Scripts saving ~40% production time.</span>
              </li>
              <li className="flex gap-3">
                <i className="fa-solid fa-robot text-primary mt-0.5" />
                <span><strong className="text-primary">AI-First Workflow</strong> — Leveraging Firefly, Generative Fill & Banana Pro for 3× faster output than traditional designers.</span>
              </li>
            </ul>
          </section>

          {/* Work Experience */}
          <section className="scroll-reveal">
            <h2 className="section-header">Work Experience</h2>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="timeline-dot" />
                <div className="w-px flex-1 bg-border" />
              </div>
              <div className="pb-2">
                <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                  Graphic Designer — POD & Brand Visual
                </h3>
                <p className="text-primary text-sm font-medium">Vani Ecommerce · Full-time</p>
                <p className="text-muted-foreground text-xs mb-3">January 2021 — Present (4+ years)</p>
                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                  {[
                    "Designed 500+ POD products (T-shirts 2D/3D, mugs, posters, banners) for US/EU markets",
                    "Built complete Brand Identity systems: logo, color palette, typography guidelines",
                    "Created Photoshop Actions & JS Scripts — reduced production time by ~40%",
                    "Applied Color Theory and Typography principles for print-quality output",
                    "Used Wacom Tablet for precision illustration and detailed artwork",
                    "Integrated AI tools: Adobe Firefly, Generative Fill, Banana Pro into daily workflow",
                    "Collaborated cross-functionally with marketing and ecommerce teams",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Portfolio */}
          <section className="scroll-reveal">
            <h2 className="section-header">Portfolio Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {portfolio.map((p) => (
                <a
                  key={p.title}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-card block"
                >
                  <h4 className="text-foreground font-semibold text-sm mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {p.title}
                  </h4>
                  <p className="text-muted-foreground text-xs mb-3 leading-relaxed">{p.desc}</p>
                  <p className="text-primary text-xs font-medium">
                    <i className="fa-solid fa-trophy mr-1" />
                    {p.result}
                  </p>
                </a>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="fade-section">
            <h2 className="section-header">Education</h2>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="timeline-dot" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                  Bachelor of Graphic Design
                </h3>
                <p className="text-primary text-sm">HCM City University of Technology and Education</p>
                <p className="text-muted-foreground text-xs">Graduated 2022</p>
              </div>
            </div>
          </section>

          {/* Tools & Tech */}
          <section className="fade-section">
            <h2 className="section-header">Tools & Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <div
                  key={t}
                  className="px-4 py-2 rounded-lg text-xs font-medium text-foreground border border-border bg-muted transition-colors duration-200 hover:border-primary hover:text-primary"
                >
                  {t}
                </div>
              ))}
            </div>
          </section>

          {/* Print Button */}
          <div className="fade-section print-btn">
            <button
              onClick={() => window.print()}
              className="px-6 py-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <i className="fa-solid fa-download mr-2" />
              Download PDF / Print CV
            </button>
          </div>
        </main>
      </div>

      {/* Floating Contact */}
      <a href="mailto:trantieungoc.designer@gmail.com" className="contact-fab print-btn" title="Contact Me">
        <i className="fa-solid fa-envelope text-lg" />
      </a>
    </div>
  );
};

const ContactRow = ({ icon, text, href }: { icon: string; text: string; href?: string }) => (
  <div className="flex items-center gap-3">
    <i className={`fa-solid ${icon} text-primary text-xs w-4 text-center`} />
    {href ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors truncate">
        {text}
      </a>
    ) : (
      <span className="text-muted-foreground">{text}</span>
    )}
  </div>
);

export default Index;
