// Chakra imports
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  DarkMode,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  Switch,
  Text,
} from '@chakra-ui/react';
import avatar11 from 'assets/img/avatars/avatar11.png';
import avatar12 from 'assets/img/avatars/avatar12.jpeg';

// Images
import avatar2 from 'assets/img/avatars/avatar2.png';
import avatar3 from 'assets/img/avatars/avatar3.png';
import avatar4 from 'assets/img/avatars/avatar4.png';
import avatar6 from 'assets/img/avatars/avatar6.png';
import bgProfile from 'assets/img/bgProfile.png';
import ProjectImage1 from 'assets/img/ProjectImage1.png';
import ProjectImage2 from 'assets/img/ProjectImage2.png';
import ProjectImage3 from 'assets/img/ProjectImage3.png';
import avatar13 from 'assets/img/avatar13.jpeg'
import game2 from 'assets/img/game2.jpeg'
// Custom components
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import LineChart from 'components/Charts/LineChart';
import IconBox from 'components/Icons/IconBox';
import { CarIcon, FulgerWhiteIcon } from 'components/Icons/Icons';
import { Separator } from 'components/Separator/Separator';
import { BsArrowRight } from 'react-icons/bs';
import progress from 'assets/img/progress.jpeg'
import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaPencilAlt,
  FaPenFancy,
  FaTwitter,
} from 'react-icons/fa';
// Icons
import { IoDocumentsSharp } from 'react-icons/io5';
// Data
import {
  lineChartDataProfile1,
  lineChartDataProfile2,
  lineChartOptionsProfile1,
  lineChartOptionsProfile2,
} from 'variables/charts';

