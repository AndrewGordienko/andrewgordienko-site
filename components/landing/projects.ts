export type Project = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  tag: string;
};

export const projects: Project[] = [
  {
    title: "OutageHub",
    subtitle: "CanadianPowerOutages.ca",
    description:
      "A real-time power outage map + API for Canada. Aggregation, normalization, and delivery of outage data with a focus on reliability and speed.",
    href: "https://canadianpoweroutages.ca",
    tag: "Product / Infrastructure",
  },
  {
    title: "Do Better Foundation",
    subtitle: "dobetterfoundation.com",
    description:
      "Launching soon. A research + tooling effort to find gaps in government policy and execution — starting with construction delays — using LLMs to surface patterns and root causes.",
    href: "https://dobetterfoundation.com",
    tag: "LLMs / Policy Research",
  },
  {
    title: "G&K Software",
    subtitle: "Modernization contracts",
    description:
      "I formally run Head of Sales. We help teams modernize legacy systems: service carve-outs, integration layers, data tooling, and testing support alongside larger programs.",
    href: "#contact",
    tag: "Modernization / Delivery",
  },
  {
    title: "Bike Rebalance Simulator",
    subtitle: "Toronto Bike Share optimization",
    description:
      "A simulation + optimization project to forecast station shortages and generate rebalance plans, including event-driven demand.",
    href: "#work",
    tag: "Simulation / Optimization",
  },
  {
    title: "F1 Simulator",
    subtitle: "In progress",
    description:
      "A racing sim playground to explore vehicle dynamics, overtakes, track geometry, and performance engineering workflows.",
    href: "#work",
    tag: "Simulation / Motorsports",
  },
  {
    title: "Chess Engine + Playground",
    subtitle: "In progress",
    description:
      "A chess engine + interactive project you can play with in-browser. Lightweight, fast iteration, clean analysis UI.",
    href: "#work",
    tag: "AI / Games",
  },
];
