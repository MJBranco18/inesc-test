import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

const projectsData = [
  {
    name: "Enershare",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus luctus enim sed semper. Aliquam pellentesque sem in gravida aliquet.",
    logoUrl: "/path/to/enershare-logo.png",
    tags: ["Energy Communities", "RES Forecasting", "Load Forecasting"],
    repositories: [
      { name: "tsg-client", stars: 15 },
      { name: "tsg-client", stars: 15 },
      { name: "tsg-client", stars: 15 }
    ]
  },
  {
    name: "Enershare",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus luctus enim sed semper. Aliquam pellentesque sem in gravida aliquet.",
    logoUrl: "/path/to/enershare-logo.png",
    tags: ["Energy Communities", "RES Forecasting", "Load Forecasting"],
    repositories: [
      { name: "tsg-client", stars: 15 },
      { name: "tsg-client", stars: 15 },
      { name: "tsg-client", stars: 15 }
    ]
  },
  {
    name: "Enershare",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus luctus enim sed semper. Aliquam pellentesque sem in gravida aliquet.",
    logoUrl: "/path/to/enershare-logo.png",
    tags: ["Energy Communities", "RES Forecasting", "Load Forecasting"],
    repositories: [
      { name: "tsg-client", stars: 15 },
      { name: "tsg-client", stars: 15 },
      { name: "tsg-client", stars: 15 }
    ]
  },
  {
    name: "Enershare",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus luctus enim sed semper. Aliquam pellentesque sem in gravida aliquet.",
    logoUrl: "/path/to/enershare-logo.png",
    tags: ["Energy Communities", "RES Forecasting", "Load Forecasting"],
    repositories: [
      { name: "tsg-client", stars: 15 },
      { name: "tsg-client", stars: 15 },
      { name: "tsg-client", stars: 15 }
    ]
  }
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className='mt-6 mb-12'>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
