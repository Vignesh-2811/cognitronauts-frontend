import {
  Avatar,
  AvatarGroup,
  Flex,
  Icon,
  Progress,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

function DashboardTableRow(props) {
  const { logo, name, members, contact,budget, progression, lastItem } = props;
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Tr>
      <Td
        minWidth={{ sm: '250px' }}
        ps='0px'
        borderBottomColor='#56577A'
        border={lastItem ? 'none' : null}
      >
        <Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
          <Icon as={logo} h={'24px'} w={'24px'} me='18px' />
          <Text fontSize='sm' color='#fff' fontWeight='normal' minWidth='100%'>
            {contact}
          </Text>
        </Flex>
      </Td>

     
      <Td borderBottomColor='#56577A' border={lastItem ? "none" : null}>
        <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
          {budget}
        </Text>
      </Td>
      <Td borderBottomColor='#56577A' border={lastItem ? 'none' : null}>
        <Flex direction='column'>
          <Text
            fontSize='sm'
            color='#fff'
            fontWeight='bold'
            pb='.2rem'
          >{`${progression}%`}</Text>
          <Progress
            colorScheme='brand'
            h='3px'
            bg='#2D2E5F'
            value={progression}
            borderRadius='30px'
          />
        </Flex>
      </Td>
    </Tr>
  );
}

export default DashboardTableRow;
