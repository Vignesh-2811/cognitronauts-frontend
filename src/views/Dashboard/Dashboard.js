import {
  Flex,
  Grid,
  Text
} from '@chakra-ui/react';
// Styles for the circular progressbar
//import medusa from 'assets/img/cardimgfree.png';
// Custom components
import { Image } from '@chakra-ui/react';
import assign from 'assets/img/ass.jpg';
import cogni from 'assets/img/cogni.jpg';

import patient from 'assets/img/patient.jpg';
import task from 'assets/img/tasks.png';
import mail12 from 'assets/svg/mail12.gif';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import WelcomeCard from 'components/Dashboard/WelcomeCard';
import { useHistory } from 'react-router-dom';

// Icons
import TimelineRow from 'components/Tables/TimelineRow';
import { connect } from 'react-redux';

import { useEffect, useState } from 'react';
import { timelineData } from 'variables/general';

function Dashboard({ userdata, userId }) {
  const history = useHistory();
  const [patientData, setPatientData] = useState(null);
  console.log(userId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/users/getuser/${userId}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setPatientData(data);
        console.log(userId);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  const handleLinkClick = () => {
    // Use history.push() to navigate to the "/admin/billing" route
    history.push('/admin/billing');
    console.log('in redirection');
  };
  const handleEEGReportsClick = () => {
    // Use history.push() to navigate to the "/admin/eeg-reports" route
    history.push('/admin/eeg');
  };

  const handleTaskClick = () => {
    // Use history.push() to navigate to the "/admin/eeg-reports" route
    history.push('/admin/task');
  };

  const handleAssignClick = () => {
    // Use history.push() to navigate to the "/admin/eeg-reports" route
    history.push('/admin/assign');
  };

  return (
    <Flex
      flexDirection='column'
      pt={{ base: '120px', md: '75px' }}
      bg='dark blue.100'
    >
      <Grid
        templateColumns={{ sm: '1fr', md: '1fr 1fr', '2xl': '2fr 1.2fr 1.5fr' }}
        my='26px'
        gap='18px'
      >
        {/* Welcome Card */}
        <WelcomeCard
          firstName={userdata.firstName}
          lastName={userdata.lastName}
        />
        {/* Task Details */}
        <Card
          gridArea={{ md: '2 / 1 / 3 / 2', '2xl': 'auto' }}
          bg={{
            base:
            `linear-gradient(159.02deg, #a9d3f2 14.25%, #c7e9f7 56.45%, #d2ecf9 86.14%)`, // Mild blue gradient,
          }}
        >
          <CardHeader mb='24px'>
            <Flex direction='column'>
              <Text
                fontSize='lg'
                color='black'
                fontWeight='bold'
                mb='6px'
                onClick={handleTaskClick}
                style={{ cursor: 'pointer' }}
              >
                Task Details
              </Text>
            </Flex>
          </CardHeader>
          <Image
            src={task}
            alt='Task Details'
            maxW='70%'
            mb='24px'
            style={{ borderRadius: '35px', marginLeft: '35px' }}
          />
        </Card>
        {/* Future Assignments */}
        <Card
          gridArea={{ md: '2 / 2 / 3 / 3', '2xl': 'auto' }}
          bg={{
            base:
            `linear-gradient(159.02deg, #a9d3f2 14.25%, #c7e9f7 56.45%, #d2ecf9 86.14%)`, // Mild blue gradient,
          }}
        >
          <Flex direction='column'>
            <Text
              fontSize='lg'
              color='black'
              fontWeight='bold'
              mb='6px'
              onClick={handleAssignClick}
              style={{ cursor: 'pointer'}} // Align text to the top left
            >
              Future Assignments
            </Text>
            <Flex justify='center' align='center' mb='40px'>
              {' '}
              {/* Center-align the content */}
              <Image
                src={assign}
                alt='Future Assignment'
                maxW='70%'
                mb='24px'
                style={{ borderRadius: '40px' }}
              />
            </Flex>
            <Flex direction={{ sm: 'column', md: 'row' }}>
              <Flex
                direction='column'
                me={{ md: '6px', lg: '52px' }}
                mb={{ sm: '16px', md: '0px' }}
              >
                {/* Your content here */}
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Grid>
      <Grid
        templateColumns={{ sm: '1fr', lg: '1fr' }}
        maxW={{ sm: '100%', md: '100%' }}
        gap='24px'
        mb='24px'
      >      

        {/* Cognitive Training Reports */}
        <Card
          p='10px'
          bg={{
            base:
            `linear-gradient(159.02deg, #a9d3f2 14.25%, #c7e9f7 56.45%, #d2ecf9 86.14%)`, // Mild blue gradient,
          }}
          w='100%'
        >
        <CardBody>
  <Flex
    direction='column'
    w='100%'
    alignItems='center' // Center-align content horizontally
  >
    <Flex
      direction='column'
      mt='20px'
      mb='20px'
      alignSelf='center'
      justifyContent='center' // Center-align content horizontally within this container
    >
      <Text
        fontSize='lg'
        color='black'
        fontWeight='bold'
        mb='4px'
        onClick={handleLinkClick}
        style={{ cursor: 'pointer' }}
      >
        Cognitive Training Report
      </Text>
      <Flex justify='center' align='center' mb='40px'>
      <Image
        src={cogni}
        align='center'
        alt='Cognitive Training'
        maxW='100%'
        mb='20px'
        style={{ borderRadius: '25px' }}
      />
</Flex>
      <Text fontSize='md' fontWeight='medium' color='black'></Text>
    </Flex>
  </Flex>
</CardBody>

        </Card>
      </Grid>
      <Grid
        templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '2fr 1fr' }}
        gap='24px'
      >
        {/*Patient Details */}
        <Card
          bg={{
            base:
            `linear-gradient(159.02deg, #a9d3f2 14.25%, #c7e9f7 56.45%, #d2ecf9 86.14%)`, // Mild blue gradient,
          }}
        >
          <CardHeader mb='32px'>
            <Flex direction='row' alignItems='center'>
              <Text fontSize='lg' color='black' fontWeight='bold' mb='6px'>
                Patient Details
              </Text>
              <Image
                src={patient}
                alt='Patient Details'
                maxW='100px'
                ml='55px'
                style={{ borderRadius: '35px' }}
              />
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction='column' lineHeight='21px'>
              {timelineData.map((row, index, arr) => {
                return (
                  <Flex direction='row' alignItems='center' key={index}>
                    <TimelineRow
                      title={row.title}
                      date={row.date}
                      color={row.color}
                      index={index}
                      arrLength={arr.length}
                    />
                    {/* Additional content for each timeline row can be added here */}
                  </Flex>
                );
              })}
            </Flex>
          </CardBody>
        </Card>

        {/* Contact Form */}
        <Card
          p='16px'
          bg={{
            base:
            `linear-gradient(159.02deg, #a9d3f2 14.25%, #c7e9f7 56.45%, #d2ecf9 86.14%)`, // Mild blue gradient,
          }}
        >
          <CardBody
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Flex direction='column' w='100%'>
              <Flex
                direction='column'
                mt='24px'
                mb='36px'
                alignSelf='flex-start'
              >
                <Text fontSize='lg' color='black' fontWeight='bold' mb='6px'>
                  Mail Us
                </Text>
                <Image
                  src={mail12}
                  alt='Mail Us'
                  maxW='100%'
                  mb='24px'
                  style={{ borderRadius: '35px' }}
                />

                {/* Corrected the email link */}
                <a
                  href='mailto:2021ad0414@svce.ac.in'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <Text
                    fontSize='18'
                    fontWeight='normal'
                    mb='auto'
                    style={{ fontStyle: 'italic' }}
                    color='black'
                  >
                    For any queries, contact: 2021ad0414@svce.ac.in
                  </Text>
                </a>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Flex>
  );
}

const mapStateToProps = (state) => {
  return {
    userdata: state.user.userData,
  };
};

export default connect(mapStateToProps)(Dashboard);
