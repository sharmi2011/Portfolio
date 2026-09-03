/* ======================================================
   DATA
   Add new items here — the layout renders automatically.
   ====================================================== */


/* ======================================================
   PROJECTS
   ====================================================== */

const projects = [
  {
    title: "🏥 Healthcare Cost & Patient Treatment Analysis",

    description:
      "Analyzed healthcare patient data to understand billing patterns, patient distribution, admission types, insurance-provider billing, and length of stay.",

    tools: ["Python", "SQL", "Excel", "Power BI"],

    image: "assets/Dashboard.png",

    projectLink:
      "https://github.com/sharmi2011/healthcare-cost-patient-treatment-analysis",

    githubLink:
      "https://github.com/sharmi2011/healthcare-cost-patient-treatment-analysis",

    status: "completed",
  },

  {
    title: "🛍️ E-Commerce Return & Profitability Analysis",

    description:
      "Analyzed e-commerce return patterns, return reasons, and profitability to identify high-return categories and provide business recommendations.",

    tools: ["Python", "SQL", "Power BI"],

    image: "assets/return_Dashboard.png",

    projectLink:
      "https://github.com/sharmi2011/e-commerce-return-profitability-analysis",

    githubLink:
      "https://github.com/sharmi2011/e-commerce-return-profitability-analysis",

    status: "completed",
  },

  {
    title: "📊 Healthcare Readmission Risk Analysis",

    description:
      "Analyzing hospital readmission patterns to identify high-risk patient groups, diagnosis categories, and factors associated with readmission using SQL and MySQL.",

    tools: ["SQL", "MySQL"],

    image: "",

    projectLink: "",

    githubLink: "",

    status: "coming-soon",
  },
];


/* ======================================================
   SKILLS
   ====================================================== */

const skillCategories = [
  {
    title: "Data Analysis",
    skills: [
      "SQL",
      "Excel",
      "Python",
      "Pandas",
      "NumPy",
    ],
  },

  {
    title: "Business Intelligence",
    skills: [
      "Power BI",
      "DAX",
      "Data Visualization",
      "Dashboard Development",
    ],
  },

  {
    title: "Data Preparation",
    skills: [
      "Data Cleaning",
      "Data Transformation",
      "Exploratory Data Analysis",
    ],
  },

  {
    title: "Databases",
    skills: [
      "MySQL",
      "Joins",
      "CTEs",
      "Window Functions",
    ],
  },
];


/* ======================================================
   CERTIFICATIONS
   ====================================================== */

const certifications = [
  {
    issuer: "Google",
    title: "Foundations: Data, Data, Everywhere",
  },

  {
    issuer: "Deloitte Australia",
    title: "Data Analytics Virtual Experience",
  },

  {
    issuer: "Shiash Info Solutions Private Limited",
    title: "Data Science Internship",
  },
];


/* ======================================================
   RENDER: PROJECTS
   ====================================================== */

