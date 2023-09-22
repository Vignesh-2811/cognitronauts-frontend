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
  <Card gridArea={{ md: '2 / 1 / 3 / 2', '2xl': 'auto' }}>
    <CardHeader mb="65px ">
      <Flex direction="column">
        <Text fontSize="lg" color="#fff" fontWeight="bold" mb="6px">
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
      <h2>Main Content</h2>
      {/* Your main content here */}
      <Grid templateColumns="1fr 1fr" gap={10} justify="center" align="center">
        <GridItem colSpan={1}>
          <TaskCard title="Task 1">
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
