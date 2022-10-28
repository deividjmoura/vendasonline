import { Box, Flex, Input, Stack, Button,  } from '@chakra-ui/react';

const Login = () => {
    return (
    <Flex align="center"
    justify="center"
    fontSize="13px"
    fontFamily="poppins" 
    height={300}>
  <Box p='4' bg='blue.460' >
  <Stack spacing={3}>
  <Input variant='flushed' placeholder='Código:' name='usuario' />
  <Input variant='flushed' placeholder='Senha:' name='senha' />
  <Input variant='filled' type="button" value="Entrar" />
</Stack>
  </Box>
</Flex>
)};
export default Login;
