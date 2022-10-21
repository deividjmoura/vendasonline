import { Box, Flex, Spacer, Input, Stack } from '@chakra-ui/react';

const Login = () => {
    return (
    <Flex align="center"
    justify="center"
    fontSize="13px"
    fontFamily="poppins" 
    height={300}>
  <Box p='4' bg='blue.460' >
  <Stack spacing={3}>
  <Input variant='flushed' placeholder='Código:' />
  <Input variant='flushed' placeholder='Senha:' />
</Stack>
  </Box>
</Flex>
)};
export default Login;
