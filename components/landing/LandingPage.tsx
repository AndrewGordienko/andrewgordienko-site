"use client";

import { useMemo, useState } from "react";

import NavBar from "../NavBar";
import LandingHero from "./LandingHero";
import LandingProjects from "./LandingProjects";

import TimelineCentered from "../journey/TimelineCentered";
import { timeline } from "../journey/timeline";

type LandingView = "portfolio" | "journey" | "about";

function LandingAbout() {
  return (
    <section id="about" className="section" style={{ maxWidth: 720 }}>
      <div className="sectionHeader">
        <div>
          <div className="sectionTitle">About</div>
          <div className="sectionNote">A quick snapshot.</div>
        </div>
      </div>

      <p style={{ marginTop: 0, lineHeight: 1.8 }}>
        Hi, I’m Andrew. I’m a University of Toronto student studying
        Computational Cognitive Science, with a minor in Statistics and Computer
        Science.
      </p>

      <p style={{ lineHeight: 1.8 }}>
        I spend most of my time building software projects — usually
        infrastructure-style tools, simulation systems, and data-heavy
        workflows.
      </p>

      <p style={{ lineHeight: 1.8 }}>
        Outside of school and coding, I row and train regularly. I also enjoy
        coaching and working with people.
      </p>

      <div className="buttons" style={{ marginTop: 18 }}>
        <a className="btn btnPrimary" href="/contact">
          Contact
        </a>
        <a className="btn" href="/resume">
          Resume
        </a>
      </div>
    </section>
  );
}

export default function LandingPage() {
  const [view, setView] = useState<LandingView>("portfolio");
  const journeyItems = useMemo(() => timeline, []);

  return (
    <div className="landingZoomWrap">
      <div className="container">
        <NavBar />

        <main>
          <LandingHero
            onClickPortfolio={() => setView("portfolio")}
            onClickJourney={() => setView("journey")}
            onClickAbout={() => setView("about")}
          />

          {view === "portfolio" ? (
            <section id="portfolio" className="section">
              <div className="sectionHeader">
                <div>
                  <div className="sectionTitle">Portfolio</div>
                  <div className="sectionNote">
                    Products and systems I’ve built — from revenue-generating
                    companies to simulation + research work that shaped how I
                    build.
                  </div>
                </div>
              </div>

              <LandingProjects />
            </section>
          ) : view === "journey" ? (
            <section id="journey" className="section">
              <div className="sectionHeader">
                <div>
                  <div className="sectionTitle">Journey</div>
                  <div className="sectionNote">
                    The long arc — research → tooling → real systems.
                  </div>
                </div>
              </div>

              <TimelineCentered items={journeyItems} />
            </section>
          ) : (
            <LandingAbout />
          )}

          <footer className="footer">
            © {new Date().getFullYear()} Andrew Gordienko
          </footer>
        </main>
      </div>
    </div>
  );
}
