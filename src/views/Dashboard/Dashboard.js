import {
	Box,
	CircularProgress,
	CircularProgressLabel,
	Flex,
	Grid,
	Icon,
	Stack,
	Text
} from '@chakra-ui/react';
// Styles for the circular progressbar
//import medusa from 'assets/img/cardimgfree.png';
// Custom components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import WelcomeCard from 'components/Dashboard/WelcomeCard';
import IconBox from 'components/Icons/IconBox';
import { Link, useHistory } from 'react-router-dom';

// Icons
import TimelineRow from 'components/Tables/TimelineRow';
import { BiHappy } from 'react-icons/bi';
import { connect } from 'react-redux';

import { timelineData } from 'variables/general';

function Dashboard({ userdata }) {
  const history = useHistory();

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
    <Flex flexDirection='column' pt={{ base: '120px', md: '75px' }}>
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
        <Card gridArea={{ md: '2 / 1 / 3 / 2', '2xl': 'auto' }}>
          <CardHeader mb='24px'>
            <Flex direction='column'>
            <Text
        fontSize='lg'
        color='#fff'
        fontWeight='bold'
        mb='6px'
        onClick={handleTaskClick}
        style={{ cursor: 'pointer' }}
      >
        Task Details
      </Text>
              <Text color='gray.400' fontSize='sm'>
                From all sessions
              </Text>
            </Flex>
          </CardHeader>
          <Flex direction='column' justify='center' align='center'>
            <Box zIndex='-1'>
              <CircularProgress
                size={200}
                value={80}
                thickness={6}
                color='#582CFF'
                variant='vision'
                rounded
              >
                <CircularProgressLabel>
                  <IconBox
                    mb='20px'
                    mx='auto'
                    bg='brand.200'
                    borderRadius='50%'
                    w='48px'
                    h='48px'
                  >
                    <Icon as={BiHappy} color='#fff' w='30px' h='30px' />
                  </IconBox>
                </CircularProgressLabel>
              </CircularProgress>
            </Box>
            <Stack
              direction='row'
              spacing={{ sm: '42px', md: '68px' }}
              justify='center'
              maxW={{ sm: '270px', md: '300px', lg: '100%' }}
              mx={{ sm: 'auto', md: '0px' }}
              p='18px 22px'
              bg='linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgba(10, 14, 35) 91.2%)'
              borderRadius='20px'
              position='absolute'
              bottom='5%'
            >
              <Text fontSize='xs' color='gray.400'>
                0%
              </Text>
              <Flex direction='column' align='center' minW='80px'>
                <Text color='#fff' fontSize='28px' fontWeight='bold'>
                  95%
                </Text>
                <Text fontSize='xs' color='gray.400'>
                  Based on likes
                </Text>
              </Flex>
              <Text fontSize='xs' color='gray.400'>
                100%
              </Text>
            </Stack>
          </Flex>
        </Card>
        {/* Future Assignments */}
        <Card gridArea={{ md: '2 / 2 / 3 / 3', '2xl': 'auto' }}>
          <Flex direction='column'>
            <Flex justify='space-between' align='center' mb='40px'>
            <Text
        fontSize='lg'
        color='#fff'
        fontWeight='bold'
        mb='6px'
        onClick={handleAssignClick}
        style={{ cursor: 'pointer' }}
      >
        Future Assignment
      </Text>
            </Flex>
            <Flex direction={{ sm: 'column', md: 'row' }}>
              <Flex
                direction='column'
                me={{ md: '6px', lg: '52px' }}
                mb={{ sm: '16px', md: '0px' }}
              >
                <Text color='#fff' fontSize='lg' fontWeight='bold'>
                  Google Calendars
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Grid>
      <Grid
        templateColumns={{ sm: '1fr', lg: '1.7fr 1.3fr' }}
        maxW={{ sm: '100%', md: '100%' }}
        gap='24px'
        mb='24px'
      >
        {/* EEG Reports */}
        <Card p='16px'>
        <CardBody>
          <Flex direction='column' w='100%'>
            <Flex
              direction='column'
              mt='24px'
              mb='36px'
              alignSelf='flex-start'
            >
              {/* Use Link component to navigate */}
              
              <Text
        fontSize='lg'
        color='#fff'
        fontWeight='bold'
        mb='6px'
        onClick={handleEEGReportsClick}
        style={{ cursor: 'pointer' }}
      >
        EEG Report
      </Text>
             

              <Text fontSize='md' fontWeight='medium' color='gray.400'></Text>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
        {/* Cognitive Training Reports */}
        <Card p='16px'>
          <CardBody>
            <Flex direction='column' w='100%'>
              <Flex
                direction='column'
                mt='24px'
                mb='36px'
                alignSelf='flex-start'
              >
            <Text
        fontSize='lg'
        color='#fff'
        fontWeight='bold'
        mb='6px'
        onClick={handleLinkClick}
        style={{ cursor: 'pointer' }}
      >
        Cognitive Training Report
      </Text>

                <Text fontSize='md' fontWeight='medium' color='gray.400'></Text>
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
        <Card>
          <CardHeader mb='32px'>
            <Flex direction='column'>
              <Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
                Patient Details
              </Text>
              <Flex align='center'>
                <Text fontSize='sm' color='gray.400' fontWeight='normal'></Text>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction='column' lineHeight='21px'>
              {timelineData.map((row, index, arr) => {
                return (
                  <TimelineRow
                    title={row.title}
                    date={row.date}
                    color={row.color}
                    index={index}
                    arrLength={arr.length}
                  />
                );
              })}
            </Flex>
          </CardBody>
        </Card>
        {/* Contact Form */}
        <Card p='16px'>
  <CardBody style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <Flex direction='column' w='100%'>
      <Flex
        direction='column'
        mt='24px'
        mb='36px'
        alignSelf='flex-start'
      >
        <Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
          Mail Us
        </Text>
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
          >
            For any queries, contact:
            <br />
           
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
