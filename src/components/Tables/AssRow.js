import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Text,
  Icon,
  Select,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, Controller } from 'react-hook-form';

function AssRow(props) {
  const { logo } = props;
  const {
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    getValues,
  } = useForm();
  const [isAssigned, setIsAssigned] = useState(false);

  const selectedGame = watch('selectedGame');
  const selectedDate = watch('selectedDate');

  const onSubmit = async (data) => {
    if (data.selectedDate && data.selectedGame) {
      setIsAssigned(true);

      // Make the API call
      try {
        const response = await axios.post(
          'http://localhost:5000/api/tasks/createtask',
          {
            game: data.selectedGame,
            assignedTo: '650f43bc76a8047ee392b80c', // This needs to come from somewhere, maybe another form field
            assignedBy: '650b3287035c6d097b68f5b5', // This is an example, replace it with the actual assignedBy user
            dateOfAssignment: data.selectedDate,
          }
        );

        if (response.status === 201) {
          alert(
            `Assigned ${
              data.selectedGame
            } for ${data.selectedDate.toDateString()}`
          );
        } else {
          alert('Failed to create the task on the server 1.');
        }
      } catch (error) {
        alert('Failed to create the task on the server2');
      }
    } else {
      alert('Please select a date and a game before assigning.');
    }
  };

  const handleDeleteClick = () => {
    setIsAssigned(false);
    reset({
      selectedDate: null,
      selectedGame: '',
    });
  };

  return (
    <Flex direction='column' w='100%' px='50px' py='50px'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Flex direction='column' w='100%' background='transparent'>
            <FormLabel>Select a Game</FormLabel>
            <Controller
              name='selectedGame'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <Select {...field} placeholder='Choose Game'>
                  <option value='Mnemonic Mind Maze'>Mnemonic Mind Maze</option>
                  <option value='CogniRecall Quest'>CogniRecall Quest</option>
                  <option value='Pull the string'>Pull the string</option>
                  <option value='Concentrate to be happy'>
                    Concentrate to be happy
                  </option>
                </Select>
              )}
            />

            <FormLabel mt={4}>Select a Date</FormLabel>
            <Controller
              name='selectedDate'
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  dateFormat='dd/MM/yyyy'
                  placeholderText='Select Date'
                />
              )}
            />

            <Flex mt='20px'>
              <Button colorScheme='teal' mr='2' type='submit'>
                Assign
              </Button>
              {isAssigned && (
                <Button colorScheme='red' onClick={handleDeleteClick}>
                  Delete
                </Button>
              )}
            </Flex>
          </Flex>
        </FormControl>
      </form>
    </Flex>
  );
}

export default AssRow;
