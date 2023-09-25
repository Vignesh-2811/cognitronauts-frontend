
// Chakra imports
import { Flex, Icon, Text } from '@chakra-ui/react';

// Images

// Custom components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import TransactionRow from 'components/Tables/TransactionRow';
import graph from 'assets/img/graph.jpg';
import { Image } from '@chakra-ui/react';

// Icons
import { FaRegCalendarAlt } from 'react-icons/fa';

// Data
import {
  newestTransactions,
  olderTransactions
} from 'variables/general';

function ClientCogni() {
  return (
    <Flex direction='column' pt={{ base: '150px', md: '75px' }} mx='auto' flexWrap="wrap">
     
          
        {/* Transactions List */}
        
        <Card my='24px' ms={{ lg: '24px' }} mx='auto' bg={{
    base: 'linear-gradient(159.02deg, #ffdb58 14.25%, #f9d5e5 56.45%, #fde2e4 86.14%)',
  }} >
  <CardHeader mb='12px'>
    <Flex direction='column' w='80%'>
      <Flex
        direction={{ sm: 'column', lg: 'row' }}
        justify={{ sm: 'center', lg: 'space-between' }}
        align={{ sm: 'center' }}
        w='100%'
        my={{ md: '12px' }}
      >
        <div style={{ marginLeft: '45px' }}>
        <Text
          color='black'
          fontSize={{ sm: 'lg', md: 'xl', lg: 'lg' }}
          fontWeight='bold'
        >
          Your progress is a testament to your dedication, keep going!
        </Text></div>
        <Flex align='center'>
          <Icon
            as={FaRegCalendarAlt}
            color='gray.400'
            w='15px'
            h='15px'
            me='6px'
          />
          <Text color='gray.400' fontSize='sm'>
            23 - 30 March 2021
          </Text>
        </Flex>
      </Flex>
    </Flex>
  </CardHeader>
  <CardBody >
    <Flex direction='column' w='80%'>
    <div style={{ marginLeft: '45px' }}>
      <Text color='gray.400' fontSize='xs' mb='18px'>
        NEWEST
      </Text>
      </div>
      <div style={{ marginLeft: '45px' }}> {/* Add margin to the left-most content */}
        {newestTransactions.map((row) => (
          <TransactionRow
            name={row.name}
            logo={row.logo}
            date={row.date}
            price={row.price}
          />
        ))}
      </div>
      <div style={{ marginLeft: '45px' }}>
      <Text color='gray.400' fontSize='xs' my='18px'>
      
        OLDER
      </Text>
      </div>
      <div style={{ marginLeft: '45px' }}> {/* Add margin to the left-most content */}
        {olderTransactions.map((row) => (
          <TransactionRow
            name={row.name}
            logo={row.logo}
            date={row.date}
            price={row.price}
          />
        ))}
      </div>
      
    </Flex>
    <Image
            src={graph}
            alt='Task Details'
            maxW='50%'
            mb='24px'
            style={{ borderRadius: '35px', marginLeft: '35px' }}
          />
  </CardBody>
</Card>
    </Flex>
    
  );
}

export default ClientCogni;
