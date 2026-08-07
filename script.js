// ---------------------------------------------------------------------------
// Data (equivalent to src/data/portfolioData.ts)
// ---------------------------------------------------------------------------

const HONORS = [
  { name: "Cum Laude", detail: "USTP, 2026" },
  { name: "DOST-SEI JLSS Scholar", detail: "Dept. of Science & Technology" },
  { name: "Dean's Lister", detail: "All semesters, 2022–2026" }
];

const CERTIFICATIONS = [
  {
    name: "Networking Basics",
    issuer: "Cisco",
    date: "Dec 2024",
    badgeImg: "assets/images/Cisco_NetworkingBasics_Badge.png"
  }
];

const PROJECTS = [
  {
    id: "dymon",
    title: "DyMoN",
    description: "Post-hoc anomaly detection module for temporal graphs tracking node embedding kinematics, built with PyTorch and NetworkX.",
    image: "assets/images/Dymon.png",
    githubUrl: "https://github.com/Ofen-Lovers/DyMoN"
  },
  {
    id: "dfa-nfa",
    title: "DFA-NFA Simulator",
    description: "Interactive browser-based finite automaton simulator using vanilla JS and Vis.js for graph visualization.",
    image: "assets/images/DFA-NFA Simulator.png",
    githubUrl: "https://github.com/Ofen-Lovers/DFA-and-NFA-Simulator"
  },
  {
    id: "blackjack-mips",
    title: "BlackJack in MIPS",
    description: "Single-player Blackjack game implemented in MIPS assembly language, demonstrating low-level programming concepts.",
    image: "assets/images/BlackJack-in-MIPS.png",
    githubUrl: "https://github.com/AstirisAQW/BlackJack-MIPS-Assembly"
  },
  {
    id: "edelweiss",
    title: "Edelweiss E-commerce",
    description: "Full-stack e-commerce website built with React, TypeScript, Supabase, and hosted on Vercel.",
    image: "assets/images/Edelweiss E-commerce.png",
    githubUrl: "https://github.com/Ofen-Lovers/Edelweiss"
  },
  {
    id: "hybrid-sort",
    title: "Hybrid Merge Sort",
    description: "Research paper proposing a Hybrid Merge Sort that integrates Bubble Sort for smaller sub-arrays to reduce recursive overhead.",
    image: "assets/images/Bubble Merge Hybrid Sort.png",
    githubUrl: "https://github.com/HarV1821/BubbleMergeHybridSort"
  },
  {
    id: "stardew-mod",
    title: "Stardew Valley Mod",
    description: "Custom NPC mod for Stardew Valley with unique backstory, dialogue, heart events, and marriage integration using C#.",
    image: "assets/images/Stardew Valley Mod.png",
    githubUrl: "https://github.com/Ofen-Lovers/Stardew-Valley-Mod"
  },
  {
    id: "forecasteam",
    title: "ForecaSteam",
    description: "ML pipeline predicting game popularity on Steam by analyzing metadata to estimate ownership distributions.",
    image: "assets/images/ForecaSteam.png",
    githubUrl: "https://github.com/Ofen-Lovers/ForecaSteam"
  },
  {
    id: "eportfolio",
    title: "This Portfolio",
    description: "Personal portfolio site built with HTML, Tailwind CSS, and TypeScript, hosted on GitHub Pages.",
    image: "assets/images/eportfolio.png",
    githubUrl: "https://github.com/AstirisAQW/eportfolio-reactjs"
  }
];

// ---------------------------------------------------------------------------
// Render helpers (equivalent to the JSX in About.tsx / Projects.tsx)
// ---------------------------------------------------------------------------

function renderHonors() {
  const container = document.getElementById('honors-list');
  container.innerHTML = HONORS.map((honor) => `
    <div class="honor-item">
      <span class="honor-name">${honor.name}</span>
      <span class="honor-detail">${honor.detail}</span>
    </div>
  `).join('');
}

function renderCertifications() {
  const container = document.getElementById('cert-list');
  container.innerHTML = CERTIFICATIONS.map((cert) => `
    <div class="cert-item">
      <img src="${cert.badgeImg}" alt="${cert.issuer} ${cert.name} badge" class="cert-badge" />
      <div class="cert-info">
        <span class="cert-name">${cert.name}</span>
        <span class="cert-issuer">${cert.issuer}</span>
        <span class="cert-date">${cert.date}</span>
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const container = document.getElementById('project-grid');
  container.innerHTML = PROJECTS.map((project) => `
    <div class="project-card">
      <img src="${project.image}" alt="${project.title} preview" class="project-image" />
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
      </div>
      <div>
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
          <span>GitHub Repo</span>
        </a>
      </div>
    </div>
  `).join('');
}

// ---------------------------------------------------------------------------
// Router (equivalent to src/hooks/useRouter.ts + App.tsx)
// ---------------------------------------------------------------------------

const PAGES = {
  '/': 'page-about',
  '/projects': 'page-projects',
  '/resume': 'page-resume'
};

function currentRoute() {
  const hash = window.location.hash.replace(/^#/, '');
  return PAGES[hash] ? hash : '/';
}

function navigate(to) {
  if (('#' + to) !== window.location.hash) {
    window.location.hash = to;
  } else {
    render();
  }
}

function render() {
  const route = currentRoute();

  // Show/hide pages
  Object.entries(PAGES).forEach(([path, pageId]) => {
    document.getElementById(pageId).hidden = path !== route;
  });

  // Update active nav link
  document.querySelectorAll('.nav-btn').forEach((link) => {
    link.classList.toggle('active', link.dataset.route === route);
  });

  window.scrollTo(0, 0);
}

function initRouter() {
  document.querySelectorAll('.nav-btn').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigate(link.dataset.route);
    });
  });

  window.addEventListener('hashchange', render);
  render();
}

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  renderHonors();
  renderCertifications();
  renderProjects();
  initRouter();
});