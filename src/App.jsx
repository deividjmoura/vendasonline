import { EditIcon, DeleteIcon} from "@chakra-ui/icons";
import { ButtonGroup, Box, Flex, Button, useDisclosure, Table, Thead, Tr, Th, Tbody, Td, Tfoot, useBreakpointValue, Input, Link, Text, InputGroup} from '@chakra-ui/react';
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
    function cleara() { 
      localStorage.clear();
      document.location.reload(true);
     };

   return (
    <Flex 
    align="center"
    justify="center"
    fontSize="13px"
    fontFamily="poppins" >
      <Box maxW={1200} w="100%" h="100%" py={2} px={2}>     
      <ButtonGroup gap='4'  display='flex'
    alignItems='center'
    justifyContent='center'>
        <Button  onClick={() => [ setDataEdit({}), onOpen()]} className="noprint">
          NOVO REGISTRO
        </Button>
        <Button onClick={Imprimir} className="noprint">
          IMPRIMIR
        </Button>
        <Button onClick={cleara} className="noprint">
          LIMPAR DADOS
        </Button>
        </ButtonGroup>
        <InputGroup display='flex'
    alignItems='center'
    justifyContent='center'>
        <Input type='text' placeholder="Nome"/>
        <Input type='number' placeholder='Código' />
        <Input type='date' />
        </InputGroup>
        <Box overflowY="auto" maxWidth="100%" >
         <Table mt="6" maxWidth="100%" colorScheme="orange" border-spacing="2px">
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
                <Td maxW={isMobile ? 5 : 500}>{description}</Td>
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
