import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, Box, Select, background } from '@chakra-ui/react';
import { useState } from 'react';

const ModalComp = ({ data, setData, dataEdit, isOpen, onClose}) => {
    const [pedido, setPedido] = useState(dataEdit.pedido || "");
    const [nota, setNota] = useState(dataEdit.nota || "");
    const [description, setDescription] = useState(dataEdit.description || "");
    const [volumes, setVolumes] = useState(dataEdit.volumes || "");
    const [hora, setHora] = useState(dataEdit.hora || "");
    const [trans, setTrans] = useState(dataEdit.trans || "");
    
    const handleSave = () => {
        if (!pedido || !nota) return;
        if (notaAlreadyExists()) {
            return alert("Nota já cadastrada");
        }
        if (Object.keys(dataEdit).length) {
            data[dataEdit.index] = {pedido, nota, description, volumes, hora, trans };
        }

        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        

        const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), { pedido, nota, description, volumes, hora: `${hours}:${minutes}`, trans }]
        : [...(data ? data :[])];

        localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));

        setData(newDataArray);

        onClose();
        
    };
        const notaAlreadyExists = () => {
        if (dataEdit.nota !== nota && data?.length) {
            return data.find((item) => item.nota === nota);
        }
            return false;
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Cadastro de Pedidos</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl display="auto">
                        <Box>
                            <FormLabel>Pedido</FormLabel>
                            <Input 
                                type="number"
                                value={pedido}
                                onChange={(e) => setPedido(e.target.value)} />
                        </Box>
                        <Box>
                            <FormLabel>Nota</FormLabel>
                            <Input 
                                type="number"
                                value={nota}
                                onChange={(e) => setNota(e.target.value)} />
                        </Box>
                        <Box>
                            <FormLabel>Volumes</FormLabel>
                            <Input 
                                type="number"
                                value={volumes}
                                onChange={(e) => setVolumes(e.target.value)} />
                        </Box>
                        <Box>
                            <FormLabel>Descrição</FormLabel>
                            <Input 
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)} />
                        </Box>
                        <Box paddingTop={5}>
                            <Select placeholder='Qual é a transportadora?' onChange={(e) => setTrans(e.target.value)}>
                                <option value='RDS'>RDS</option>
                                <option value='JADLOG'>JADLOG</option>
                                <option value='REUNIDAS'>REUNIDAS</option> 
                                <option value='JAMEF'>JAMEF</option>
                                <option value='MIRA'>MIRA</option>                        
                                </Select>
                        </Box>
                    </FormControl>
                </ModalBody>

                    <ModalFooter justifyContent="start">
                        <Button colorScheme="green" mr={3} onClick={handleSave && Toast} action="/home/user/Documentos/web/Vendas-Online/API" method="post">
                            SALVAR
                        </Button>
                        <Button colorScheme="red" onClick={onClose}>
                            CANCELAR
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalComp;