// lib/data.ts

export const personalInfo = {
  name: "Irfan Hussain",
  role: "Incoming Security Research Intern @ Microsoft (MSTIC)",
  email: "iru.hussain4@gmail.com",
  linkedin: "https://www.linkedin.com/in/irfan-hussain045",
  github: "https://github.com/PKingu", 
  about: "Incoming Security Research Intern at Microsoft (MSTIC) and Computer Science MSc student at King's College London. Specialising in threat intelligence and SOC automation. Recently saved BT Group £40k/year by automating alert triage workflows.",
};

export const skills = [
  "Python", "C++", "Java", "Scala", "Django", "HTML", "CSS", "Tailwind", "JavaScript", "Typescript", "Next.js",
 "Git", "SQL", "KQL", "SPL", "Power Automate (WDL)", "Wireshark", "Nmap", 
  "Suricata", "Splunk", "Microsoft Sentinel", "Microsoft Defender", "CrowdStrike",
  "QRadar", "XSOAR", "Linux", "OpenAI API", "GROQ API", "GitHub"
];

export const experiences = [
  {
    role: "Incoming Security Research Intern",
    company: "Microsoft (MSTIC)",
    period: "Summer 2025",
    description: "Joining the Microsoft Threat Intelligence Centre (MSTIC). I will be working at the forefront of tracking global threat actors and researching new ways to protect the digital ecosystem.",
    current: true,
  },
  {
    role: "Security Operations Specialist",
    company: "BT Group",
    period: "Jun 2025 – Aug 2025",
    description: "Worked within the SOC to automate workflows and improve detection. Took initiative to develop a triage and investigation automation system using Microsoft Power Automate, HTML/CSS, Falcon Sandbox API, and OpenAI. Reduced manual investigation time from 60 mins to ~2 mins, saving 1,000+ analyst hours per year (~£40,000).",
    current: false,
  },
  {
    role: "Founder & President",
    company: "Advanced Coding Club",
    period: "Oct 2023 – Apr 2024",
    description: "Founded and led a technical club at Trinity School Croydon. Designed a structured weekly curriculum featuring tiered difficulty levels for competitive programming. Mentored peers in advanced algorithmic design.",
    current: false,
  },
  {
    role: "Cybersecurity Auditing Shadow",
    company: "BNY Mellon",
    period: "Aug 2022",
    description: "Assessed risk management and mitigation techniques, including honeypots and intrusion detection systems, under the Head of Cybersecurity Auditing. Observed audit meetings for new vulnerability detection software, reviewing processes and questioning development teams to understand real-world auditing workflows.",
    current: false,
  },
];

export const education = [
  {
    school: "King's College London",
    degree: "MSc Computer Science",
    period: "2024 – 2028",
    grade: "Predicted First Class",
    details: [
      "ISACA Digital Trust Scholarship (2025) - Awarded for excellence in cybersecurity.",
      "Focusing on secure software engineering and cyber security."
    ]
  },
  {
    school: "Trinity School, Croydon",
    degree: "A Levels & GCSEs",
    period: "2017 – 2024",
    grade: "A* A* A* A",
    details: [
      "A Levels: Further Maths (A*), Computer Science (A*), Maths (A*), Physics (A).",
      "GCSEs: 8x Grade 9s (including Further Maths), 3x Grade 8s."
    ]
  }
];

export const certifications = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "Oct 2025",
    id: "Credential ID: Verified",
    url: "/security-plus.pdf" // make sure filenames match what's in your public folder
  },
  {
    name: "Google Cybersecurity Professional",
    issuer: "Google",
    date: "Sep 2025",
    id: "Includes Python, Linux, SQL, SIEM",
    url: "/google-cyber.pdf"
  },
  {
    name: "AWS Security Best Practices",
    issuer: "Amazon Web Services",
    date: "Dec 2025",
    id: "Computing & Cloud Security",
    url: "/aws-security.pdf"
  }
];

