import React, { useEffect, useState } from 'react'
import UserContext from '../contexts/UserContext/UserContext'


const UserProvider = ({ children }) => {
    const [ userObject, setUserObject] = useState({
        loading: true,
        user: ''
    })

    useEffect(() => {

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
