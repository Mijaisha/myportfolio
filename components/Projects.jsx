import React from "react";

const Projects = () => {
  // Function to handle button clicks
  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {/* Project One */}
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src=".\assets\Screenshot 2025-01-27 202540.png"
                alt="Project 1"
                className="project-img"
              />
              
              <p>an e-commerse website</p>
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              
            </div>
          </div>

          {/* Project Two */}
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src=".\assets\Screenshot 2025-01-27 205240.png"
                alt="Project 2"
                className="project-img"
              />
              <p>a simple calculator</p>
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              
            </div>
          </div>
          {/* Project three */}
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src=".\assets\Screenshot 2025-01-27 210447.png"
                alt="Project 3"
                className="project-img"
              />
              
              <p>travel places</p>
            </div>
            <h2 className="experience-sub-title project-title">Project Three</h2>
            <div className="btn-container">
              
            </div>
          </div>
        </div>
      </div>

      {/* Arrow navigation */}
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => handleClick('./#contact')}
      />
    </section>
  );
};

export default Projects;
