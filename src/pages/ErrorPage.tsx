import { Box, Heading, Text } from '@chakra-ui/react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../components/NavBar'

function ErrorPage() {
    const error = useRouteError()

    return (
        <>
            <NavBar />
            <Box padding={5}>
                <Heading>Oops</Heading>
                <Text>{isRouteErrorResponse(error) ? 'Not exist' : "Error"}</Text>
            </Box>

        </>
    )
}

export default ErrorPage