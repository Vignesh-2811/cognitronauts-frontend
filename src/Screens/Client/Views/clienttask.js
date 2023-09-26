import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import mazeimg from '../../../assets/img/mazeimg.jpg';
import memorygame from '../../../assets/img/memorygame.jpg';

const ClientTask = () => {
  return (
    <div>
      {/* Your Task details goes here */}
    </div>
  );
};

const TaskCard = ({ title, children }) => (
  <Card gridArea={{ md: '2 / 1 / 3 / 2', '2xl': 'auto' }} bg={{
    base: `linear-gradient(159.02deg, #a9d3f2 14.25%, #c7e9f7 56.45%, #d2ecf9 86.14%)`, // Mild blue gradient,
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

const ClientApp = () => {
  return (
    <div>
      <h2>Main Content</h2>
      {/* Your main content here */}
      <Grid templateColumns="1fr 1fr" gap={10} justify="center" align="center">
        <GridItem colSpan={1}>
          <TaskCard title="Task 1">
            <img src={mazeimg} />
            {/* Add your content for Task 1 here */}
          </TaskCard>
        </GridItem>
        <GridItem colSpan={1}>
          <TaskCard title="Task 2">
          <img src={memorygame} height= {100}/>
            {/* Add your content for Task 2 here */}
          </TaskCard>
        </GridItem>
      </Grid>
    </div>
  );
};

export default ClientApp;
