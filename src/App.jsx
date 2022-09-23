import { EditIcon, DeleteIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Flex, Button, useDisclosure, Table, Thead, Tr, Th, Tbody, Td, Tfoot, useBreakpointValue, Input, Link, Text} from '@chakra-ui/react';
import { useEffect, useState } from "react";
import ModalComp from "./components/ModalComp";
import Imprimir from "./components/Imprimir";

const App = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState([]);
    const [dataEdit, setDataEdit] = useState({});

    const isMobile = useBreakpointValue({
      base: true,
      lg: false,
    });

    useEffect(() => {
      const db_costumer =localStorage.getItem("cad_cliente")
      ? JSON.parse(localStorage.getItem("cad_cliente"))
      : [];

      setData(db_costumer);
    }, [setData]);

    const handleRemove = (nota) => {
      const newArray = data.filter((item) => item.nota !== nota);

      setData(newArray);

      localStorage.setItem("cad_cliente", JSON.stringify(newArray));
      
    };

   return (
    <Flex 
    align="center"
    justify="center"
    fontSize="13px"
    fontFamily="poppins" >
      <Box maxW={1200} w="100%" h="85vh" py={2} px={2}>      
        <Button className="noprint" collorScheme="blue" onClick={() => [ setDataEdit({}), onOpen()]}>
          NOVO REGISTRO
        </Button>
        <Button className="noprint" collorScheme="blue" onClick={Imprimir}>
          IMPRIMIR
        </Button>
        <Input placeholder="Coloque aqui seu nome e código:" textAlign="center" />
        <Box overflowY="auto" height="100%">
         <Table mt="6">
          <Thead>
            <Th maxW={isMobile ? 5 : 100} fontSize="10px">
              Pedido
            </Th>
            <Th maxW={isMobile ? 5 : 100} fontSize="10px">
              Nota
            </Th>
            <Th maxW={isMobile ? 5 : 100} fontSize="10px">
              Volumes
            </Th>
            <Th maxW={isMobile ? 5 : 100} fontSize="10px">
              Hora
            </Th>
            <Th maxW={isMobile ? 5 : 100} fontSize="10px">
              Descrição
            </Th>
            <Th maxW={isMobile ? 5 : 100} fontSize="10px">
              Trans
            </Th>
            <Th p={0}></Th>
            <Th p={0}></Th>
          </Thead>
          <Tbody>
            {data.map(({ pedido, nota, volumes, hora, description, trans }, index) => (
              <Tr key={index} cursor="pointer " _hover={{ bg: "gray.100"}}>
                <Td maxW={isMobile ? 5 : 100}>{pedido}</Td>
                <Td maxW={isMobile ? 5 : 100}>{nota}</Td>
                <Td maxW={isMobile ? 5 : 100}>{volumes}</Td>
                <Td maxW={isMobile ? 5 : 100}>{hora}</Td>
                <Td maxW={isMobile ? 5 : 100}>{description}</Td>
                <Td maxW={isMobile ? 5 : 100}>{trans}</Td>
                <Td p={0} className="noprint">
                  <EditIcon
                  fontSize={10}
                  onClick={() => [
                    setDataEdit({ pedido, nota, volumes, hora, description, trans, index}),
                    onOpen(),
                  ]}
                  />
                </Td>
                <Td p={0} className="noprint">
                  <DeleteIcon
                  fontSize={15}
                  onClick={() => handleRemove(nota)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
    <Button
    direction='row' 
    align='center'
    colorScheme='blackAlpha'
    className="noprint"
    size='md'
    height='48px'
    width='200px'
    border='2px'
    borderColor='green.500'
    fontFamily="poppins"> <Link href='https://deividmoura.netlify.app' isExternal>
  Mais?! <ExternalLinkIcon mx='5px'/> </Link> </Button>
    </Tfoot>
         </Table>
        </Box>
      </Box>
      {isOpen && (
        <ModalComp
          isOpen={isOpen}
          onClose={onClose}
          data={data}
          setData={setData}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
        />
      )}
    </Flex>
  );
};

export default App;
