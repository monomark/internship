const projectUseCase = (projectService) => {
  const getProject = async (id) => await projectService.getProject(id);

  const deleteProject = async (id) => await projectService.deleteProject(id);

  const createProject = async (input) =>
    await projectService.createProject(input);

  const listProject = async (data) => await projectService.listProject(data);

  const updateProject = async (input) =>
    await projectService.updateProject(input);

  return {
    getProject,
    deleteProject,
    createProject,
    listProject,
    updateProject,
  };
};

export default projectUseCase;
