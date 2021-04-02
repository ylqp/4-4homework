import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import {
  Box,
  Container,
  Input,
  InputLeftAddon,
  InputGroup,
  HStack,
  Wrap,
  WrapItem,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import { GrAdd } from 'react-icons/gr'
const addUrl = () => {
  console.log(1)
}
export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()
  return (
    <Box bgColor="#eee" h="100vh" pt={200}>
      <Container w="80%"
        fontSize="80px"
        textAlign="center"
        fontWeight="bold"
        color="gray.400">
        Google
      </Container>
      <Container mt="20px">
        <InputGroup size="lg" borderRadius="full">
          <InputLeftAddon><BsSearch></BsSearch></InputLeftAddon>
          <Input placeholder="在Google上搜索，或者输入一个网址" />
        </InputGroup>
      </Container>
      <Container mt="20px">
        <Wrap spacing="24px">
          <WrapItem>
            <Center w="80px" h="80px" bg="red.200">
              Box 1
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="80px" h="80px" bg="green.200">
              Box 2
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="80px" h="80px" bg="tomato">
              Box 3
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="80px" h="80px" bg="blue.200">
              Box 4
            </Center>
          </WrapItem>
          <WrapItem onClick={onOpen}>
            <Center w="80px" h="80px" bg="gray.200">
              <GrAdd></GrAdd>
            </Center>
          </WrapItem>
        </Wrap>
      </Container>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>添加快捷方式</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>名称</FormLabel>
              <Input ref={initialRef} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>网址</FormLabel>
              <Input/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              取消
            </Button>
            <Button>完成</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
