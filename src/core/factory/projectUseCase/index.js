const projectUseCase = (projectService) => {
    const getProject = async (id) => await projectService.getProject(id)

    const deleteProject = async (id) => await projectService.deleteProject(id)

    return {
        getProject,
        deleteProject,
    }
}

export default projectUseCase
