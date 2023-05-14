import React, { useContext, useState } from 'react';
import {
  Box,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useToast
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { SleepContext } from '../Context/SleepContextProvider';
import { useNavigate } from 'react-router-dom';

const StruggleDuration = () => {
  const navigate = useNavigate();
  const { handleStruggleDuration } = useContext(SleepContext);
  const [duration, setDuration] = useState('');
  const toast = useToast();

  const handleNext = () => {
    if (duration === '') {
      toast({
        title: 'Please select a duration',
        status: 'warning'
      });
      return;
    }
    handleStruggleDuration(duration);
    navigate('/bedtime');
  };

  return (
    <Box px={[2, 4, 8, 16]} py={8}>
      <Box>
        <Text
          fontSize={'18px'}
          fontWeight="bold"
          color={'black'}
        >
          How long have you been struggling with sleep?
        </Text>
      </Box>
      <Box mt={8}>
        <Stack spacing={4}>
          <Button
            size="lg"
            variant={duration === 'lessThanOneWeek' ? 'solid' : 'outline'}
            colorScheme={duration === 'lessThanOneWeek' ? 'green' : undefined}
            onClick={() => setDuration('lessThanOneWeek')}
            _hover={{ bg: useColorModeValue('blue.200', 'blue.700') }}
            _active={{ bg: useColorModeValue('blue.300', 'blue.800') }}
          >
            <Text
              fontSize={['lg', 'xl']}
              fontWeight={duration === 'lessThanOneWeek' ? 'bold' : 'medium'}
            >
              Less than 1 week
            </Text>
          </Button>
          <Button
            size="lg"
            variant={duration === 'oneToFourWeeks' ? 'solid' : 'outline'}
            colorScheme={duration === 'oneToFourWeeks' ? 'green' : undefined}
            onClick={() => setDuration('oneToFourWeeks')}
            _hover={{ bg: useColorModeValue('blue.200', 'blue.700') }}
            _active={{ bg: useColorModeValue('blue.300', 'blue.800') }}
          >
            <Text
              fontSize={['lg', 'xl']}
              fontWeight={duration === 'oneToFourWeeks' ? 'bold' : 'medium'}
            >
              1-4 weeks
            </Text>
          </Button>
          <Button
            size="lg"
            variant={duration === 'moreThanFourWeeks' ? 'solid' : 'outline'}
            colorScheme={duration === 'moreThanFourWeeks' ? 'green' : undefined}
            onClick={() => setDuration('moreThanFourWeeks')}
            _hover={{ bg: useColorModeValue('blue.200', 'blue.700') }}
            _active={{ bg: useColorModeValue('blue.300', 'blue.800') }}
          >
            <Text
              fontSize={['lg', 'xl']}
              fontWeight={duration === 'moreThanFourWeeks' ? 'bold' : 'medium'}
            >
              More than 4 weeks
            </Text>
          </Button>
        </Stack>
      </Box>
      <Box w='35%' m='auto' mt={20} >
        <Button
          size="lg"
          colorScheme="blue"
          rightIcon={<ArrowForwardIcon />}

          onClick={handleNext}
          isDisabled={duration === ''}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default StruggleDuration;
