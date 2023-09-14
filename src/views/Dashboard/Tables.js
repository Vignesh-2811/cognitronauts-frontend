import React from 'react';

// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Icon,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

// Custom components
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';

// Table Components
import TablesProjectRow from 'components/Tables/TablesProjectRow';
import TablesTableRow from 'components/Tables/TablesTableRow';

// Data
import { tablesProjectData, tablesTableData } from 'variables/general';

// Icons
import { AiFillCheckCircle } from 'react-icons/ai';

function Tables() {
  return (
    <Flex direction='column' pt={{ base: '120px', md: '75px' }}>
      {/* Authors Table */}
      
      {/* Doctor Dashboard */}
      <Card my='22px' overflowX={{ sm: 'scroll', xl: 'hidden' }} pb='0px'>
        <CardHeader p='6px 0px 22px 0px'>
          <Flex direction='column'>
            <Text fontSize='lg' color='#fff' fontWeight='bold' mb='.5rem'>
              Doctor Dashboard
            </Text>
            <Flex align='center'>
            
             
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant='simple' color='#fff'>
          <Thead>
              <Tr my='.8rem' ps='0px'>
                <Th
                  ps='0px'
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'
                >
                  Name
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'
                >
                  Contact
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'
                >
                  Profile Page
                </Th>
                <Th borderBottomColor='#56577A'></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesProjectData.map((row, index, arr) => {
                return (
                  <TablesProjectRow
                  name={row.name}
                  logo={row.logo}
                  profile={row.profile}
                  contact={row.contact}
                 
                    
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Tables;
