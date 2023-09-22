import { Box, Button, Flex, Icon, Text, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AssRow(props) {
  const { logo } = props;
  const [selectedDate, setSelectedDate] = useState(null);
  const [isAssigned, setIsAssigned] = useState(false);
  const [selectedGame, setSelectedGame] = useState(''); // State for selected game name

  const handleAssignClick = () => {
    if (selectedDate && selectedGame) { // Check if both date and game are selected
      setIsAssigned(true);
      alert(`Assigned ${selectedGame} for ${selectedDate.toDateString()}`);
    } else {
      alert('Please select a date and a game before assigning.');
    }
  };

  const handleDeleteClick = () => {
    setIsAssigned(false);
    setSelectedDate(null);
    setSelectedGame('');
  };

  return (
    <Flex mb='24px' justifyContent='space-between'>
      <Flex alignItems='center'>
        <Box
          me='14px'
          borderRadius='50%'
          color={isAssigned ? '#01B574' : 'gray.400'}
          border='1px solid'
          display='flex'
          alignItems='center'
          justifyContent='center'
          w='35px'
          h='35px'
        >
          <Icon as={logo} w='12px' h='12px' />
        </Box>
        <Flex direction='column'>
          <Select
            value={selectedGame}
            onChange={(e) => setSelectedGame(e.target.value)}
            placeholder='Choose Game'
          >
            <option value='Mnemonic Mind Maze'>Mnemonic Mind Maze</option>
            <option value='CogniRecall Quest'>CogniRecall Quest</option>
          </Select>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat='dd/MM/yyyy'
            placeholderText='Select Date'
          />
        </Flex>
      </Flex>
      <Flex>
        <Button
          onClick={handleAssignClick}
          colorScheme='teal'
          size='sm'
          mr='2'
        >
          Assign
        </Button>
        {isAssigned && (
          <Button
            onClick={handleDeleteClick}
            colorScheme='red'
            size='sm'
          >
            Delete
          </Button>
        )}
      </Flex>
    </Flex>
  );
}

export default AssRow;
