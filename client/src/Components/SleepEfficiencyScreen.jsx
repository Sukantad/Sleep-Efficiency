import React, { useContext, useEffect } from 'react';
import {
    ChakraProvider,
    Box,
    Heading,
    Text,
    Flex,
    Spacer,
    Button,
    VStack,
    HStack
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { SleepContext } from '../Context/SleepContextProvider';
function SleepEfficiencyScreen(props) {
    const navigate = useNavigate();
    const { sleepEfficiency, nickname } = useContext(SleepContext);

    useEffect(()=>{

    },[])
    const onRestart = () => {
        navigate('/bedtime');
    }


    console.log(nickname, "nk")
    return (
        <ChakraProvider>
            <Box p={4}>
                <VStack spacing={8}>



                    <Box>
                        <Heading as="h2" size="lg" mb={4}>Sleep Efficiency</Heading>
                        <Box bg="gray.50" p={6} rounded="lg">
                            <Text fontSize="6xl" fontWeight="bold" mb={2} textAlign="center">{sleepEfficiency}%</Text>
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
