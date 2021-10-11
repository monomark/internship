import { projectUseCase } from "../../core/factory"
import { useQuery } from 'react-query'

const useGetProject = (id) => {
    const {
        isLoading,
        error,
        data,
        refetch,
    } = useQuery('project', () => projectUseCase.getProject(id))
    

     return {
         isLoading,
         error,
         data,
         refetch
     }
}

export default useGetProject
