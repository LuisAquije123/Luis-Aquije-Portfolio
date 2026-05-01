// app/page.tsx

import { Shield, ServerCog, Terminal } from "lucide-react";
import { Mail } from "lucide-react";
import Image from "next/image";


export default function Home() {

  const links = [
    {
      name: "GitHub",
      href: "https://github.com/LuisAquije123",
      icon: "/icons/github.svg",
      alt: "GitHub",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/luis-aquije-80507b234",
      icon: "/icons/linkedin.svg",
      alt: "LinkedIn",
    },
    {
      name: "Email",
      href: "mailto:luisaquijequiroga11@gmail.com",
      icon: null,
      alt: "Email",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* HERO */}
      <section className="flex min-h-screen flex-col justify-center px-8 py-16 md:px-20">
        <div className="max-w-5xl">
          <span className="mb-4 inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-400">
            DevSecOps Engineer
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
            Luis Aquije
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-emerald-400 md:text-3xl">
            Building secure software, scalable infrastructure and automated delivery
            pipelines.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
            Software developer specialized in DevSecOps, cloud infrastructure and
            secure software development. Focused on AWS environments, CI/CD
            automation, modern web applications with React, backend development with
            Python, IoT solutions with ESP32 and secure development practices across
            the software lifecycle. Also experienced building professional websites
            and business solutions with WordPress.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-emerald-500 px-6 py-3 font-medium text-black transition hover:bg-emerald-400"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Contact Me
            </a>
          </div>

          {/* TECH STACK */}

          <div className="mt-14 flex flex-wrap gap-3 text-sm text-zinc-300">
            {[
              "AWS",
              "CI/CD",
              "GitHub Actions",
              "Docker",
              "React",
              "Python",
              "DevSecOps",
              "Software Security",
              "IoT",
              "ESP32",
              "Wordpress",
              "Linux",
              "Automation",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-t border-zinc-900 px-8 py-20 md:px-20">
        <div className="max-w-6xl">
          <h2 className="text-3xl font-bold">Core Expertise</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
              <ServerCog className="mb-4 text-emerald-400" size={36} />

              <h3 className="text-xl font-semibold">DevSecOps</h3>

              <p className="mt-4 text-zinc-400">
                Building secure CI/CD pipelines, automating deployments and integrating
                security into every stage of the development lifecycle.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
              <Shield className="mb-4 text-emerald-400" size={36} />

              <h3 className="text-xl font-semibold">Secure Development</h3>

              <p className="mt-4 text-zinc-400">
                Applying secure coding practices, authentication systems and security
                testing to modern software applications.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
              <Terminal className="mb-4 text-emerald-400" size={36} />

              <h3 className="text-xl font-semibold">Cloud & Automation</h3>

              <p className="mt-4 text-zinc-400">
                Working with AWS infrastructure, automation scripts and scalable cloud
                solutions for modern applications.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
              <Terminal className="mb-4 text-emerald-400" size={36} />

              <h3 className="text-xl font-semibold">Web Solutions</h3>

              <p className="mt-4 text-zinc-400">
                Developing modern websites and business platforms using WordPress,
                React and scalable web technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-t border-zinc-900 px-8 py-20 md:px-20"
      >
        <div className="max-w-6xl">
          <h2 className="text-3xl font-bold">Featured Projects</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
              <h3 className="text-2xl font-semibold">
                Secure CI/CD Pipeline
              </h3>

              <p className="mt-4 text-zinc-400">
                Automated deployment pipeline using multiple branches,
                each with its own instance, GitHub Actions, and
                environment variables to avoid hardcoding credentials.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-sm">
                <span className="rounded bg-zinc-800 px-3 py-1">
                  GitHub Actions
                </span>
                <span className="rounded bg-zinc-800 px-3 py-1">Docker</span>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
              <h3 className="text-2xl font-semibold">
                Smart Irrigation System
              </h3>

              <p className="mt-4 text-zinc-400">
                IoT-based automated irrigation system built with ESP32 sensors and
                intelligent watering logic. Designed to optimize water consumption by
                monitoring environmental conditions and automating irrigation processes.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-sm">
                <span className="rounded bg-zinc-800 px-3 py-1">
                  ESP32
                </span>

                <span className="rounded bg-zinc-800 px-3 py-1">
                  IoT
                </span>

                <span className="rounded bg-zinc-800 px-3 py-1">
                  MQTT
                </span>

                <span className="rounded bg-zinc-800 px-3 py-1">
                  Automation
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
              <h3 className="text-2xl font-semibold">
                Business Websites with WordPress
              </h3>

              <p className="mt-4 text-zinc-400">
                Development of responsive and optimized business websites using
                WordPress, focused on performance, usability and professional design.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-sm">
                <span className="rounded bg-zinc-800 px-3 py-1">
                  WordPress
                </span>

                <span className="rounded bg-zinc-800 px-3 py-1">
                  SEO
                </span>

                <span className="rounded bg-zinc-800 px-3 py-1">
                  UI/UX
                </span>

                <span className="rounded bg-zinc-800 px-3 py-1">
                  Responsive Design
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-zinc-900 px-8 py-20 md:px-20"
      >
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold">Contact</h2>

          <p className="mt-4 text-zinc-400">
            Interested in collaborating or discussing DevOps & security?
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-zinc-800 px-5 py-3 transition hover:bg-zinc-900"
              >
                {link.icon ? (
                  <Image
                    src={link.icon}
                    alt={link.alt}
                    width={18}
                    height={18}
                    className="invert"
                  />
                ) : (
                  <Mail size={18} />
                )}

                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}