function Profile() {
  return (
    <Flex direction='column' mt={{ sm: '25px', md: '0px' }}>
      <Box
        mb={{ sm: '24px', md: '50px', xl: '20px' }}
        borderRadius='15px'
        px='0px'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        align='center'
      >
        {/* Header */}
        <Card
          direction={{ sm: 'column', md: 'row' }}
          mx='auto'
          maxH='330px'
          w={{ sm: '90%', xl: '100%' }}
          justifyContent={{ sm: 'center', md: 'space-between' }}
          align='center'
          p='24px'
          borderRadius='20px'
          mt='100px'
        >
          <Flex align='center' direction={{ sm: 'column', md: 'row' }}>
            <Flex
              align='center'
              mb={{ sm: '10px', md: '0px' }}
              direction={{ sm: 'column', md: 'row' }}
              w={{ sm: '100%' }}
              textAlign={{ sm: 'center', md: 'start' }}
            >
              <Avatar
                me={{ md: '22px' }}
                src={avatar12}
                w='100px'
                h='100px'
                borderRadius='15px'
              >
                
              </Avatar>
              <Flex direction='column' maxWidth='100%' my={{ sm: '14px' }}>
                <Text
                  fontSize={{ sm: 'lg', lg: 'xl' }}
                  color='#fff'
                  fontWeight='bold'
                  ms={{ sm: '8px', md: '0px' }}
                >
                  Cognitronauts
                </Text>
                <Text fontSize={{ sm: 'sm', md: 'md' }} color='gray.400'>
                
                </Text>
              </Flex>
            </Flex>
            <Flex
              direction={{ sm: 'column', lg: 'row' }}
              w={{ sm: '100%', md: '50%', lg: 'auto' }}
            >
              <Button
                borderRadius='12px'
                bg='brand.200'
                _hover={{ opacity: '0.8' }}
                _active={{ opacity: '0.9' }}
                me={{ base: 'none', lg: '20px' }}
                leftIcon={<Icon color='white' as={FaCube} me='6px' />}
              >
                <Text fontSize='xs' color='#fff' fontWeight='bold'>
                  OVERVIEW
                </Text>
              </Button>
              
              
            </Flex>
          </Flex>
        </Card>
      </Box>
      <Grid
        templateColumns={{
          sm: '1fr',
          xl: 'repeat(2, 1fr)',
          '2xl': '1fr 2fr 1.2fr',
        }}
        gap='22px'
        mb='24px'
      >
        {/* Welcome Card */}
        <Card
          bgImage={bgProfile}
          bgSize='cover'
          maxW={{ sm: '325px', md: '725px', lg: '980px' }}
          h={{ sm: '270px', lg: '350px', xl: '410px' }}
          gridArea={{ xl: '1 / 1 / 2 / 2', '2xl': 'auto' }}
        >
          <Flex direction='column' h='100%'>
            <Text color='#fff' fontSize='30px' fontWeight='bold' mb='3px'>
            "Chart Your Journey!"
            </Text>
            <Text color='#fff' fontSize='sm' mb='auto'>
            "Unlocking Brighter Minds: Empowering Children with Disabilities through Home-Based Cognitive Retraining."

            </Text>
            <Box mb='20px' position='relative' borderRadius='20px' w='300px' h='290px'>
                  <Image src={progress} borderRadius='20px' w='100%' h='100%' objectFit='cover' />
            </Box>
            <Button
              alignSelf='flex-start'
              variant='no-hover'
              bg='transparent'
              p='0px'
            >
              
              
            </Button>
          </Flex>
        </Card>
        {/* Car Informations */}
        <Card
          p='16px'
          maxH={{ lg: '410px' }}
          maxW={{ sm: '325px', md: '725px', lg: '980px', xl: '100%' }}
          gridArea={{ xl: '2 / 1 / 3 / 3', '2xl': 'auto' }}
        >
          <CardHeader p='12px 5px' mb='12px'>
            <Flex direction='column'>
              <Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
              Guidance Handbook
              </Text>
              <Text fontSize='sm' color='gray.400'>
              "Hey there, young adventurers! Follow these simple steps to embark on an exciting journey through our platform. Explore fun games, boost your memory, and watch yourself grow into an even more amazing version of YOU!"
              </Text>
            </Flex>
          </CardHeader>
          <CardBody w='100%'>
            <Flex w='100%' direction={{ sm: 'column', md: 'row' }}>
              <Flex
                direction='column'
                align='center'
                me={{ md: '16px', lg: '50px' }}
                mb={{ sm: '12px', md: '0px' }}
              >
                <CircularProgress
                  size={200}
                  value={68}
                  thickness={6}
                  color='green.400'
                  variant='vision'
                >
                  <CircularProgressLabel>
                    <Flex direction='column' justify='center' align='center'>
                      <Text
                        color='#fff'
                        fontSize='36px'
                        fontWeight='bold'
                        mb='6px'
                      >
                        YOUR
                      </Text>
                      <Text color='gray.400' fontSize='xl'>
                        Progress!
                      </Text>
                    </Flex>
                  </CircularProgressLabel>
                </CircularProgress>
                <Flex direction='column' mt='18px' align='center'>
                  
                  
                </Flex>
              </Flex>
              <Grid
                templateColumns={{ sm: '1fr', md: 'repeat(2, 1fr)' }}
                gap='24px'
                w='100%'
                alignSelf='flex-start'
              >
                <Flex
                  align='center'
                  p='18px'
                  justify='space-between'
                  bg='linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%)'
                  borderRadius='20px'
                >
                  <Flex direction='column' me='auto'>
                    <Text fontSize='xl' color='gray.400' mb='3px'>
                    *🩺 For Doctors*
                    </Text>
                    <Text color='#fff' fontSize='20px' fontWeight='bold'>
                    ◽Create patient profiles and assign tasks.
                    </Text>
                    <Text color='#fff' fontSize='20px' fontWeight='bold'>

                    ◽Prescribe personalized cognitive games.
                    </Text>
                    <Text color='#fff' fontSize='20px' fontWeight='bold'>

                    ◽Monitor and adjust therapy plans.
                    </Text>
                  </Flex>
                  
                </Flex>
                <Flex
                  align='center'
                  p='18px'
                  pe='0px'
                  justify='space-between'
                  bg='linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%)'
                  borderRadius='20px'
                >
                  <Flex direction='column' me='auto'>
                    <Text fontSize='xl' color='gray.400' mb='3px'>
                      *🧠For Patients*
                    </Text>
                    <Text color='#fff' fontSize='20px' fontWeight='bold'>
                    ◽Access your profile and play prescribed games.
                    </Text>
                    <Text color='#fff' fontSize='20px' fontWeight='bold'>
                    ◽Complete assigned tasks.
                    </Text>
                    <Text color='#fff' fontSize='20px' fontWeight='bold'>
                    ◽Communicate progress with your doctor.
                    </Text>

                  </Flex>
                  
                </Flex>
                
                
                  
                
              </Grid>
            </Flex>
          </CardBody>
        </Card>
        {/* Profile Information */}
        <Card
          p='16px'
          maxH={{ md: '410px' }}
          maxW={{ sm: '325px', md: '725px', lg: '980px' }}
          gridArea={{ xl: '1 / 2 / 2 / 3', '2xl': 'auto' }}
        >
          <CardHeader p='12px 5px' mb='12px'>
            <Text fontSize='lg' color='#fff' fontWeight='bold'>
              ABOUT
            </Text>
          </CardHeader>
          <CardBody px='5px'>
            <Flex direction='column'>
              <Text fontSize='sm' color={'gray.400'} fontWeight='400' mb='15px'>
              Our goal is to create a cutting-edge software solution that combines EEG Neuro-feedback with home-based cognitive retraining, revolutionizing therapy for children with developmental disabilities.

                We aim to modernize therapeutic strategies, enhancing cognitive skills like attention, memory, reasoning, and problem-solving in these children.

                We're all about making therapy engaging! We plan to incorporate gamified elements to keep young patients motivated and committed.
                </Text>
              <Text fontSize='m' color={'gray.400'} fontWeight='400' mb='22px'>

                Clinicians, get ready! Our platform will offer real-time monitoring, allowing you to track a patient's progress during home-based training and observe changes in their EEG profiles.

                We're in it for the long run! We'll measure and report on the long-term outcomes of this innovative therapy, ensuring ongoing improvement and high-quality care."
              </Text>
              
              
              
              
                  
                  
                              
            
            </Flex>
          </CardBody>
        </Card>
      </Grid>
      <Grid templateColumns={{ sm: '1fr', xl: '1fr 3fr' }} gap='20px'>
        <DarkMode>
          {/* Platform Settings */}
          <Card p='16px' gridArea={{ xl: '1 / 1 / 2 / 2' }}>
            <CardHeader p='12px 5px' mb='12px'>
              <Text 
              fontSize='2xl' 
              color='white' 
              fontWeight='bold'
              fontFamily='Bangers, sans-serif'
              fontStyle='italic'
              bgGradient='linear(to-l, #FFC0CB, #FFFFFF)'
              bgClip='text'
              textShadow='2px 2px 4px rgba(0, 0, 0, 0.5)'
>
              
              "Curious about how these games can help you conquer developmental challenges?
               Explore them and enjoy the journey to improvement!"
              </Text>
            </CardHeader>
            <CardBody px='5px'>             
            </CardBody>
          </Card>
        </DarkMode>
        {/* Projects */}
        <Card gridArea={{ xl: '1 /2 /2/ 5' }} p='16px'>
          <CardHeader p='12px 5px' mb='12px'>
            <Flex direction='column'>
            <Text
             fontSize='lg'
             fontWeight='bold'
             fontFamily='Comic Sans MS, sans-serif'
             color='white'
             bgGradient='linear(to-l, #7928CA, #FF0080)'
             bgClip='text'
             textShadow='2px 2px 4px rgba(0, 0, 0, 0.5)'
             fontStyle='italic'
             transform='skewX(-10deg)'
            >               
            Intellect Island: Play and Progress!
            </Text>

              <Text fontSize='sm' color={'gray.400'} fontWeight='400'>
                
              </Text>
            </Flex>
          </CardHeader>
          <CardBody px='5px'>
            <Grid
              templateColumns={{
                sm: '1fr',
                md: '1fr 1fr',
                xl: 'repeat(3, 1fr)',
              }}
              templateRows={{
                sm: '1fr 1fr 1fr auto',
                md: '1fr 1fr',
                xl: '1fr',
              }}
              gap='24px'
            >
              <Flex direction='column'>
                <Box mb='20px' position='relative' borderRadius='20px'>
                  <Image src={avatar13} borderRadius='20px' w='100%' h='100%' objectFit='cover' />
                </Box>
                <Flex direction='column'>
                  <Text fontSize='10px' color={'gray.400'} mb='10px'>
                    game #1
                  </Text>
                  <Text fontSize='xl' color='#fff' fontWeight='bold' mb='10px'>
                  CogniRecall Quest
                  </Text>
                  <Text
                    fontSize='sm'
                    color={'gray.400'}
                    fontWeight='400'
                    mb='20px'
                  >
                   "Unlock the Power of Your Mind! Help the Smiley Smile by Concentrating and Having Fun! 😄✨"
                  </Text>
                  <Flex justifyContent='space-between' mt='auto'>
                    
                    
                  </Flex>
                </Flex>
              </Flex>
              <Flex direction='column'>
                <Box mb='40px' position='relative' borderRadius='20px'>
                  <Image src={game2} borderRadius='20px' w='100%' h='100%' objectFit='cover' />
                </Box>
                <Flex direction='column'>
                  <Text fontSize='10px' color={'gray.400'} mb='10px'>
                    game #2
                  </Text>
                  <Text fontSize='xl' color='#fff' fontWeight='bold' mb='10px'>
                  Mnemonic Mind Maze
                  </Text>
                  <Text fontSize='sm' color={'gray.400'} mb='20px'>
                  "Memory Maze Adventure! Sharpen Your Brain by Matching Cards and Mastering the Maze! 🧩🚀"
                  </Text>
                  <Flex justifyContent='space-between' mt='auto'>
                    
                    
                  </Flex>
                </Flex>
              </Flex>
              
              
            </Grid>
          </CardBody>
        </Card>
      </Grid>
    </Flex>
  );
}

export default Profile;
