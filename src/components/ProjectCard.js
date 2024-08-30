import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectLogo from '../assets/enershare.png';
import GitHubIcon from '../assets/github-icon.png';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faCodeBranch as faCodeBranchSolid } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ project }) => {
  const [imageSrc, setImageSrc] = useState(() => {
    try {
      return require(`../assets/${project.project_name}.png`);
    } catch (err) {
      return ProjectLogo;
    }
  });

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <>
      {/* Desktop Display */}
      <div className="hidden md:flex justify-between bg-white text-black font-mono relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b from-dark-blue-2 to-light-blue-2 mb-12 ml-8 mr-12 md:mx-16">
      <div className="flex-auto pl-4" style={{ width: "65%" }}>
        <div className="flex flex-col items-start space-y-2 mb-2">
          <img
            src={imageSrc}
            alt={project.project_name}
            className="h-12 w-auto"
            onError={(e) => (e.currentTarget.src = ProjectLogo)}
          />
          <a href="https://inesctec.pt" className="text-dark-blue-2 text-md">
            Project Website
          </a>
        </div>
        <div className="text-gray-700 mb-4 text-start" style={{ maxWidth: '800px' }}>
          <p>{project.project_description ? project.project_description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus luctus enim sed semper. Aliquam pellentesque sem in gravida aliquet.'}</p>
        </div>
        <div className="flex space-x-2">
          {(project.project_tags && project.project_tags.length > 0 ? project.project_tags : ["Energy Communities", "RES Forecasting", "Load Forecasting"]).map(tag => (
            <span key={tag} className="px-3 py-1 bg-light-blue-2 text-white font-bold rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex-none pl-4" style={{ width: "32%" }}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="font-semibold mb-3 text-start">Top OSS Repositories</h3>
            <div className="flex flex-col space-y-3 mb-3" style={{ maxHeight: 'calc(100% - 40px)', overflowY: 'auto' }}>
              {project.top_repositories && project.top_repositories.length > 0 ? (
                project.top_repositories.map(repo => (
                  <div key={repo.name} className="flex justify-between text-start">
                    <div className="flex items-start">
                      <img src={GitHubIcon} alt="GitHub" className="h-6 w-6 mr-2 mb-1" />
                      <a href={'https://github.com/INESCTEC/tsg-client'} className='text-def-grey' target="_blank" rel="noopener noreferrer">
                        {truncateText(repo.name, 30)}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faStarRegular} />
                      <span className="ml-1">{repo.stars}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center w-full">No repositories available.</p>
              )}
            </div>
          </div>
          <div className="mt-auto text-end">
            <a href="https://github.com/orgs/INESCTEC/repositories?q=topic%3Aenershare" className="text-dark-blue-2" target="_blank" rel="noopener noreferrer">
              <button className="text-dark-blue-2">See all repositories</button>
            </a>
          </div>
        </div>
      </div>
    </div>
      
      {/* Mobile Display */}
      <div className="block md:hidden bg-white text-black font-mono relative z-10 mb-8 mx-4 sm:mx-8">
        <div className="flex flex-col p-4 border border-gray-200 rounded-lg shadow-md">
          <div className="flex flex-col items-center mb-4">
            <img
              src={imageSrc}
              alt={project.project_name}
              className="h-12 w-auto"
              onError={(e) => (e.currentTarget.src = ProjectLogo)}
            />
            <div className="flex items-center space-x-2 mt-2 mb-2 text-sm">
              <div className='items-center'>
                {/* github log */}
                <img src={GitHubIcon} alt="GitHub" className="h-4 w-4" />
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faStarRegular} />
                <span className="ml-1">{project.total_stars}</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCodeBranchSolid} />
                <span className="ml-1">{project.total_repositories}</span>
              </div>
            </div>
            <a href="https://github.com/orgs/INESCTEC/repositories?q=topic%3Aenershare" className="text-dark-blue-2 mt-2 mb-4 text-xs" target="_blank" rel="noopener noreferrer">
              See all repositories
            </a>
            <div className="flex flex-wrap justify-center mb-4">
              {(project.project_tags && project.project_tags.length > 0 ? project.project_tags : ["Energy Communities", "RES Forecasting", "Load Forecasting"]).map(tag => (
                <span key={tag} className="px-2 py-1 bg-light-blue-2 text-white font-bold rounded-full text-xs mx-1">
                  {tag}
                </span>
              ))}
            </div>
            <a href="https://inesctec.pt" className="text-dark-blue-2 text-md">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
