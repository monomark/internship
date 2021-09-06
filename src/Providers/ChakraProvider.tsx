import { ChakraProvider as Chakra } from "@chakra-ui/react"
import theme from '../theme'


const ChakraProvider = ({ children }: any) => {
    return (
        <Chakra
            theme={theme}>
            {children}
        </Chakra>
    )
}

export default ChakraProvider
