import React, { useEffect }  from "react";
import { Route as ReactRout, useHistory, useLocation } from 'react-router-dom'
import { useUser } from '../hooks'

const Route = ({
    path,
    exact,
    Layout,
    secure,
    component,
}) => {
    const { user, loading } = useUser()
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        if (secure && !user && !loading) {
            history.push('/')
        }
    }, [secure, user, loading, history, location, path])

    if (loading) {
        return <>...loading</>
    }

    return (
        <Layout>
            <ReactRout
                path={path}
                component={component}
                exact={exact}
                />
        </Layout>
    )
}

export default Route
