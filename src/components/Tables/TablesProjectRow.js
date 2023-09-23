import React from 'react';
import {
  Tr,
  Td,
  Flex,
  Text,
  Progress,
  Icon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaEllipsisV } from 'react-icons/fa';

function DashboardTableRow(props) {
  const { ID, name, dateOfBirth, contact } = props;
  const textColor = useColorModeValue('gray.700', 'white');
  return (
    <Tr>
      <Td
        minWidth={{ sm: '250px' }}
        ps='0px'
        borderBottomColor='#56577A'
        // border={lastItem ? 'none' : null}
      >
        <Flex alignItems='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
          {/* <Icon as={logo} h={'20px'} w={'20px'} me='18px' /> */}
          <Text fontSize='sm' color='#fff'>
            {name}
          </Text>
        </Flex>
      </Td>
      <Td borderBottomColor='#56577A'>
        <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
          {dateOfBirth}
        </Text>
      </Td>
      <Td borderBottomColor='#56577A'>
        <Flex direction='column'>
          <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
            {contact}
          </Text>
        </Flex>
      </Td>
    </Tr>
  );
}

export default DashboardTableRow;
