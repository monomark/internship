import React, { useEffect, useState } from 'react'
import UserContext from '../contexts/UserContext/UserContext'
import { getUser } from '../graphql/queries'
import { Auth, graphqlOperation, API } from 'aws-amplify'


const UserProvider = ({ children }) => {
    const [ userObject, setUserObject] = useState({
        loading: true,
        user: ''
    })

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then(user => API.graphql(graphqlOperation(getUser, {id: user.username}) ))
            .then(({data}) => setUserObject({loading: false, user: data.getUser}))
            .catch((e) => setUserObject({loading: false, user: ''}))
    }, [])
    return (
        <UserContext.Provider value={{
            userObject,
            setUserObject,
            user: userObject.user,
            loading: userObject.loading,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
