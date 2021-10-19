import { projectUseCase } from "../../core/factory";
import { useQuery } from "react-query";

const useListProject = () => {
  const { isLoading, error, data, refetch } = useQuery("project", () =>
    projectUseCase.listProject()
  );

  return {
    isLoading,
    error,
    data,
    refetch,
  };
};

export default useListProject;
