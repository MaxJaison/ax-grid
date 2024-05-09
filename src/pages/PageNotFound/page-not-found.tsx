import { Center, Divider, Flex, Heading, Text } from '@chakra-ui/react';

export const PageNotFound = () => {
    return (
        <Center bg="white" h="100vh" color="black" alignItems="center">
            <Flex align="center" justify="center" h="45px">
                <Heading as="h2" size="2xl" gap="10">
                    404
                </Heading>
                <Divider orientation="vertical" size="xs" borderColor="black" borderWidth="2px" mx="5" />
                <Text fontSize="3xl">Page Not Found.</Text>
            </Flex>
        </Center>
    );
};