// detailed project data for the dynamic pages.
export const projects = [
  {
    slug: "soc-automation",
    title: "SOC Triage & Investigation Automation",
    shortDesc: "Engineered an AI-driven system reducing incident handling time from 60 minutes to 2 minutes.",
    tech: ["Power Automate", "OpenAI API", "WDL", "HTML/CSS", "Falcon Sandbox API"],
    impact: "£40k/year Saved (1,000+ Hours)",
    content: `
      <h3 class="text-xl font-bold text-white mb-4">The Challenge: Investigation Fatigue</h3>
      <p class="mb-6">At BT Group, I identified that the manual triage process, of extracting alert data, formatting tables, scanning URLs, and drafting reports, consumed 30–60 minutes per incident. This manual overhead hindered the SOC's ability to respond to high-volume threats effectively.</p>
      
      <h3 class="text-xl font-bold text-white mb-4">The Solution: End-to-End Automation</h3>
      <p class="mb-4">I developed a custom investigation lifecycle using <strong>Microsoft Power Automate</strong> that integrates raw SIEM data with real-time threat intelligence and generative AI.</p>
      
      <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-400">
        <li><strong>Data Transformation:</strong> Used WDL (Workflow Definition Language) with HTML and CSS to reformat raw Splunk CSV alert data into high-readability tables for analyst review.</li>
        <li><strong>Automated Sandbox Triage:</strong> Integrated the <strong>Falcon Sandbox API</strong> to automatically scan suspicious URLs. The system only alerts analysts if activity passes a pre-defined risk threshold.</li>
        <li><strong>AI-Driven Incident Reporting:</strong> Implemented <strong>OpenAI</strong> to synthesise public incident data into structured triage reports. This shifted the analyst's role from manual data entry to "investigative verification", allowing for a 96% reduction in handling time.</li>
      </ul>

      <h3 class="text-xl font-bold text-white mb-4">Operational Impact</h3>
      <p>Deployed across 8 core Splunk alerts, the system is projected to save over 1,000 analyst hours annually, representing approximately £40,000 in operational costs. Additionally, this project will be upscaled by the BT SOC across many other detections.</p>
    `
  },
  {
    slug: "mitre-detection",
    title: "Detection Engineering & Playbook Standardisation",
    shortDesc: "Expanded SIEM coverage mapped to MITRE ATT&CK and developed standardised SOC playbooks.",
    tech: ["Splunk (SPL)", "Microsoft Sentinel (KQL)", "MITRE ATT&CK", "XSOAR", "CrowdStrike"],
    impact: "Expanded Threat Coverage",
    content: `
      <h3 class="text-xl font-bold text-white mb-4">Closing Critical Visibility Gaps</h3>
      <p class="mb-6">I took the lead on a significant project to uplift BT's detection capabilities by engineering 11 new Splunk alerts specifically mapped to the <strong>MITRE ATT&CK</strong> framework to ensure comprehensive threat coverage.</p>
      
      <h3 class="text-xl font-bold text-white mb-4">Technical Implementation</h3>
      <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-400">
        <li><strong>Query Optimisation:</strong> Developed complex SPL queries from scratch, performing rigorous stress testing to evaluate server load, alert frequency, and the accuracy of custom RegEx files.</li>
        <li><strong>SIEM Multi-Platform Handling:</strong> Became the only intern to resolve 50+ alerts across Microsoft Sentinel, Splunk, QRadar, XSOAR, and CrowdStrike, gaining a broad understanding of cross-platform monitoring.</li>
        <li><strong>Playbook Standardisation:</strong> Authored 10+ comprehensive playbooks in <strong>Sentinel (using KQL)</strong> and <strong>Splunk (using SPL)</strong>. These step-by-step guides turned one-off investigative work into structured templates that analysts could reuse, ensuring high-quality, repeatable processes across the SOC.</li>
      </ul>

      <h3 class="text-xl font-bold text-white mb-4">Impact</h3>
      <p>My work improved both threat coverage and consistency in workflows. These detections and standardised playbooks continue to provide value to the SOC team long after my internship by saving time and ensuring accuracy during incident response.</p>
    `
  },
  {
    slug: "scattered-spider",
    title: "Scattered Spider Visual Intelligence",
    shortDesc: "Real-time Splunk dashboard tracking TTPs of the UNC3944 threat group.",
    tech: ["Splunk", "SPL", "Threat Intel", "RegEx"],
    impact: "Proactive Incident Prevention",
    content: `
      <h3 class="text-xl font-bold text-white mb-4">Tracking UNC3944</h3>
      <p class="mb-6">I led an initiative to monitor the <strong>Scattered Spider (UNC3944)</strong> threat group by analysing their specific TTPs, such as the exploitation of M365 tenants for persistence and the use of legitimate RMM tools, through <strong>MITRE ATT&CK</strong>.</p>
      
      <h3 class="text-xl font-bold text-white mb-4">Engineering the Dashboard</h3>
      <p class="mb-4">I translated this intelligence into dedicated SPL queries to detect and visualise activities linked to these specific behaviours.</p>
      
      <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-400">
        <li>Visualised data on 7 key attack behaviours in real-time.</li>
        <li>Set thresholds carefully to reduce false positives and improve usability for analysts.</li>
        <li>Consolidated findings into a practical Splunk dashboard, enabling proactive interception of compromise patterns rather than relying on unreliable indicators.</li>
      </ul>
    `
  },
  {
    slug: "recipify",
    title: "Recipify: AI-Enhanced Full Stack Platform",
    shortDesc: "Scalable community recipe platform featuring LLaMA-powered generation and regex scaling.",
    tech: ["Django", "Python", "SQL", "Groq API", "RegEx", "JavaScript"],
    impact: "Scalable Community Ecosystem",
    content: `
      <h3 class="text-xl font-bold text-white mb-4">Intelligent Culinary Management</h3>
      <p class="mb-6">Developed a community platform using Django as part of a team of five, focusing on the intersection of social networking and AI-driven automation.</p>
      
      <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-400">
        <li><strong>AI Auto-Fill:</strong> Integrated the <strong>Groq API (LLaMA)</strong> to build an auto-fill feature that converts ingredient lists into complete, structured recipes.</li>
        <li><strong>Dynamic Scaling:</strong> Built an ingredient management system using <strong>Regular Expressions</strong> to enforce strict formatting, enabling real-time rescaling of quantities based on serving size.</li>
        <li><strong>Social Ecosystem:</strong> Implemented a follower-based social system with personalized profiles, <strong>Gravatar</strong> integration, and full CRUD operations.</li>
      </ul>
    `
  },
  {
    slug: "mega-like",
    title: "Mega-Like: Custom 2D Physics Engine",
    shortDesc: "A high-performance action platformer built from scratch using Python and NumPy.",
    tech: ["Python", "Pygame", "NumPy", "Maths"],
    impact: "Real-time Simulation Optimisation",
    content: `
      <h3 class="text-xl font-bold text-white mb-4">Game Architecture From Scratch</h3>
      <p class="mb-6">Rather than using a pre-built engine, I manually implemented all core systems in <strong>Python/Pygame</strong> to master real-time simulation architecture and low-level physics.</p>
      
      <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-400">
        <li><strong>Procedural Audio:</strong> Designed a custom audio engine using <strong>NumPy</strong> to synthesise sine and sawtooth waves with exponential decay envelopes.</li>
        <li><strong>Physics & AI:</strong> Implemented a vector-based movement system featuring gravity and variable jump heights. Developed an object-oriented AI hierarchy for enemy patrol patterns and multi-phase boss encounters.</li>
        <li><strong>Performance:</strong> Optimised mathematical cycles using NumPy to handle sprite interactions and camera-locking logic while maintaining a stable 60 FPS.</li>
      </ul>
    `
  },
  {
    slug: "pollution-solution",
    title: "London Air Quality Monitoring System",
    shortDesc: "JavaFX application visualising real-time pollution data via the OpenAQ API.",
    tech: ["Java", "JavaFX", "JUnit", "JSON API", "External CSS"],
    impact: "Environmental Data Visualisation",
    content: `
      <h3 class="text-xl font-bold text-white mb-4">Geospatial Data Analytics</h3>
      <p class="mb-6">Built a comprehensive <strong>JavaFX</strong> application to analyse and visualise air quality across London, integrating historical datasets with live sensor telemetry.</p>
      
      <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-400">
        <li><strong>API Integration:</strong> Managed complex JSON parsing for the <strong>OpenAQ API</strong>, converting raw responses into interactive LocationData objects for over 100 sensors.</li>
        <li><strong>Coordinate Mapping:</strong> Implemented geospatial conversion logic to translate Easting and Northing values into pixel space for a custom interactive map.</li>
        <li><strong>UX/UI:</strong> Designed a dual-theme interface with dynamic filtering by pollutant severity (NO2, PM10, PM2.5) and a full <strong>JUnit testing</strong>  suite to ensure data accuracy.</li>
      </ul>
    `
  },
  {
    slug: "biosims",
    title: "BioSims: Multi-Agent Ecosystem Simulator",
    shortDesc: "Java-based biological simulation modelling predator-prey dynamics and disease.",
    tech: ["Java", "Swing", "Multithreading", "OOP"],
    impact: "Complex System Modelling",
    content: `
      <h3 class="text-xl font-bold text-white mb-4">Ecosystem Stability Modelling</h3>
      <p class="mb-6">Designed a multi-agent Java simulation to model the biological dynamics of a five-species ecosystem under environmental pressures.</p>
      
      <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-400">
        <li><strong>Agent Logic:</strong> Implemented distinct behavioural profiles using polymorphism, featuring competitive feeding and sex-based breeding.</li>
        <li><strong>Dynamic Environment:</strong> Built a 24-hour cycle and weather system that dynamically modified agent attributes (e.g., rainfall affecting litter size).</li>
        <li><strong>Pathology:</strong> Implemented a spatial-adjacency disease transmission model to visualise how pathogens disrupt long-term predator-prey balance.</li>
      </ul>
    `
  },
  {
    slug: "fluid-dynamics",
    title: "Lattice-Boltzmann Fluid Simulator",
    shortDesc: "Computational physics simulation of fluid flow and vortex streets using Python.",
    tech: ["Python", "NumPy", "SymPy", "Matplotlib"],
    impact: "Advanced Mathematical Simulation",
    content: `
      <h3 class="text-xl font-bold text-white mb-4">Computational Fluid Dynamics</h3>
      <p class="mb-6">Developed a high-performance simulator based on the <strong>Lattice-Boltzmann Method (LBM)</strong> to demonstrate emergent fluid behaviour from microscopic particle interactions.</p>
      
      <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-400">
        <li><strong>Math Foundations:</strong> Derived and implemented particle distribution functions using multivariable calculus, ensuring mass and momentum conservation.</li>
        <li><strong>Vortex streets:</strong> Successfully visualised <strong>Kármán vortex streets</strong> and transitions between laminar and turbulent flow around cylindrical obstacles.</li>
        <li><strong>Optimisation:</strong> Structured update loops to produce smooth, real-time patterns reflecting the non-linear nature of fluid dynamics.</li>
      </ul>
    `
  },
  {
    slug: "bicep-curl-ai",
    title: "AI-Powered Computer Vision Fitness Assistant",
    shortDesc: "Real-time pose estimation and biomechanical form correction for strength training.",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    impact: "Biomechanical Feedback System",
    content: `
      <h3 class="text-xl font-bold text-white mb-4">Pose Estimation & Form Correction</h3>
      <p class="mb-6">Developed an AI fitness application delivering real-time analytics for bicep curls, focused on biomechanical accuracy for professional training.</p>
      
      <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-400">
        <li><strong>Landmark Tracking:</strong> Used <strong>MediaPipe</strong> and <strong>OpenCV</strong> to track skeletal landmarks and calculate precise joint angles.</li>
        <li><strong>Biomechanical Monitoring:</strong> Built a detection system for horizontal elbow-to-wrist displacement, providing instant visual overlays and audio alerts for form deviations.</li>
        <li><strong>Analytics:</strong> Used <strong>NumPy-based linear regression</strong> to calculate training intensity gradients and generated <strong>Matplotlib</strong> rep-speed visualisations.</li>
      </ul>
    `
  }
];