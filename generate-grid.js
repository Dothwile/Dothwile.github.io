function displayProjects(category = null) {
  const container = document.getElementById("projects");

  const filteredProjects = category
    ? projects.filter(project => project.categories.includes(category))
    : projects;

  container.innerHTML = filteredProjects.map(project => `
    <div class="w3-third w3-container w3-margin-bottom">

      ${project.image ? `
        <img src="${project.image}"
             alt="${project.alt || project.title}"
             style="width:100%"
             class="w3-hover-opacity">
      ` : ""}

      <div class="w3-container w3-white">

        ${project.link ? `
        <p>
            <b>
            <a href="${project.link}" target="_blank" rel="noopener noreferrer">
                ${project.title}
            </a>
            </b>
        </p>
        ` : `
        <p><b>${project.title}</b></p>
        `}

        <p>${project.description}</p>

      </div>
    </div>
  `).join("");
}
