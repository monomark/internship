import { extendTheme } from '@chakra-ui/react'
import { Button } from './Button'

const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                background: '#fff',
                color: '#000'
            }
        }
    },
    fonts: {
        body: 'Montserrat, sans-serif',
        heading: 'Montserrat, sans-serif'
    },
    components: {
        Button,
    },
    colors: {
        grey: {
            100: "#c4c4c4",
        },
    }
})

export default theme
