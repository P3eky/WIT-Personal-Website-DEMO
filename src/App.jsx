import { useState, useMemo, useEffect } from 'react';
import './index.css';

// <li> tags updated to be a list
const portfolioProjects = [
  {
    id: 1,
    title: "Lucky Prepper, LLC",
    desc: "Built and maintain an end-to-end e-commerce platform (luckyprepper.com), managing product procurement, inventory, and business administration as the Founding Owner & Operator.",
    tags: ["E-commerce", "Web Development", "Business"]
  },
  {
    id: 2,
    title: "Interactive Storybook",
    desc: "Engineered an interactive children's storybook using custom electronics and 3D solid modeling, earning 1st Place at the NJ TSA State Conference and 5th Place Nationally.",
    tags: ["Hardware", "CAD", "Soldering", "C++"]
  },
  {
    id: 3,
    title: "TiE NJ AI Hackathon",
    desc: "Applied artificial intelligence and machine learning fundamentals to develop a competitive technical project, securing 3rd Place overall at the 2026 New Jersey AI Hackathon.",
    tags: ["Python", "AI/ML", "Hackathons"]
  },
  {
    id: 4,
    title: "STEM Mentorship & Audio Systems",
    desc: "Co-President of the Manalapan TSA chapter and Leadership Intern for Camp Invention, guiding students through engineering challenges alongside university-level study in digital audio.",
    tags: ["Digital Audio", "Leadership", "STEM Education"]
  }
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState(null);

  const uniqueTags = useMemo(() => {
    const tags = new Set();
    portfolioProjects.forEach(project => { 
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  //Dynamically change the site name
  useEffect(() => {
    if (activeFilter) {
      document.title = `Joseph Cardillo - ${activeFilter}`;
    } else {
      document.title = `Joseph Cardillo`;
    }
  }, [activeFilter]);

  const displayedProjects = activeFilter 
    ? portfolioProjects.filter(project => project.tags.includes(activeFilter))
    : portfolioProjects;

  return (
    <>
      <header>
        {/* THE JOSEPH CARDILLO WEBSITE */}
      </header>

      <main>
        <section id="about">
          <h1>Joseph Cardillo</h1>
          <p>ABOUT ME...</p>
        </section>

        <section id="projects">
          <h2>Projects & Experience</h2>
          
          <div id="filter-buttons">
            {uniqueTags.map(tag => (
              <button 
                key={tag}
                className={activeFilter === tag ? 'active' : ''}
                onClick={() => setActiveFilter(activeFilter === tag ? null : tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <ul id="project-list">
            {displayedProjects.map(project => (
              <li key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact">
          <h2>Get in Touch</h2>
          <a href="mailto:joey.cardillo37@gmail.com">joey.cardillo37@gmail.com</a>
        </section>
      </main>

      <footer>
        {/* TBD */}
      </footer>
    </>
  );
}