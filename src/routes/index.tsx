import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroAsset from "@/assets/wacky-hero-2.png.asset.json";
import logoAsset from "@/assets/web-logo.png.asset.json";
import projBmis from "@/assets/project-bmis.jpg";
import projAsura from "@/assets/project-asuratech.jpg";
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
      { title: "Wacky — Full Stack Web Developer Portfolio" },
      {
        name: "description",
        content:
          "Wacky is a Full Stack Web Developer with 3+ years of experience building scalable enterprise web apps, HRIS, ERP, and management information systems.",
      },
      { property: "og:title", content: "Wacky — Full Stack Web Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Wacky — Full Stack Developer specializing in React, Next.js, Laravel, and enterprise web systems.",
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
    image: projBmis,
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
    image: projAsura,
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
    title: "GymSyn — Smart Gym Management System",
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
        <a href="#home" className="text-lg font-bold tracking-tight">
          <span className="text-primary">&lt;/&gt;</span> Wacky
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
    <section id="home" className="relative overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-accent-glow/20 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        {/* Left */}
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            I'm a Full Stack Developer
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="bg-gradient-to-r from-primary to-accent-glow bg-clip-text text-transparent">Wacky</span>
            <br />
            I build systems for the enterprise.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            A passionate Full Stack Web Developer with 3+ years of experience designing, developing, and maintaining
            scalable, secure, and user-centric web applications that streamline business operations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent-glow px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              View My Work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Technologies I work with
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-5">
              {TECH_STACK.slice(0, 7).map((t) => (
                <img
                  key={t.name}
                  src={t.logo}
                  alt={t.name}
                  className={`h-8 w-8 opacity-90 transition-opacity hover:opacity-100 ${t.invert ? "invert" : ""}`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right — big hero image (full, laptop visible) */}
        <div className="relative order-1 lg:order-2">
          <div className="relative mx-auto w-full max-w-[640px]">
            {/* Purple glow backdrop */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/50 via-accent-glow/40 to-primary/20 blur-3xl" />
            </div>
            {/* Dots pattern */}
            <div
              className="pointer-events-none absolute -right-2 top-4 h-24 w-24 opacity-60"
              style={{
                backgroundImage: "radial-gradient(circle, oklch(0.7 0.18 285) 1.5px, transparent 1.5px)",
                backgroundSize: "12px 12px",
              }}
            />
            {/* Full uncropped image */}
            <img
              src={heroAsset.url}
              alt="Wacky — Full Stack Web Developer"
              className="relative z-10 h-auto w-full object-contain drop-shadow-2xl"
            />
            {/* Floating code card */}
            <div className="absolute -bottom-2 -left-4 z-20 hidden max-w-[260px] rounded-xl border border-border bg-card/90 p-4 font-mono text-xs shadow-2xl backdrop-blur md:block">
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-4" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-2" />
                <span className="ml-2 text-[10px] text-muted-foreground">developer.js</span>
              </div>
              <pre className="text-[11px] leading-relaxed text-muted-foreground">
{`const dev = {
  name: "Wacky",
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

      {/* Stats bar */}
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="truncate text-xs text-muted-foreground">{s.label}</div>
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
    <section id="about" className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading eyebrow="About Me" title="Building software that solves real problems" />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card/40 p-8 backdrop-blur">
          <h3 className="text-2xl font-bold">Development Philosophy</h3>
          <p className="mt-4 text-muted-foreground">
            I'm passionate about building high-quality software that solves real-world business challenges. Every
            application I develop emphasizes clean architecture, maintainable code, security, scalability, and an
            intuitive user experience.
          </p>
          <p className="mt-4 text-muted-foreground">
            My goal is to create digital solutions that not only meet business requirements but also improve
            productivity, automate workflows, and deliver long-term value.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-card/40 to-accent-glow/10 p-8 backdrop-blur">
          <h3 className="text-2xl font-bold">What I Do Best</h3>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
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
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading eyebrow="My Skills" title="Technologies I Master" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s) => (
          <div
            key={s.name}
            className="rounded-xl border border-border bg-card/40 p-5 backdrop-blur transition-colors hover:border-primary/40"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-background/60">
                <img
                  src={s.logo}
                  alt={s.name}
                  className={`h-6 w-6 object-contain ${s.invert ? "invert" : ""}`}
                  loading="lazy"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="truncate font-semibold">{s.name}</p>
                  <span className="text-sm font-bold text-primary">{s.level}%</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent-glow"
                    style={{ width: `${s.level}%` }}
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
  // Duplicate for seamless marquee
  const items = [...TECH_STACK, ...TECH_STACK];
  return (
    <section className="border-y border-border/60 bg-card/20 py-12">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        My Tech Stack
      </p>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-14 pr-14 group-hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <div key={`${t.name}-${i}`} className="flex w-24 shrink-0 flex-col items-center gap-2">
              <img
                src={t.logo}
                alt={t.name}
                className={`h-14 w-14 object-contain opacity-80 transition-all hover:scale-110 hover:opacity-100 ${
                  t.invert ? "invert" : ""
                }`}
                loading="lazy"
              />
              <span className="text-xs text-muted-foreground">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [idx, setIdx] = useState(0);
  const total = PROJECTS.length;
  const go = (d: number) => setIdx((i) => (i + d + total) % total);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading eyebrow="Featured Projects" title="Some of My Recent Work" />

      <div className="relative">
        <div className="overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {PROJECTS.map((p) => {
              const Tag: "a" | "article" = p.url ? "a" : "article";
              const linkProps = p.url
                ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <div key={p.n} className="w-full shrink-0 px-1">
                  <Tag
                    {...linkProps}
                    className="group grid gap-0 overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur transition-all hover:border-primary/50 hover:shadow-glow lg:grid-cols-2"
                  >
                    <div className="relative overflow-hidden bg-background/40">
                      <img
                        src={p.image}
                        alt={p.title}
                        width={1280}
                        height={800}
                        loading="lazy"
                        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-full"
                      />
                      <div className="absolute right-4 top-4 rounded-full bg-background/70 px-3 py-1 text-xs font-bold text-primary backdrop-blur">
                        {p.n}
                      </div>
                    </div>
                    <div className="p-7">
                      <div className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent-glow text-primary-foreground shadow-glow">
                          <p.icon className="h-5 w-5" />
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                          Project {p.n}
                        </p>
                      </div>
                      <h3 className="mt-4 flex items-start gap-2 text-xl font-bold leading-tight sm:text-2xl">
                        <span>{p.title}</span>
                        {p.url && (
                          <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-primary opacity-70 transition-opacity group-hover:opacity-100" />
                        )}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                      <div className="mt-4">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Key Features</p>
                        <div className="flex flex-wrap gap-2">
                          {p.features.map((f) => (
                            <span
                              key={f}
                              className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 border-t border-border/60 pt-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary">Project Goal</p>
                        <p className="mt-1.5 text-sm text-muted-foreground">{p.goal}</p>
                        {p.url && (
                          <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                            Visit live site <ArrowRight className="h-3.5 w-3.5" />
                          </p>
                        )}
                      </div>
                    </div>
                  </Tag>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={() => go(-1)}
          aria-label="Previous project"
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary md:-left-5"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next project"
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary md:-right-5"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {PROJECTS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Go to project ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === idx ? "w-8 bg-primary" : "w-2 bg-muted hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading eyebrow="Core Expertise" title="What I Specialize In" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {EXPERTISE.map((e) => (
          <div
            key={e.title}
            className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary">
              <e.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">{e.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
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
        <div className="relative mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@wacky.dev"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent-glow px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            <Mail className="h-4 w-4" /> Get in Touch
          </a>
          <div className="flex items-center gap-3">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
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
        <p>© 2026 Wacky. All rights reserved.</p>
        <p>
          Built with <span className="text-primary">♥</span> by Wacky
        </p>
      </div>
    </footer>
  );
}
