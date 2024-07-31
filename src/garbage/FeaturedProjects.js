import React, { useEffect, useState } from 'react';
import { getFeaturedProjects } from './utils';
import { projects as projectData } from './data';

const FeaturedProjects = ({ org, areaName }) => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await getFeaturedProjects(org, areaName, projectData);
        setFeaturedProjects(fetchedProjects);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProjects();
  }, [org, areaName]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Featured Projects in {areaName}</h1>
      <ul>
        {featuredProjects.map((project) => (
          <li key={project.project_name}>
            {project.project_name} - Stars: {project.total_stars} - Repos: {project.total_repos}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedProjects;
