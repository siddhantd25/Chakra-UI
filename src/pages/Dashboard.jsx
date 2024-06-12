import { Container, Heading, Text, Box, filter } from "@chakra-ui/react"
import { color } from "framer-motion"

export default function Dashboard() {

  const boxStyles = {
    p: "10px",
    bg:"purple.500",
    color:"white",
    m:"10px",
    textAlign: "center",
    filter:"blur(2px)",
    'hover' : {
      color:'black',
      bg:'blue.200'
    }

  }

  return (
    <Container as="section" maxWidth="4xl" py="20px">
      <Heading my="30px" p="10px">Chakra Ui</Heading>
      <Text marginLeft="30px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, perferendis.
      </Text>
      <Text marginLeft="30px" color="blue.300" fontWeight="bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, perferendis.
      </Text>

      <Box my="30px" p="20px" bg="orange">
        This is a box
      </Box>

      <Box sx={boxStyles}>
        Hello world
      </Box>
    </Container>
  )
}
