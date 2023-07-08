const Project = require('../models/ProjectModel');

// Submit form
async function submitForm(req, res) {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(200).json(project);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to submit form' });
  }
}

// Get all projects
async function getAllProjects(req, res) {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve projects' });
  }
}

// Get project by ID
async function getProjectById(req, res) {
  const projectId = req.params.id;
  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve project' });
  }
}

// Search projects by sector, country, or both
async function searchProjects(req, res) {
  const { sector, country } = req.query;
  const query = {};

  if (sector) {
    query.sector = sector;
  }

  if (country) {
    query.country = country;
  }

  try {
    const projects = await Project.find(query);
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search projects' });
  }
}

module.exports = {
  submitForm,
  getAllProjects,
  getProjectById,
  searchProjects
};
