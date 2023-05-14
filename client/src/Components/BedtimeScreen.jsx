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
} from '@chakra-ui/react';
import { SleepContext } from '../Context/SleepContextProvider';
import { useNavigate } from 'react-router-dom';

function BedtimeScreen() {
    const [bedTime, setBedTime] = useState('');
    const { bedTimeHandler } = useContext(SleepContext);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        bedTimeHandler(bedTime);
        navigate('/wakeup');
    }

    return (

        <Flex
            h="100vh"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                w="100%"
                p={6}
                maxW="md"
                borderRadius={8}
                bgColor="white"
                h={'80vh'}
            >
                <Box mb={'60px'} fontWeight="bold" fontSize="lg">
                    What time do you usually go to bed?
                </Box>
                <form onSubmit={handleSubmit}>
                    <FormControl id="bedtime" mb={6}>

                        <Input
                            required
                            type="time"
                            value={bedTime}
                            onChange={(event) => setBedTime(event.target.value)}
                            placeholder="HH:MM"
                            mt={2}
                            fontSize="lg"
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        colorScheme="blue"
                        size="lg"
                        w="100%"
                        mt={4}
                        mb={2}
                        _hover={{ bg: 'blue.500' }}
                    >
                        Next
                    </Button>
                </form>
            </Box>
        </Flex>

    );
}

export default BedtimeScreen;
