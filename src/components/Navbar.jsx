import { Flex, Box, Spacer,Heading, Text, Button, HStack } from "@chakra-ui/react";

export default function Navbar() {
  return (
        <Flex as="nav" p="10px" alignItems="center">
            <Heading as="h1">Siddhant</Heading>
            <Spacer/>

            <HStack spacing="20px">
            <Box bg="gray.200" p="10px">M</Box>
            <Text>siddhantd37@gmail.com</Text>
            <Button colorScheme="purple">Logout</Button>
            </HStack>
        </Flex>







//     <Flex bg="gray.300" justify="space-around" wrap="wrap" gap="2">
//         <Box w="150px" h="50px" bg="red">1</Box>
//         <Box w="150px" h="50px" bg="blue">2</Box>
//         <Box w="150px" h="50px" flexGrow="2" bg="green">3</Box>
//         <Box w="150px" h="50px" bg="yellow">4</Box>
//     </Flex>
    )
}
