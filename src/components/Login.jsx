import { Box, Flex, Spacer } from '@chakra-ui/react';

const Login = () => {
    return (
    <Flex pb={3}>
  <Box p='4' bg='red.400'>
    User 1
  </Box>
  <Spacer />
  <Box p='4' bg='blue.400'>
    User 2
  </Box>
  <Spacer />
  <Box p='4' bg='green.400'>
    User 3
  </Box>
</Flex>
)};
export default Login;
