import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";

// Asset Image Imports
import heroLogoImage from "@/assets/wacky-logo.png";
import projBmisImage from "@/assets/bmis-image.png";
import projRoofLogo from "@/assets/roof-logo.png";
import projGym from "@/assets/project-gymsyn.jpg";
import projTicket from "@/assets/project-ticketing.jpg";
import projErp from "@/assets/project-erp.jpg";

import {
  Code2,
  Database,
  Server,
  Shield,
  LayoutDashboard,
  Boxes,
  Ticket,
  Building2,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
  Sparkles,
  Rocket,
  Users,
  Briefcase,
  ExternalLink,
  Home,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wakin — Full Stack Web Developer Portfolio" },
      {
        name: "description",
        content:
          "Wakin is a Full Stack Web Developer with 3+ years of experience building scalable enterprise web apps, HRIS, ERP, and management information systems.",
      },
      { property: "og:title", content: "Wakin — Full Stack Web Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Wakin is a Full Stack Web Developer with 3+ years of experience building scalable enterprise web apps, HRIS, ERP, and management information systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { icon: Briefcase, value: "3+", label: "Years Experience" },
  { icon: Rocket, value: "10+", label: "Projects Completed" },
  { icon: Users, value: "20+", label: "Happy Clients" },
  { icon: Sparkles, value: "100%", label: "Client Satisfaction" },
];

const SKILLS = [
  { name: "HTML", level: 95, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", level: 92, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React.js", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
  { name: "Tailwind CSS", level: 92, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "PHP", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", level: 88, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "MySQL", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const TECH_STACK = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MariaDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  { name: "npm", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
];

const PROJECTS = [
  {
    n: "01",
    icon: Building2,
    image: projBmisImage,
    title: "Barangay Management Information System (BMIS)",
    tagline: "Digitizing barangay operations with a centralized management platform.",
    url: "https://scc-digitized-barangay.online/",
    features: [
      "Barangay Clearance Management",
      "Resident Profiling & Records",
      "Role-Based Access Control",
      "Blotter & Incident Management",
      "Inventory Management",
      "Document & Certificate Generation",
      "Dashboard & Reports",
    ],
    goal: "Improve efficiency, transparency, and accessibility of barangay services through a secure digital platform.",
  },
  {
    n: "02",
    icon: Home,
    image: projRoofLogo,
    title: "AsuraTech Roofing — Corporate Website",
    tagline: "Modern corporate website for a roofing company to showcase services and generate leads.",
    url: "https://asuratech-roofing.vercel.app/",
    features: [
      "Modern Responsive Design",
      "Company Profile & Branding",
      "Roofing Services Showcase",
      "Project Portfolio & Gallery",
      "Customer Testimonials",
      "Quotation Request Form",
      "Google Maps Integration",
      "SEO-Friendly Structure",
    ],
    goal: "Establish a professional online presence, build customer trust, and increase qualified leads through a conversion-focused website.",
  },
  {
    n: "03",
    icon: LayoutDashboard,
    image: projGym,
    title: "GymSync — Smart Gym Management System",
    tagline: "All-in-one gym management for owners, coaches, staff, and members.",
    features: [
      "Member Registration & Management",
      "Attendance Monitoring",
      "Equipment & Inventory Management",
      "Payroll Management",
      "Coach Booking & Requests",
      "Membership Plans & Subscriptions",
      "Dashboard & Analytics",
    ],
    goal: "Simplify gym administration and automate operational workflows end-to-end.",
  },
  {
    n: "04",
    icon: Ticket,
    image: projTicket,
    title: "EmpireOne Ticketing System",
    tagline: "Internal service desk that streamlines cross-department issue resolution.",
    features: [
      "IT Support Ticket Management",
      "Department Request Submission",
      "Ticket Assignment & Routing",
      "Priority & Status Tracking",
      "Notifications & Updates",
      "Department-Based Access Control",
      "Performance Reports",
    ],
    goal: "Centralize internal requests and reduce response times across HR, TA, Accounting, IT, and Operations.",
  },
  {
    n: "05",
    icon: Boxes,
    image: projErp,
    title: "EmpireOne Unified System (ERP)",
    tagline: "Enterprise platform unifying HR, TA, Accounting, Payroll, and Inventory.",
    features: [
      "Employee Management",
      "Recruitment & Applicant Tracking",
      "Payroll Processing",
      "Financial & Accounting Records",
      "Inventory & Asset Tracking",
      "Role-Based Permissions",
      "Real-Time Reports & Analytics",
    ],
    goal: "Unify core business processes into a single platform for productivity and data consistency.",
  },
];

const EXPERTISE = [
  { icon: Code2, title: "Full Stack Development", desc: "End-to-end web application development." },
  { icon: Building2, title: "Enterprise Systems", desc: "HRIS, ERP, and MIS platforms." },
  { icon: Shield, title: "Auth & RBAC", desc: "Secure authentication & role-based access." },
  { icon: Server, title: "REST API Development", desc: "Scalable APIs & integrations." },
  { icon: Database, title: "Database Design", desc: "MySQL / MariaDB optimization." },
  { icon: LayoutDashboard, title: "Dashboards & Analytics", desc: "Insightful reporting interfaces." },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Skills />
      <TechCarousel />
      <Projects />
      <Expertise />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <div className="grid h-9 w-9 place-items-center font-mono text-sm font-black text-primary ">
            {"</>"}
          </div>
          <span>wakin_dev</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent-glow px-5 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105 md:inline-flex"
        >
          Hire Me <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden pt-16 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[160px] sm:h-[800px] sm:w-[800px]" />
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-accent-glow/20 blur-[160px] sm:h-[600px] sm:w-[600px]" />
      </div>

      <div className="mx-auto grid w-full max-w-[92vw] flex-1 grid-cols-1 items-center gap-8 px-4 py-8 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:py-12">

        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            I'm a Full Stack Developer
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Hi, I'm <span className="bg-gradient-to-r from-primary to-accent-glow bg-clip-text text-transparent">Wakin</span>
            <br />
            I build systems for the enterprise.
          </h1>

          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg lg:text-xl">
            A passionate Full Stack Web Developer with 3+ years of experience designing, developing, and maintaining
            scalable, secure, and user-centric web applications that streamline business operations.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-5 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent-glow px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              View My Work <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              <Download className="h-5 w-5" /> Download CV
            </a>
          </div>

          <div className="mt-10 sm:mt-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Technologies I work with
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-5 lg:justify-start">
              {TECH_STACK.slice(0, 7).map((t) => (
                <img
                  key={t.name}
                  src={t.logo}
                  alt={t.name}
                  className={`h-8 w-8 opacity-90 transition-all hover:scale-110 hover:opacity-100 sm:h-10 sm:w-10 ${t.invert ? "invert" : ""}`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative order-1 flex items-center justify-center lg:order-2">
          <div className="relative flex w-full max-w-[500px] items-center justify-center sm:max-w-[650px] lg:max-w-[800px]">
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-[450px] w-[450px] rounded-full bg-gradient-to-br from-primary/50 via-accent-glow/40 to-primary/20 blur-3xl sm:h-[600px] sm:w-[600px] lg:h-[700px] lg:w-[700px]" />
            </div>

            <div
              className="pointer-events-none absolute -right-4 top-2 h-24 w-24 opacity-60 sm:h-36 sm:w-36"
              style={{
                backgroundImage: "radial-gradient(circle, oklch(0.7 0.18 285) 2px, transparent 2px)",
                backgroundSize: "16px 16px",
              }}
            />

            <img
              src={heroLogoImage}
              alt="Wakin — Full Stack Web Developer"
              className="relative z-10 h-auto max-h-[65vh] w-full object-contain drop-shadow-2xl transition-transform hover:scale-[1.02]"
            />

            <div className="absolute -bottom-4 -left-6 z-20 hidden max-w-[280px] rounded-xl border border-border bg-card/90 p-4 font-mono text-xs shadow-2xl backdrop-blur lg:block">
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-4" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-2" />
                <span className="ml-2 text-[10px] text-muted-foreground">developer.js</span>
              </div>
              <pre className="text-[11px] leading-relaxed text-muted-foreground">
{`const dev = {
  name: "Wakin",
  role: "Full Stack",
  stack: ["React","Laravel"],
  passion: "Building
    scalable systems"
}`}
              </pre>
            </div>
          </div>
        </div>

      </div>

      <div className="mx-auto w-full max-w-[92vw] px-4 pb-6 sm:px-8 sm:pb-8">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card/40 p-5 backdrop-blur md:grid-cols-4 lg:p-6">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary sm:h-14 sm:w-14">
                <s.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="min-w-0">
                <div className="text-2xl font-bold sm:text-3xl">{s.value}</div>
                <div className="truncate text-xs text-muted-foreground sm:text-sm">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent-glow" />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading eyebrow="About Me" title="Building software that solves real problems" />
      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-card/30 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/30">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-primary/40" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
              Philosophy
            </p>
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight">Development Philosophy</h3>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            I'm passionate about building high-quality software that solves real-world business
            challenges. Every application I develop emphasizes clean architecture, maintainable
            code, security, scalability, and an intuitive user experience.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            My goal is to create digital solutions that not only meet business requirements but
            also improve productivity, automate workflows, and deliver long-term value.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/30 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/30">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent-glow/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-primary/40" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                Capabilities
              </p>
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight">What I Do Best</h3>

            <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {[
                "Enterprise Web Apps",
                "HRIS & ERP Solutions",
                "MIS Platforms",
                "Payroll Systems",
                "Ticketing Systems",
                "Inventory Systems",
                "REST API Design",
                "Database Optimization",
              ].map((item) => (
                <li
                  key={item}
                  className="group flex items-center gap-2.5 rounded-lg border border-border/50 bg-background/30 px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary transition-transform group-hover:scale-125" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading eyebrow="My Skills" title="Technologies I Master" />
      <div ref={sectionRef} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s, i) => (
          <div
            key={s.name}
            className="group rounded-xl border border-border/60 bg-card/30 p-5 shadow-sm backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            style={{
              transitionDelay: inView ? `${i * 60}ms` : "0ms",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-background/60 ring-1 ring-border/50 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={s.logo}
                  alt={s.name}
                  className={`h-6 w-6 object-contain ${s.invert ? "invert" : ""}`}
                  loading="lazy"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="truncate text-sm font-semibold tracking-tight">{s.name}</p>
                  <span className="font-mono text-xs font-bold text-primary">
                    {s.level}%
                  </span>
                </div>
                <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent-glow transition-all ease-out"
                    style={{
                      width: inView ? `${s.level}%` : "0%",
                      transitionDuration: "1000ms",
                      transitionDelay: inView ? `${i * 60 + 150}ms` : "0ms",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TechCarousel() {
  const items = [...TECH_STACK, ...TECH_STACK];
  return (
    <section className="relative border-y border-border/60 bg-card/20 py-14">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent" />

      <div className="relative mb-8 flex items-center justify-center gap-4">
        <div className="h-px w-10 bg-border" />
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          My Tech Stack
        </p>
        <div className="h-px w-10 bg-border" />
      </div>

      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-3 pr-3 group-hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="group/item flex w-28 shrink-0 flex-col items-center gap-2.5 rounded-xl px-3 py-4 transition-colors duration-300 hover:bg-primary/5"
            >
              <div className="grid h-14 w-14 place-items-center rounded-xl transition-all duration-300 group-hover/item:-translate-y-1">
                <img
                  src={t.logo}
                  alt={t.name}
                  className={`h-10 w-10 object-contain grayscale transition-all duration-300 group-hover/item:scale-110 group-hover/item:grayscale-0 ${
                    t.invert ? "invert group-hover/item:invert-0" : ""
                  }`}
                  loading="lazy"
                />
              </div>
              <span className="text-xs text-muted-foreground opacity-70 transition-opacity duration-300 group-hover/item:text-primary group-hover/item:opacity-100">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = PROJECTS.length;

  const go = (d: number) => {
    setDirection(d);
    setIdx((i) => (i + d + total) % total);
  };

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading eyebrow="Featured Work" title="Some of My Recent Work" />

      <div className="relative mt-14">
        <div className="mb-8 flex items-center gap-4">
          <span className="font-mono text-sm text-muted-foreground">
            {String(idx + 1).padStart(2, "0")}
          </span>
          <div className="h-px flex-1 bg-border">
            <div
              className="h-px bg-primary transition-all duration-500 ease-out"
              style={{ width: `${((idx + 1) / total) * 100}%` }}
            />
          </div>
          <span className="font-mono text-sm text-muted-foreground">
            {String(total).padStart(2, "0")}
          </span>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {PROJECTS.map((p) => {
              const Tag: "a" | "article" = p.url ? "a" : "article";
              const linkProps = p.url
                ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <div key={p.n} className="w-full shrink-0 px-1.5">
                  <Tag
                    {...linkProps}
                    className="group grid gap-0 overflow-hidden rounded-2xl border border-border/60 bg-card/30 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 lg:grid-cols-2"
                  >
                    <div className="relative overflow-hidden bg-gradient-to-br from-background/60 to-background/20">
                      <img
                        src={p.image}
                        alt={p.title}
                        width={1280}
                        height={800}
                        loading="lazy"
                        className="h-64 w-full object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-[1.03] lg:h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>

                    <div className="flex flex-col p-8">
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                          <p.icon className="h-4 w-4" />
                        </div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                          Project {p.n} of {total}
                        </p>
                      </div>

                      <h3 className="mt-5 flex items-start gap-2 text-2xl font-semibold leading-tight tracking-tight">
                        <span>{p.title}</span>
                        {p.url && (
                          <ExternalLink className="mt-1.5 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                        )}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                        {p.tagline}
                      </p>

                      <div className="mt-6">
                        <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70">
                          Key Features
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {p.features.map((f) => (
                            <span
                              key={f}
                              className="rounded-md border border-border/60 bg-background/50 px-2.5 py-1 text-xs text-foreground/80"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto pt-6">
                        <div className="border-t border-border/50 pt-5">
                          <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70">
                            Project Goal
                          </p>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                            {p.goal}
                          </p>
                          {p.url && (
                            <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                              Visit live site
                              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </Tag>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-1.5">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > idx ? 1 : -1); setIdx(i); }}
                aria-label={`Go to project ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                  i === idx ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous project"
              className="grid h-10 w-10 place-items-center rounded-full border border-border/60 text-foreground/70 transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next project"
              className="grid h-10 w-10 place-items-center rounded-full border border-border/60 text-foreground/70 transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading eyebrow="Core Expertise" title="What I Specialize In" />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {EXPERTISE.map((e, i) => (
          <div
            key={e.title}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/30 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="flex items-start justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-all duration-300 group-hover:bg-primary/15 group-hover:ring-primary/25">
                <e.icon className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs text-muted-foreground/50">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-5 font-semibold tracking-tight">{e.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {e.desc}
            </p>

            <div className="mt-5 h-px w-8 bg-primary/30 transition-all duration-300 group-hover:w-12" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const socials = [
    { Icon: Github, href: "https://github.com/", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/wacky-hojilla-088761328/", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:wackyhojilla13@gmail.com", label: "Email" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:wackyhojilla13@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-card/40 to-accent-glow/20 p-10 text-center backdrop-blur md:p-16">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent-glow/30 blur-3xl" />
        <p className="relative text-xs font-semibold uppercase tracking-widest text-primary">Let's work together</p>
        <h2 className="relative mt-3 text-3xl font-bold sm:text-5xl">Have a project in mind?</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
          I'm always open to discussing new projects and opportunities. Let's create something amazing together.
        </p>

        <form
          onSubmit={handleSubmit}
          className="relative mx-auto mt-10 flex max-w-xl flex-col gap-4 text-left"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none backdrop-blur transition-colors focus:border-primary/50"
            />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none backdrop-blur transition-colors focus:border-primary/50"
            />
          </div>
          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none backdrop-blur transition-colors focus:border-primary/50"
          />
          <button
            type="submit"
            className="mx-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent-glow px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            <Mail className="h-4 w-4" /> Send Message
          </button>
          {status === "sent" && (
            <p className="mx-auto text-sm text-primary">
              Your email client should now be open — just hit send!
            </p>
          )}
        </form>

        <div className="relative mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:wackyhojilla13@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent-glow px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            <Mail className="h-4 w-4" /> Get in Touch
          </a>
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground sm:flex-row">
        <p>© 2026 Wakin. All rights reserved.</p>
        <p>
          Built with <span className="text-primary font-mono">{"</>"}</span> by Wakin
        </p>
      </div>
    </footer>
  );
}  
