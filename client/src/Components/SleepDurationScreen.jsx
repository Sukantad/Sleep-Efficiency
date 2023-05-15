import React, { useContext, useState } from 'react';
import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Flex,
} from '@chakra-ui/react';
import { SleepContext } from '../Context/SleepContextProvider';
import { useNavigate } from 'react-router-dom';

function SleepDurationScreen() {
  const [sleepDuration, setSleepDuration] = useState(7);
  const { handleDuration } = useContext(SleepContext);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    handleDuration(sleepDuration);
    navigate('/sleepefficiency');
  }

  return (

    <Box p={4}>
      <Flex direction="column" alignItems="center" mt='70px'   >

        <Heading as="h2" mb='100px' fontSize="xl" textAlign="center" >
          OK. How many hours sleep do you get in a  typical  night?
        </Heading>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <FormControl id="sleepduration" mb={4}>
            <Flex direction="row" justifyContent="space-between">
              <Text fontSize="lg" fontWeight="semibold">
                1 hour
              </Text>
              <Text fontSize="lg" fontWeight="semibold">
                12 hours
              </Text>
            </Flex>
            <Slider
              aria-label="sleep duration slider"
              defaultValue={7}
              min={1}
              max={12}
              step={0.25}
              value={sleepDuration}
              onChange={(value) => setSleepDuration(value)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                <Box color="teal" />
              </SliderThumb>
            </Slider>
            <Text mt={2} textAlign="center">
              {sleepDuration} hours
            </Text>
          </FormControl>
          <Button type="submit" colorScheme="blue" w="100%" mt={8}>
            Next
          </Button>
        </form>
      </Flex>
    </Box>

  );
}

export default SleepDurationScreen;
