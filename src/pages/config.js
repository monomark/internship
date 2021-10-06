import AuthLayout from '../layouts/AuthLayout'
import DefaultLayout from '../layouts/DefaultLayout'
import Homepage from './Homepage'
import Register from './Register'
import CreateProduct from './CreateProduct'

const config = [
    {
        component: Homepage,
        path: '/',
        secure: false,
        layout: DefaultLayout,
    },
    {
        component: Register,
        path: '/register',
        secure: false,
        layout: AuthLayout,
    },
    {
        component: CreateProduct,
        path: '/create-product',
        secure: false,
        layout: AuthLayout,
    }
]

export default config
