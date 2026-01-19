// timeline.ts

export type TimelineStage = "learning" | "tools" | "companies";

export type TimelineItem = {
  year: string;
  title: string;
  subtitle?: string;
  body: string;
  tags?: string[];
  links?: { label: string; href: string }[];
  stage?: TimelineStage;
};

export const timeline: TimelineItem[] = [
  {
    year: "2020–2022",
    title: "Deep dive into AI during COVID",
    subtitle: "Built fundamentals by implementing from scratch",
    body:
      "During lockdown I went all-in on reinforcement learning, search, and neuroevolution. I reimplemented core ideas end-to-end to understand what actually makes them work — not just how to use libraries. That foundation is still how I build today.",
    tags: ["RL", "Neuroevolution", "Search"],
    stage: "learning",
  },
  {
    year: "2020–2022",
    title: "Algorithms implemented",
    subtitle: "Core RL + planning toolkit",
    body:
      "Implemented NEAT, REINFORCE, DQN/Double/Dueling, DDPG, TD3, Minimax, MCTS, and early AlphaZero-style experiments — mostly as clean standalone codebases focused on clarity and iteration speed.",
    tags: ["NEAT", "DQN", "DDPG", "TD3", "MCTS", "Minimax"],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/AndrewGordienko/Reinforcement-Learning",
      },
    ],
    stage: "learning",
  },
  {
    year: "2022",
    title: "Artificial Intelligence Instructor",
    subtitle: "CODE-IT HACKS (Seasonal)",
    body:
      "Taught week-long AI lessons, breaking down complex concepts into hands-on projects and building stronger teaching + communication skills across very different learner backgrounds.",
    tags: ["Teaching", "AI", "Communication"],
    stage: "learning",
  },
  {
    year: "2023",
    title: "AP Research paper (Score: 5)",
    subtitle: "Hybrid locomotion learning with motion-captured priors",
    body:
      "Wrote and submitted a full research paper on reducing exploration time in locomotion. The approach: initialize a walking policy from motion-capture mimicry, then fine-tune with DDPG in simulation. It started stronger but plateaued — the key lesson was that observation design can be the real ceiling.",
    tags: ["Research", "Locomotion", "DDPG", "Representation"],
    links: [
      {
        label: "Project",
        href: "/projects/hybrid-locomotion",
      },
    ],
    stage: "learning",
  },
  {
    year: "2023",
    title: "JamHacks 2023 — SignWave (Winner)",
    subtitle: "Best Overall + Most Creative Use of GitHub",
    body:
      "Built SignWave: audio/text → transcript → ASL animation. Used Whisper for speech-to-text, MediaPipe hand landmarks, a word-to-coordinate dictionary, and a Three.js visualization layer. The repo hit 77+ stars and was copied enough times that we had to flag it more than once.",
    tags: ["Whisper", "MediaPipe", "Three.js", "Accessibility"],
    links: [
      { label: "GitHub Repo", href: "https://github.com/tan-ad/SignWave" },
      { label: "Devpost", href: "https://devpost.com/software/speechtosign" },
    ],
    stage: "learning",
  },
  {
    year: "2023–2024",
    title: "UofT / UTMIST — Virtual Creatures",
    subtitle: "Evolution + PPO + coordination work",
    body:
      "Presented work on evolving virtual creatures and training a universal locomotion policy, then explored coordination in a 2v2 soccer environment (Karl Sims-inspired evolution + PPO + an AlphaZero/MCTS-style coordination layer).",
    tags: ["MuJoCo", "PPO", "Evolution", "Coordination"],
    links: [
      {
        label: "Project",
        href: "/projects/virtual-creatures",
      },
    ],
    stage: "learning",
  },

  {
    year: "2024",
    title: "Freelance Python library developer",
    subtitle: "Turning messy workflows into repeatable tooling",
    body:
      "Started building small, made-to-order Python libraries after a few people asked for tools to solve specific workflows. Over a few months I shipped focused utilities with solid edge-case handling and clean interfaces — the kind of tooling that holds up under real usage.",
    tags: ["Python", "Libraries", "Automation", "Data"],
    links: [
      {
        label: "MeridianIQ (address parsing + lat/lon)",
        href: "https://github.com/AndrewGordienko/MeridianIQ",
      },
      {
        label: "imei-lookup (IMEI → phone model)",
        href: "https://github.com/AndrewGordienko/imei-lookup",
      },
      {
        label: "havoc-monkey (chaos network testing)",
        href: "https://github.com/AndrewGordienko/havoc-monkey",
      },
    ],
    stage: "tools",
  },
  {
    year: "2024–2025",
    title: "AskBGP",
    subtitle: "BGP replay + network analysis tooling",
    body:
      "Did consulting work helping build AskBGP: a tool for network professionals and researchers to analyze and replay BGP events using RIPE NCC data. It became a real public utility with a clean UI and multiple analysis workflows.",
    tags: ["Networking", "BGP", "RIPE", "Web"],
    links: [{ label: "Replay", href: "https://replay.bgphelp.com/" }],
    stage: "tools",
  },
  {
    year: "2024–2025",
    title: "Telecom LLM consulting",
    subtitle: "Turning internal data into usable insight",
    body:
      "Worked with a telecom team exploring how to connect internal data to an LLM layer for useful analysis and decision support. Researched agent-style approaches and built a Manus-like prototype to validate workflows and architecture patterns.",
    tags: ["LLMs", "Agents", "RAG", "Enterprise"],
    stage: "tools",
  },

  {
    year: "2024–Now",
    title: "OutageHub",
    subtitle: "CanadianPowerOutages.ca",
    body:
      "Started OutageHub solo, then brought in friends to scale it. The goal is a reliable real-time outage map and API for Canada. Current focus: data quality, coverage, and partnerships with stakeholders who can validate accuracy and amplify impact.",
    tags: ["Infrastructure", "Maps", "Data", "Partnerships"],
    links: [
      {
        label: "CanadianPowerOutages.ca",
        href: "https://canadianpoweroutages.ca",
      },
    ],
    stage: "companies",
  },
  {
    year: "2025–Now",
    title: "G&K Software",
    subtitle: "Modernization delivery to fund OutageHub",
    body:
      "Joined G&K Software to bring in modernization work and fund OutageHub without selling equity. Focused on outreach and sales while staying close to delivery: service carve-outs, integration layers, downstream data work, and testing support.",
    tags: ["Sales", "Modernization", "Delivery"],
    links: [{ label: "G&K Software", href: "https://gnk.software" }],
    stage: "companies",
  },
  {
    year: "2026–Now",
    title: "Do Better Foundation",
    subtitle: "Policy research + tooling",
    body:
      "Cofounded Do Better Foundation to investigate gaps in government execution and delivery. Starting with construction delays: pull evidence together across messy sources and surface repeatable root causes using applied AI workflows.",
    tags: ["Policy", "Research", "LLMs", "Execution"],
    links: [
      { label: "Do Better Foundation", href: "https://dobetterfoundation.com" },
    ],
    stage: "companies",
  },
  {
    year: "Next",
    title: "What’s next",
    subtitle: "Go where the work gets sharper",
    body:
      "Looking for the next environment where I can level up in simulation, infrastructure, and high-performance engineering — and keep building systems people actually rely on.",
    tags: ["Systems", "Simulation", "Engineering"],
    stage: "companies",
  },
];
