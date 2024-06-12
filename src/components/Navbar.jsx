import { Flex, Heading, Box, Text, Button, Spacer, HStack } from "@chakra-ui/react"

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1" fontSize="1.5em">Sidd Tasks</Heading>
      <Spacer />

      <HStack spacing="20px"> 
        <Box bg="gray.200" p="10px 15px" borderRadius="50%">S</Box>
        <Text>siddhantd37@gmail.com</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  )
}