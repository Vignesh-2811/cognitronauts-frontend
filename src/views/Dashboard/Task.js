import React from 'react';
import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import { useState } from 'react';
import { useEffect } from 'react';

const Task = () => {
  return (
    <div>
      <h2>Task</h2>
      {/* Your Task details goes here */}
    </div>
  );
};

const TaskCard = ({ title, children }) => (
  <Card gridArea={{ md: '2 / 1 / 3 / 2', '2xl': 'auto' }}>
    <CardHeader mb='65px '>
      <Flex direction='column'>
        <Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
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
    // <div>
    //   <h2>Main Content</h2>
    //   <Grid templateColumns='1fr 1fr' gap={10} justify='center' align='center'>
    //     <GridItem colSpan={2}>
    //       <TaskCard title='All Games'>
    //         <ul style={{ listStyle: 'none', padding: 0 }}>
    //           {games.map((game) => (
    //             <li key={game._id} style={{ marginBottom: '20px' }}>
    //               <h3>{game.title}</h3>
    //               <p>
    //                 <strong>Description:</strong> {game.description}
    //               </p>
    //               <p>
    //                 <strong>Category:</strong> {game.category}
    //               </p>
    //               <p>
    //                 <strong>Instructions:</strong> {game.instructions}
    //               </p>
    //               <hr style={{ width: '80%', opacity: 0.5 }} />
    //             </li>
    //           ))}
    //         </ul>
    //       </TaskCard>
    //     </GridItem>
    //   </Grid>
    // </div>
    <div>
      <h2>Main Content</h2>
      <Grid
        templateColumns='repeat(1, 1fr)'
        gap={10}
        justify='center'
        align='center'
      >
        <GridItem colSpan={2}>
          {games.map((game) => (
            <GridItem key={game._id}>
              <TaskCard title={game.title}></TaskCard>
            </GridItem>
          ))}
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
