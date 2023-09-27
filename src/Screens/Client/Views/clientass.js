import React, { useState, useEffect } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';

const Assign = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  function beautifyDate(dateString) {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  useEffect(() => {
    fetch('http://localhost:5000/api/tasks/gettasks')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // console.log(response.json());
        return response.json();
      })
      .then((data) => setTasks(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      <h2>Future Assignment</h2>
      <Flex
        direction='column'
        pt={{ base: '150px', md: '75px' }}
        mx='auto'
        flexWrap='wrap'
      >
        <Card
          my='24px'
          ms={{ lg: '24px' }}
          mx='auto'
          bg={{
            base: `linear-gradient(159.02deg, #a9d3f2 14.25%, #c7e9f7 56.45%, #d2ecf9 86.14%)`,
          }}
        >
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
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {/* {tasks} */}
              {tasks.map((row) => (
                <tr>
                  {/* Assuming each task has a unique _id */}
                  <td align='center'>{row.game}</td>
                  <td align='center'>{beautifyDate(row.dateOfAssignment)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {error && <p>Error fetching tasks: {error}</p>}
        </Card>
      </Flex>
    </div>
  );
};

export default Assign;
