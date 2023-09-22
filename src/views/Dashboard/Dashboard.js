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
import eeg from 'assets/img/eeg.jpg';
import AuthBanner from 'components/Auth/AuthBanner';
import { Image } from '@chakra-ui/react';
import cogni from 'assets/img/cogni.jpg';
import assign from 'assets/img/assign.jpg';
import task from 'assets/img/task.jpg';
import mail from 'assets/img/mail.jpg';
import patient from 'assets/img/patient.jpg';


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
            </Flex>
            
          </CardHeader>
          <Image src={task} alt='Task Details' maxW='70%' mb='24px' style={{ borderRadius: '35px', marginLeft: '35px' }}  />

                  </Card>
        {/* Future Assignments */}
        <Card gridArea={{ md: '2 / 2 / 3 / 3', '2xl': 'auto' }}>
  <Flex direction='column'>
    <Text
      fontSize='lg'
      color='#fff'
      fontWeight='bold'
      mb='6px'
      onClick={handleAssignClick}
      style={{ cursor: 'pointer', alignSelf: 'flex-start' }} // Align text to the top left
    >
      Future Assignment
    </Text>
    <Flex justify='center' align='center' mb='40px'> {/* Center-align the content */}
      <Image
        src={assign}
        alt='Future Assignment'
        maxW='70%'
        mb='24px'
        style={{ borderRadius: '35px' }}
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
      <Image src={eeg} alt='EEG Report' maxW='100%' mb='24px' style={{ borderRadius: '35px' }} />

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
      <Image src={cogni} alt='Cognitive Training' maxW='100%' mb='24px' style={{ borderRadius: '35px' }} />

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
    <Flex direction='row' alignItems='center'>
      <Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
        Patient Details
      </Text>
      <Image src={patient} alt='Patient Details' maxW='100px' ml='55px' style={{ borderRadius: '35px' }} />
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
        <Image src={mail} alt='Mail Us' maxW='100%' mb='24px' style={{ borderRadius: '35px' }} />

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
            2021ad0414@svce.ac.in
           
           
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
