
// Chakra imports
import { Flex, Icon, Text } from '@chakra-ui/react';

// Images

// Custom components
import graph from 'assets/img/graph.jpg';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import TransactionRow from 'components/Tables/TransactionRow';
// Icons
import { Image } from '@chakra-ui/react';
import { FaRegCalendarAlt } from 'react-icons/fa';

// Data
import {
  newestTransactions,
  olderTransactions
} from 'variables/general';

function ClientCogni() {
  return (
    <Flex direction='column' pt={{ base: '150px', md: '75px' }} mx='auto' flexWrap="wrap">
      <CardHeader mb='12px'>
    <Flex direction='column' w='100%'>
      <Flex
        direction={{ sm: 'column', lg: 'row' }}
        justify={{ sm: 'center', lg: 'space-between' }}
        align={{ sm: 'center' }}
        w='100%'
        my={{ md: '12px' }}
      >
        <div style={{ marginLeft: '45px' }}>
        <Text
          color='white'
          fontSize={{ sm: 'lg', md: 'xl', lg: 'lg' }}
          fontWeight='bold'
        >
          Your progress is a testament to your dedication, keep going!
        </Text></div>
        <Flex align='center'>
      </Flex>
      </Flex>
    </Flex>

  </CardHeader>
  // ... (previous imports)
  <Flex direction='column' pt={{ base: '150px', md: '75px' }} mx='auto' flexWrap="wrap">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify='space-between'
        w='100%'
      >
        {/* Card 1 */}
        <Card my='24px' ms={{ lg: '24px' }} mx='auto' bg={{
          base: `linear-gradient(159.02deg, #a9d3f2 14.25%, #c7e9f7 56.45%, #d2ecf9 86.14%)`,
        }}
        w='500px'
        p='50px'
        >
          {/* Card 1 content */}
        </Card>

        {/* Card 2 */}
        <Card my='24px' ms={{ lg: '24px' }} mx='auto' bg={{
          base: `linear-gradient(159.02deg, #a9d3f2 14.25%, #c7e9f7 56.45%, #d2ecf9 86.14%)`,
        }}
        w='500px'
        p='50px'
        
        >
          {/* Card 2 content */}
        </Card>
      </Flex>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify='space-between'
        w='100%'
      >
        {/* Card 3 */}
        <Card my='24px' ms={{ lg: '24px' }} mx='auto' bg={{
          base: `linear-gradient(159.02deg, #a9d3f2 14.25%, #c7e9f7 56.45%, #d2ecf9 86.14%)`,
        }}
        w='500px'
        p='50px'>
          {/* Card 3 content */}
        </Card>

        {/* Card 4 */}
        <Card my='24px' ms={{ lg: '24px' }} mx='auto' bg={{
          base: `linear-gradient(159.02deg, #a9d3f2 14.25%, #c7e9f7 56.45%, #d2ecf9 86.14%)`,
        }}
        w='500px'
        p='50px'
        >
          {/* Card 4 content */}
        </Card>
      </Flex>
      </Flex>
</Flex>
 
  
    
      
      

  );
}

export default ClientCogni;
