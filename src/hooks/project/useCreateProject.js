import { projectUseCase } from "../../core/factory";
import { useMutation } from "react-query";

const useCreateProject = () => {
  const {
    isLoading,
    error,
    data,
    mutate: createProject,
  } = useMutation(projectUseCase.createProject);

  return {
    isLoading,
    error,
    data,
    createProject,
  };
};

export default useCreateProject;
