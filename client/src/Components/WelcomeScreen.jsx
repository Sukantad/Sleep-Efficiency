import React, { useContext, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Text,
} from '@chakra-ui/react';
import { SleepContext } from '../Context/SleepContextProvider';
import { useNavigate } from 'react-router-dom';

function WelcomeScreen() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const { onSubmit } = useContext(SleepContext);

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(nickname, password);

  }

  return (
    <ChakraProvider>
      <Flex
        height="100vh"
        backgroundColor="gray.50"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          backgroundColor="white"
          p={8}
          borderRadius="lg"
          boxShadow="md"
          width={{ base: '90%', sm: '80%', md: '50%' }}
        >
          <Box textAlign="center" mb={8}>
            <Heading as="h1" fontSize="22px">
              Sleep Efficiency App
            </Heading>
            <Text fontSize="15px" mt={2} color="gray.600">
              Sign up to see your sleep data.
            </Text>
          </Box>
          <form onSubmit={handleSubmit}>
            <FormControl id="nickname" mb={4}>
              <FormLabel>Nickname</FormLabel>
              <Input
                required
                type="text"
                value={nickname}
                onChange={(event) => setNickname(event.target.value)}
                placeholder="Enter your nickname"
              />
            </FormControl>
            <FormControl id="password" mb={8}>
              <FormLabel>Password</FormLabel>
              <Input
                required
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"

              mb={4}
              w="full"
              borderRadius="full"
              fontWeight="medium"
              _hover={{ transform: 'scale(1.05)' }}
              _active={{ transform: 'scale(0.95)' }}
            >
              Sign Up
            </Button>
          </form>

        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default WelcomeScreen;
