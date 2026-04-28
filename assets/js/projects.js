function filterProjects(category) {
  const projects = document.querySelectorAll('.project-card');
  projects.forEach(project => {
    if (category === 'all' || project.classList.contains(category)) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}