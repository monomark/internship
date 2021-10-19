import { projectUseCase } from "../../core/factory";
import { useMutation } from "react-query";

const useDeleteProject = () => {
  const {
    isLoading,
    error,
    data,
    mutate: deleteProject,
  } = useMutation(projectUseCase.deleteProject);

  return {
    isLoading,
    error,
    data,
    deleteProject,
  };
};

export default useDeleteProject;
