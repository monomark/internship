import { projectUseCase } from "../../core/factory";
import { useMutation } from "react-query";

const useUpdateProject = () => {
  const {
    isLoading,
    error,
    data,
    mutate: updateProject,
  } = useMutation(projectUseCase.updateProject);

  return {
    isLoading,
    error,
    data,
    updateProject,
  };
};

export default useUpdateProject;
