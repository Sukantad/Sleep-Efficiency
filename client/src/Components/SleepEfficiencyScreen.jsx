import React, { useContext, useEffect, useState } from 'react';
import {
    ChakraProvider,
    Box,
    Heading,
    Text,
    Flex,
    Spacer,
    Button,
    VStack,
    HStack,
    Spinner,
    Center
} from '@chakra-ui/react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { SleepContext } from '../Context/SleepContextProvider';
function SleepEfficiencyScreen(props) {
    const navigate = useNavigate();
    const { sleepEfficiency } = useContext(SleepContext);


    if (!sleepEfficiency) {
        return (
            <Box mt={'50%'} ml={'40%'}>
                <Spinner
                    thickness='14px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'

                    size={'xl'}
                />

            </Box>
        )
    } else if (sleepEfficiency == "Incorrect password") {
        return (
            <Box w='50%' m='auto' mt={'100px'}>
                <Text textAlign={'center'} fontWeight={'bold'}>  Wrong Password</Text>
                <Center mt={'50px'}> <Link to='/'> <Button colorScheme="blue">Restart</Button> </Link> </Center>
            </Box>
        )
    }

    const onRestart = () => {
        navigate('/');
    }



    return (
        <ChakraProvider>
            <Box p={4}>
                <VStack spacing={8}>



                    <Box>
                        <Heading as="h2" size="lg" mb={4}>Sleep Efficiency</Heading>
                        <Box bg="gray.50" p={6} rounded="lg">
                            <Text fontSize="6xl" fontWeight="bold" mb={2} textAlign="center">{sleepEfficiency?.efficiency}%</Text>
                            <Text fontSize="md" fontWeight="medium" textAlign="center">You slept efficiently last night</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Heading as="h2" size="lg" mb={4}>Tips for better sleep</Heading>
                        <VStack spacing={4} bg="gray.50" p={6} rounded="lg">
                            <Text fontSize="md" fontWeight="medium">- Stick to a consistent sleep schedule</Text>
                            <Text fontSize="md" fontWeight="medium">- Create a relaxing bedtime routine</Text>
                            <Text fontSize="md" fontWeight="medium">- Avoid caffeine and alcohol before bed</Text>
                            <Text fontSize="md" fontWeight="medium">- Keep your bedroom cool and dark</Text>
                        </VStack>
                    </Box>
                    <Button colorScheme="blue" onClick={onRestart}>Restart</Button>
                </VStack>
            </Box>
        </ChakraProvider>
    );
}

export default SleepEfficiencyScreen;
