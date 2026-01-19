import NavBar from "../../components/NavBar";

type BlogItem = {
  title: string;
  subtitle: string;
  tag: string;
  desc: string;
  href: string;
};

export default function BlogPage() {
  const posts: BlogItem[] = [
    {
      title: "OutageHub",
      subtitle: "CanadianPowerOutages.ca",
      tag: "Product / Infrastructure",
      desc:
        "How I built a real-time outage map + API for Canada, how data aggregation works, and what reliability actually means in production.",
      href: "/blog/outagehub",
    },
    {
      title: "G&K Software",
      subtitle: "Modernization contracts",
      tag: "Modernization / Delivery",
      desc:
        "Modernization work in the real world: service carve-outs, integration layers, data tooling, testing capacity, and delivery workflows.",
      href: "/blog/gnk",
    },
    {
      title: "Do Better Foundation",
      subtitle: "dobetterfoundation.com",
      tag: "LLMs / Policy Research",
      desc:
        "Using LLMs to surface patterns in government execution gaps — starting with construction delays — and building tooling around it.",
      href: "/blog/dobetterfoundation",
    },
    {
      title: "Bike Rebalance Simulator",
      subtitle: "Toronto Bike Share optimization",
      tag: "Simulation / Optimization",
      desc:
        "Forecasting station shortages, modeling demand, and generating rebalancing plans — including event-driven demand spikes.",
      href: "/blog/bikeshare",
    },
    {
      title: "F1 Simulator",
      subtitle: "In progress",
      tag: "Simulation / Motorsports",
      desc:
        "A racing sim playground: vehicle dynamics, track geometry, overtaking logic, and performance engineering workflows.",
      href: "/blog/f1-sim",
    },
    {
      title: "Chess Engine + Playground",
      subtitle: "In progress",
      tag: "AI / Games",
      desc:
        "A lightweight chess engine + analysis UI you can play with. Built for fast iteration and clean evaluation.",
      href: "/blog/chess",
    },
    {
      title: "Hybrid Locomotion Research",
      subtitle: "NEAT → DDPG transfer learning",
      tag: "Research / RL",
      desc:
        "My AP Research project: mimic human movement with NEAT, then generalize using DDPG. What worked, what plateaued, and why.",
      href: "/blog/hybrid-locomotion",
    },
    {
      title: "Virtual Creatures (UTMIST)",
      subtitle: "Evolution + PPO + coordination",
      tag: "Research / Simulation",
      desc:
        "Work on evolving virtual creatures, training a universal walking policy, and exploring multi-agent coordination in simulation.",
      href: "/blog/virtual-creatures",
    },
  ];

  return (
    <div className="container">
      <NavBar />

      <main className="hero">
        <div className="kicker">BLOG</div>
        <h1 className="h1">Notes, writeups, and builds.</h1>
        <p className="sub">
          Each portfolio project has a short article behind it — what I built,
          why it matters, and how it works.
        </p>

        <section className="section">
          <div className="grid">
            {posts.map((p) => (
              <a key={p.href} href={p.href} className="card">
                <div className="cardTop">
                  <div>
                    <div className="cardTitle">{p.title}</div>
                    <div className="cardSub">{p.subtitle}</div>
                  </div>
                  <div className="pill">{p.tag}</div>
                </div>

                <p className="cardDesc">{p.desc}</p>

                <div className="cardLink">Read →</div>
              </a>
            ))}
          </div>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} Andrew Gordienko
        </footer>
      </main>
    </div>
  );
}
