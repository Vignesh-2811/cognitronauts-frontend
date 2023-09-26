import { Flex, Text } from '@chakra-ui/react';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import { useEffect, useState } from 'react';

const Task = () => {
  return (
    <div>
      <h2>Task</h2>
      {/* Your Task details goes here */}
    </div>
  );
};

const TaskCard = ({ title, children }) => (
  <Card
    gridArea={{ md: '2 / 1 / 3 / 2', '2xl': 'auto' }}
    bg={{
      base:
      `linear-gradient(159.02deg, #a9d3f2 14.25%, #c7e9f7 56.45%, #d2ecf9 86.14%)`, // Mild blue gradient
    }}
  >
    <CardHeader mb='65px '>
      <Flex direction='column'>
        <Text fontSize='lg' color='#1c1c1c' fontWeight='bold' mb='6px'>
          {title}
        </Text>
      </Flex>
    </CardHeader>
    <Flex direction='column' justify='center' align='center'>
      <div>{children}</div>
    </Flex>
  </Card>
);

const App = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Fetch the games when the component mounts
    const fetchGames = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/api/games/getGames'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchGames();
  }, []);
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
          Perform the tasks and reshape your mind:)
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
export default App;
0;
