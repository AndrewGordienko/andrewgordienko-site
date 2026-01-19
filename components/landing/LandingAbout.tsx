export default function LandingAbout() {
  return (
    <section id="about" className="section">
      <div className="sectionHeader">
        <div className="sectionTitle">About</div>
        <div className="sectionNote">A quick snapshot.</div>
      </div>

      <div className="twoCol">
        <div className="aboutBlock">
          <div className="miniTitle">What I do</div>
          <p className="bodyText">
            I like high-leverage work: building infrastructure, shipping
            data-heavy products, and doing applied research where results become
            usable tools.
          </p>
        </div>

        <div className="aboutBlock" id="contact">
          <div className="miniTitle">Contact</div>
          <p className="bodyText">
            If you want to talk about systems, data products, modernization, or
            simulation work — reach out.
          </p>

          <div className="buttons">
            <a className="btn btnPrimary" href="mailto:andrew@example.com">
              Email
            </a>
            <a className="btn" href="https://www.linkedin.com">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
