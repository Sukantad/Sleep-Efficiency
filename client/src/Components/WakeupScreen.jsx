import React, { useContext, useState } from 'react';
import {

    Box,
    Heading,
    Button,
    FormControl,
    FormLabel,
    Input,
    Flex,
} from '@chakra-ui/react';
import { SleepContext } from '../Context/SleepContextProvider';
import { useNavigate } from 'react-router-dom';

function WakeupScreen() {
    const [wakeTime, setWakeTime] = useState('');
    const { handleWakeup } = useContext(SleepContext);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        handleWakeup(wakeTime);
        navigate('/sleepduration');
    }

    return (

        <Box p={4} h="100vh" bg="gray.50" display="flex" alignItems="center" justifyContent="center">
            <Flex direction="column" h={'70vh'} w="100%" maxW="360px">
                <Box mb='80px' fontWeight="bold" fontSize="xl" textAlign="center" >
                 What time do you get out of bed to start your day?</Box>

                <Box mb={8}>

                    <form onSubmit={handleSubmit}>
                        <FormControl id="wakeup">
                            <Input
                                required
                                type="time"
                                value={wakeTime}
                                onChange={(event) => setWakeTime(event.target.value)}
                                placeholder="HH:MM"
                                fontSize="lg"
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            colorScheme="blue"
                            w="100%"
                            mt={4}
                        >
                            Next
                        </Button>
                    </form>
                </Box>
            </Flex>
        </Box>

    );
}

export default WakeupScreen;
