import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import image from '../assets/testimage.png';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);
  const [sortByStars, setSortByStars] = useState(null); // null, 'asc', 'desc'
  const [sortByRepos, setSortByRepos] = useState(null); // null, 'asc', 'desc'

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          console.error('Data is not an array:', data);
        }
      })
      .catch(error => {
        console.error('Error loading the data:', error);
        setProjects([]);
      });
  }, []);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;

  const filteredProjects = projects
    .filter(project =>
      (searchTerm === '' || project.project_name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (activeFilters.length === 0 || activeFilters.every(filter => project.project_tags.includes(filter)))
    )
    .sort((a, b) => {
      if (sortByStars) {
        return sortByStars === 'asc' ? a.total_stars - b.total_stars : b.total_stars - a.total_stars;
      }
      if (sortByRepos) {
        return sortByRepos === 'asc' ? a.total_repositories - b.total_repositories : b.total_repositories - a.total_repositories;
      }
      return 0; // No sorting if neither is active
    });

  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    if (category === 'All') {
      setActiveFilters([]);
    } else {
      setActiveFilters([category]);
    }
    setCurrentPage(1);
  };

  const handleSortByStars = () => {
    if (sortByStars === 'asc') {
      setSortByStars('desc');
    } else {
      setSortByStars('asc');
    }
    setSortByRepos(null);
  };

  const handleSortByRepos = () => {
    if (sortByRepos === 'asc') {
      setSortByRepos('desc');
    } else {
      setSortByRepos('asc');
    }
    setSortByStars(null); 
  };

  return (
    <>
      <div className="min-h-screen bg-white font-mono">
        <img src={image} alt="INESC TEC" className="absolute top-0 left-0 w-full h-auto z-0" />
        <div className='relative mt-16'>
          <div className='mt-6 mb-12 min-h-screen bg-white z-10'>
            <Header
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              onCategoryChange={handleCategoryChange}
              onSortByStars={handleSortByStars}
              onSortByRepos={handleSortByRepos}
            />
            <div className='mt-4 mb-4 pb-2 pt-2'>
              {currentProjects.length > 0 ? (
                currentProjects.map((project, index) => (
                  <React.Fragment key={index}>
                    <ProjectCard project={project} />
                  </React.Fragment>
                ))
              ) : (
                <p>No projects found.</p>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
