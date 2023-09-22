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
    if (selectedDate && selectedGame) {
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

  const gameNameColor = isAssigned ? 'green' : 'gray.400'; // Change color to green after assignment
  const isDisabled = isAssigned; // Disable inputs after assignment

  const gameNameStyle = {
    color: gameNameColor,
    fontWeight: isAssigned ? 'bold' : 'normal', // Make it bold after assignment
  };

  return (
    <Flex mb='24px' justifyContent='space-between'>
      <Flex alignItems='center'>
        <Box
          me='14px'
          borderRadius='50%'
          color={isAssigned ? 'green' : 'gray.400'} // Change color to green after assignment
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
            color={gameNameStyle.color} // Set color based on assignment
            fontWeight={gameNameStyle.fontWeight} // Set font weight based on assignment
            isDisabled={isDisabled} // Disable the Select component
          >
            <option value='Mnemonic Mind Maze'>Mnemonic Mind Maze</option>
            <option value='CogniRecall Quest'>CogniRecall Quest</option>
          </Select>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat='dd/MM/yyyy'
            placeholderText='Select Date'
            disabled={isDisabled} // Disable the DatePicker component
          />
        </Flex>
      </Flex>
      <Flex>
        <Button
          onClick={handleAssignClick}
          colorScheme='teal'
          size='sm'
          mr='2'
          isDisabled={isDisabled} // Disable the Assign button after assignment
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
