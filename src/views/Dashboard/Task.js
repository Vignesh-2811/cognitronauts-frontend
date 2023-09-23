import React from 'react';
import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';

const Task = () => {
  return (
    <div>
      <h2>Task</h2>
      {/* Your Task details goes here */}
    </div>
  );
};

const TaskCard = ({ title, children }) => (
  <Card gridArea={{ md: '2 / 1 / 3 / 2', '2xl': 'auto' }} bg={{
    base: 'linear-gradient(159.02deg, #fddba1 14.0%, #ffc0e0 56.45%, #ffb9c0 86.0%)',
  }}>
    <CardHeader mb="65px ">
      <Flex direction="column">
        <Text fontSize="lg" color="black" fontWeight="bold" mb="6px">
          {title}
        </Text>
      </Flex>
    </CardHeader>
    <Flex direction="column" justify="center" align="center">
      <div>{children}</div>
    </Flex>
  </Card>
);

const App = () => {
  return (
    <div>
      
      {/* Your main content here */}
      <Grid templateColumns="1fr 1fr" gap={10} justify="center" align="center" >
        <GridItem colSpan={1}>
          <TaskCard title="Task 1" >
            {/* Add your content for Task 1 here */}
          </TaskCard>
        </GridItem>
        <GridItem colSpan={1}>
          <TaskCard title="Task 2">
            {/* Add your content for Task 2 here */}
          </TaskCard>
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
