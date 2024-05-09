import { Button, Center, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <Center bg="#68ede7" h="100vh" color="black" alignItems="center">
            <Heading as="h2" size="2xl">
                Welcome to AX Grid
            </Heading>
            <Button data-testid="link" colorScheme="blue" ml="10">
                <Link to="/grid">Enter Platform</Link>
            </Button>
        </Center>
    );
};

export default App;
