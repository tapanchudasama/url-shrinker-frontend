import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';
import { Api } from '../helper/api';

export const Form = () => {
  const api = new Api();
  const [url, setUrl] = useState('');
  const [slug, setSlug] = useState(null);
  const toast = useToast();

  const handleUrl = event => {
    setUrl(event.target.value);
  };
  const handleSlug = event => {
    setSlug(event.target.value);
  };

  const handleSubmit = () => {
    api
      .submitUrl(url, slug)
      .then(_response => {
        toast({
          title: 'URL created.',
          description: 'Your shrinked url is created. Refresh page to see.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      })
      .catch(error => {
        toast({
          title: 'An error occured!',
          description: error.response.data.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      });
  };
  return (
    <Box marginTop="5">
      <FormControl isRequired mt="4">
        <FormLabel>Enter URL</FormLabel>
        <Input
          type="url"
          placeholder="https://example.com"
          pattern="https://.* "
          onChange={handleUrl}
        />
      </FormControl>
      <FormControl mt="4">
        <FormLabel>Enter Slug</FormLabel>
        <Input type="text" placeholder="my-url" onChange={handleSlug} />
      </FormControl>
      <Button mt={4} colorScheme="green" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};