function renderProjects() {
  const container = document.getElementById("projectsList");

  if (!container) return;

  container.innerHTML = projects
    .map((project) => {

      /* ---------- Tools ---------- */

      const toolsMarkup = project.tools
        .map(
          (tool) =>
            `<span class="project-tool-tag">${tool}</span>`
        )
        .join("");


      /* ---------- Status ---------- */

      const statusMarkup =
        project.status === "completed"
          ? `
            <div class="project-status-wrap">
              <span class="project-status completed">
                Completed
              </span>
            </div>
          `
          : `
            <div class="project-status-wrap">
              <span class="project-status coming-soon">
                Coming Soon
              </span>
            </div>
          `;


      /* ---------- Image ---------- */

      let imageMarkup;

      if (project.image) {

        imageMarkup = `
          <img
            src="${project.image}"
            alt="${project.title} dashboard preview"
            onerror="this.replaceWith(
              Object.assign(
                document.createElement('div'),
                {
                  className: 'project-image-placeholder',
                  innerHTML: '<span class=&quot;placeholder-icon&quot;>📊</span><span>Dashboard preview coming soon</span>'
                }
              )
            )"
          />
        `;

      } else {

        imageMarkup = `
          <div class="project-image-placeholder">
            <span class="placeholder-icon">📊</span>
            <span>Project currently in development</span>
          </div>
        `;
      }


      /* ---------- Buttons ---------- */

      let actionsMarkup;

      if (project.status === "completed") {

        actionsMarkup = `
          <div class="project-actions">

            <a
              href="${project.projectLink}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              View Project
            </a>

            <a
              href="${project.githubLink}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-secondary"
            >
              GitHub
            </a>

          </div>
        `;

      } else {

        actionsMarkup = `
          <p class="project-coming-text">
            Currently in development — project details will be added soon.
          </p>
        `;
      }


      /* ---------- Complete Card ---------- */

      return `
        <article class="project-card">

          <div class="project-image-wrap">
            ${imageMarkup}
          </div>

          <div class="project-body">

            ${statusMarkup}

            <h3 class="project-title">
              ${project.title}
            </h3>

            <p class="project-description">
              ${project.description}
            </p>

            <div class="project-tools">
              ${toolsMarkup}
            </div>

            ${actionsMarkup}

          </div>

        </article>
      `;
    })
    .join("");
}


/* ======================================================
   RENDER: SKILLS
   ====================================================== */

function renderSkills() {
  const container = document.getElementById("skillsGrid");

  if (!container) return;

  container.innerHTML = skillCategories
    .map((category) => {

      const tagsMarkup = category.skills
        .map(
          (skill) =>
            `<span class="skill-tag">${skill}</span>`
        )
        .join("");

      return `
        <div class="skill-card">

          <h3 class="skill-card-title">
            ${category.title}
          </h3>

          <div class="skill-tags">
            ${tagsMarkup}
          </div>

        </div>
      `;
    })
    .join("");
}


/* ======================================================
   RENDER: CERTIFICATIONS
   ====================================================== */

function renderCertifications() {
  const container = document.getElementById("certGrid");

  if (!container) return;

  container.innerHTML = certifications
    .map(
      (cert) => `
        <div class="cert-card">

          <p class="cert-issuer">
            ${cert.issuer}
          </p>

          <p class="cert-title">
            ${cert.title}
          </p>

        </div>
      `
    )
    .join("");
}


/* ======================================================
   NAVIGATION: MOBILE MENU
   ====================================================== */

function setupMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {

    const isOpen =
      navLinks.classList.toggle("open");

    hamburger.classList.toggle(
      "open",
      isOpen
    );

    hamburger.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });


  /* Close menu after selecting a section */

  navLinks
    .querySelectorAll(".nav-link")
    .forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        hamburger.classList.remove("open");

        hamburger.setAttribute(
          "aria-expanded",
          "false"
        );
      });
    });
}


/* ======================================================
   NAVIGATION: ACTIVE LINK ON SCROLL
   ====================================================== */

function setupActiveNavOnScroll() {

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );

  const navLinks =
    document.querySelectorAll(
      ".nav-link"
    );

  if (!sections.length || !navLinks.length) {
    return;
  }


  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          const id =
            entry.target.getAttribute("id");

          navLinks.forEach((link) => {

            link.classList.toggle(
              "active-link",
              link.getAttribute("href") === `#${id}`
            );

          });

        });

      },

      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );


  sections.forEach((section) => {
    observer.observe(section);
  });
}


/* ======================================================
   FOOTER: CURRENT YEAR
   ====================================================== */

function setupFooterYear() {

  const yearEl =
    document.getElementById("year");

  if (yearEl) {
    yearEl.textContent =
      new Date().getFullYear();
  }
}


/* ======================================================
   INITIALIZE
   ====================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderProjects();

    renderSkills();

    renderCertifications();

    setupMobileMenu();

    setupActiveNavOnScroll();

    setupFooterYear();

  }
);