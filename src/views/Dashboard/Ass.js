import { Flex, Text } from '@chakra-ui/react';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import AssRow from 'components/Tables/AssRow'; // Import AssRow from the correct path
import { TaskData } from 'variables/general';

const Assign = () => {
  return (
    <div>
       
      <h2>Future Assignment</h2>
      {/* Your Assignment details go here */}
      <Flex direction='column' pt={{ base: '150px', md: '75px' }} mx='auto' flexWrap="wrap">
        {/* Assignment List */}
        <Card my='24px' ms={{ lg: '24px' }} mx='auto'
        bg={{
            base:
            `linear-gradient(159.02deg, #a9d3f2 14.25%, #c7e9f7 56.45%, #d2ecf9 86.14%)`, // Mild blue gradient,
          }}>
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
                  </Text>
                </div>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction='column' w='80%'>
              <div style={{ marginLeft: '45px' }}>
                <Text color='white' fontSize='xs' mb='18px'>
                  NEWEST
                </Text>
              </div>
              <div style={{ marginLeft: '45px' }}>
                {/* Add margin to the left-most content */}
                {TaskData.map((row) => (
                  <AssRow
                    key={row.name}
                    logo={row.logo}
                  />
                ))}
              </div>
            </Flex>
          </CardBody>
        </Card>
      </Flex>
    </div>
  );
};

export default Assign;
