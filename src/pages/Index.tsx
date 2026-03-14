import { useEffect, useRef, useState } from "react";
import translations, { type Lang } from "@/i18n/translations";

const skills = [
  { name: "Adobe Photoshop", pct: 90 },
  { name: "Adobe Illustrator", pct: 75 },
  { name: "Brand Identity Design", pct: 80 },
  { name: "POD / Print Design", pct: 90 },
  { name: "Canva Pro", pct: 75 },
  { name: "Wacom Tablet", pct: 85 },
  { name: "CapCut Pro", pct: 72 },
  { name: "AI Tools (Firefly, GenFill)", pct: 80 },
  { name: "HTML / CSS", pct: 65 },
  { name: "Wireframe / UI-UX", pct: 60 },
  { name: "PS Actions & JS Scripts", pct: 80 },
  { name: "Klaviyo Email Design", pct: 72 },
];

const portfolioLinks = [
  "https://behance.net/trantieungoc",
  "https://behance.net/trantieungoc",
  "https://behance.net/trantieungoc",
];

const tools = [
  "Photoshop", "Illustrator", "Firefly", "Canva", "Figma",
  "CapCut", "Wacom", "Klaviyo", "Banana Pro", "Generative Fill",
];

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [isLight, setIsLight] = useState(() => localStorage.getItem("theme") === "light");
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "en");

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
      document.head.appendChild(link);
    }

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
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Top-right toggles */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 print-btn">
        <button
          onClick={() => setLang(lang === "en" ? "vi" : "en")}
          className="h-10 px-3 rounded-full flex items-center justify-center gap-1.5 border border-border bg-card text-foreground hover:border-primary transition-colors duration-200 text-xs font-semibold"
          title={lang === "en" ? "Chuyển sang Tiếng Việt" : "Switch to English"}
        >
          <i className="fa-solid fa-globe text-primary text-sm" />
          <span className="text-primary">{lang === "en" ? "VI" : "EN"}</span>
        </button>
        <button
          onClick={() => setIsLight(!isLight)}
          className="w-10 h-10 rounded-full flex items-center justify-center border border-border bg-card text-foreground hover:border-primary transition-colors duration-200"
          title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
        >
          <i className={`fa-solid ${isLight ? "fa-moon" : "fa-sun"} text-primary text-sm`} />
        </button>
      </div>

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
              {t.subtitle1}
              <br />
              {t.subtitle2}
            </p>
          </div>

          {/* Contact */}
          <div className="fade-section w-full mb-8">
            <h3 className="section-header">{t.contact}</h3>
            <div className="space-y-3 text-sm">
              <ContactRow icon="fa-envelope" text="ngoctt.design@gmail.com" href="mailto:ngoctt.design@gmail.com" />
              <ContactRow icon="fa-phone" text="+84 393 258 ###" href="tel:+84393258483" />
              <ContactRow icon="fa-location-dot" text={t.location} />
              <ContactRow icon="fa-brands fa-linkedin" text="LinkedIn" href="https://www.linkedin.com/in/tieungoc-design/" />
              <ContactRow icon="fa-brands fa-behance" text="Behance" href="https://behance.net/trantieungoc" />
              <ContactRow icon="fa-solid fa-briefcase" text={t.portfolioLink} href="https://tieungoc-portfolio.vercel.app/" />
            </div>
          </div>

          {/* Hard Skills */}
          <div className="fade-section w-full mb-8">
            <h3 className="section-header">{t.hardSkills}</h3>
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
            <h3 className="section-header">{t.languages}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-foreground">{t.vietnamese}</span>
                <span className="text-muted-foreground">{t.native}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">{t.english}</span>
                <span className="text-muted-foreground">{t.englishLevel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">{t.chinese}</span>
                <span className="text-muted-foreground">{t.chineseLevel}</span>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="fade-section w-full">
            <h3 className="section-header">{t.softSkills}</h3>
            <div className="flex flex-wrap gap-2">
              {t.softSkillsList.map((s) => (
                <span key={s} className="soft-tag">{s}</span>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="w-full md:w-[67%] p-8 md:p-12 space-y-10">
          {/* What I Bring */}
          <section className="scroll-reveal">
            <h2 className="section-header">{t.whatIBring}</h2>
            <ul className="space-y-3 text-sm text-foreground leading-relaxed">
              <li className="flex gap-3">
                <i className="fa-solid fa-chart-line text-primary mt-0.5" />
                <span><strong className="text-primary">{t.revenueTitle}</strong> — {t.revenueDesc}</span>
              </li>
              <li className="flex gap-3">
                <i className="fa-solid fa-gears text-primary mt-0.5" />
                <span><strong className="text-primary">{t.automationTitle}</strong> — {t.automationDesc}</span>
              </li>
              <li className="flex gap-3">
                <i className="fa-solid fa-robot text-primary mt-0.5" />
                <span><strong className="text-primary">{t.aiTitle}</strong> — {t.aiDesc}</span>
              </li>
            </ul>
          </section>

          {/* Work Experience */}
          <section className="scroll-reveal">
            <h2 className="section-header">{t.workExp}</h2>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="timeline-dot" />
                <div className="w-px flex-1 bg-border" />
              </div>
              <div className="pb-2">
                <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                  {t.jobTitle}
                </h3>
                <p className="text-primary text-sm font-medium">{t.company}</p>
                <p className="text-muted-foreground text-xs mb-3">{t.period}</p>
                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                  {t.workItems.map((item, i) => (
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
            <h2 className="section-header">{t.portfolio}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.portfolioItems.map((p, i) => (
                <a
                  key={p.title}
                  href={portfolioLinks[i]}
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
          <section className="scroll-reveal">
            <h2 className="section-header">{t.education}</h2>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="timeline-dot" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                  {t.degree}
                </h3>
                <p className="text-primary text-sm">{t.school}</p>
                <p className="text-muted-foreground text-xs">{t.graduated}</p>
              </div>
            </div>
          </section>

          {/* Tools & Tech */}
          <section className="scroll-reveal">
            <h2 className="section-header">{t.toolsTitle}</h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="px-4 py-2 rounded-lg text-xs font-medium text-foreground border border-border bg-muted transition-colors duration-200 hover:border-primary hover:text-primary"
                >
                  {tool}
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
              {t.downloadBtn}
            </button>
          </div>
        </main>
      </div>

      {/* Floating Contact */}
      <a href="mailto:ngoctt.design@gmail.com" className="contact-fab print-btn" title="Contact Me">
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
