import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

const axiosInstance = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    // Authorization: `token ${GITHUB_TOKEN}`,
    Accept: 'application/vnd.github.mercy-preview+json'
  },
});

export const fetchOrgRepos = async (org) => {
  const url = `/orgs/${org}/repos`;
  const response = await axiosInstance.get(url);
  return response.data;
};

export const fetchRepoDetails = async (owner, repo) => {
  const url = `/repos/${owner}/${repo}`;
  const response = await axiosInstance.get(url);
  return response.data;
};

export const getFeaturedProjects = async (org, areaName, projects) => {
  const repos = await fetchOrgRepos(org);
  const areaProjects = projects.filter(project => project.project_area === areaName);

  console.log(`Repositories for ${org}:`, repos);
  console.log(`Projects for area ${areaName}:`, areaProjects);

  const projectStars = await Promise.all(areaProjects.map(async project => {
    let totalStars = 0;
    let totalRepos = 0;

    for (const repo of repos) {
      const repoDetails = await fetchRepoDetails(org, repo.name);
      console.log(`Details for repo ${repo.name}:`, repoDetails);

      if (repoDetails.topics.includes(project.project_name.toLowerCase())) {
        totalStars += repoDetails.stargazers_count;
        totalRepos++;
        console.log(`Repo ${repo.name} matches project ${project.project_name}. Total stars: ${totalStars}`);
      }
    }

    return {
      project_name: project.project_name,
      total_stars: totalStars,
      total_repos: totalRepos
    };
  }));

  projectStars.sort((a, b) => b.total_stars - a.total_stars);
  console.log(`Sorted projects for area ${areaName}:`, projectStars);
  return projectStars;
};
