import { useMutation } from "react-query"
import { userUserCase } from "../../core/factory"

const useGetUser = () => {
    const { mutate: getUser, data, error, isLoading } = useMutation(userUserCase.getUser)

    return {
        getUser,
        data,
        error,
        isLoading
    }
}

export default useGetUser
