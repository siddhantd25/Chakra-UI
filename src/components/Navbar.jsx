import { UnlockIcon, } from "@chakra-ui/icons"
import { Flex, Heading, Box, Text, Button, Spacer, HStack, useToast, Avatar, AvatarBadge } from "@chakra-ui/react"

export default function Navbar() {

    const toast = useToast()

    const showToast = () => {
        toast({
            title: 'logged out',
            description: 'successfully logged out',
            duration: '5000',
            isClosable: true,
            status: 'success',
            position: 'top',
            icon: <UnlockIcon/>
        })
    }

  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1" fontSize="1.5em">Sidd Tasks</Heading>
      <Spacer />

      <HStack spacing="20px"> 
        <Avatar src="/img/mario.png">
            <AvatarBadge width="1.3rem" bg="teal.500">
                <Text fontSize="xs" color="white">3</Text>
            </AvatarBadge>
        </Avatar>
        <Text>siddhantd37@gmail.com</Text>
        <Button colorScheme="purple" onClick={showToast}>Logout</Button>
      </HStack>
    </Flex>
  )
}