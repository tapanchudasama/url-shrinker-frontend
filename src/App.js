import React from 'react';
import {
  ChakraProvider,
  Flex,
  Spacer,
  Box,
  Container,
  Center,
  theme,
  Heading,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Form } from './components/Form';
import { UrlTable } from './components/Table';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Flex>
          <Spacer />
          <Box p="4">
            <ColorModeSwitcher />
          </Box>
        </Flex>
        <Center>
          <Heading size="2xl">Welcome to Shrinkerr!</Heading>
        </Center>
        <Container maxWidth="5xl">
          <Form />
          <UrlTable />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
