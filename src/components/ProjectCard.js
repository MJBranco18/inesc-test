import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectLogo from '../assets/enershare.png';
import GitHubIcon from '../assets/github-icon.png';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const ProjectCard = ({ project }) => {
    return (
      <div className="flex justify-between bg-white text-black font-mono mx-16 relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b from-dark-blue-2 to-light-blue-2 mb-12">
        <div className="flex-1 pl-4">
          <div className="flex flex-col items-start space-y-2 mb-2">
            <img src={ProjectLogo} alt={project.name} className="h-12 w-34" />
            <a href="https://inesctec.pt" className="text-dark-blue-2 text-md">
              Project Website
            </a>
          </div>
          <div className="text-gray-700 mb-4 text-start" style={{ maxWidth: '800px' }}>
            <p>{project.description}</p>
          </div>
          <div className="flex space-x-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-light-blue-2 text-white font-bold rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="ml-4 flex flex-col">
          <h3 className="font-semibold mb-3 mr-12">Top OSS Repositories</h3>
          {project.repositories.map(repo => (
            <div key={repo.name} className="flex items-center justify-between mb-3 text-def-grey">
              <img src={GitHubIcon} alt="GitHub" className="h-6 w-6" />
              <span>{repo.name}</span>
              <span className="flex items-center">
                <FontAwesomeIcon icon={faStarRegular} />
                <span className="ml-1">{repo.stars}</span>
              </span>
            </div>
          ))}
          <div className="self-end mt-1">
            <button className="text-dark-blue-2">See all repositories</button>
          </div>
        </div>
      </div>
    );
};
  
export default ProjectCard;
