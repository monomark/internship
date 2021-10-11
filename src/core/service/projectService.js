import { API, graphqlOperation } from 'aws-amplify'
import { getProduct } from '../../graphql/queries'
import { deleteProduct } from '../../graphql/mutations'

const projectService = () => {
    const getProject = async (id) => await API.graphql(graphqlOperation(getProduct, {id}))

    const deleteProject = async (id) => await API.graphql(graphqlOperation(deleteProduct, {id}))

    return {
        getProject,
        deleteProject,
    }
}


export default projectService
