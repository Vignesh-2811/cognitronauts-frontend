// Chakra imports
import {
  Avatar,
  Box,
  Button,
  DarkMode,
  Flex,
  Grid,
  Icon,
  Image,
  Text
} from '@chakra-ui/react';
import avatar12 from 'assets/img/avatars/avatar12.jpeg';

// Images
import avatar13 from 'assets/img/avatar13.jpeg';
import bgProfile from 'assets/img/bgProfile.png';
import game2 from 'assets/img/game2.jpeg';
import book1 from 'assets/svg/book1.gif';
import hii from 'assets/svg/hii.gif';
// Custom components
import progress from 'assets/img/progress.jpeg';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import {
  FaCube
} from 'react-icons/fa';
// Icons
import doc1 from 'assets/svg/doc1.gif';
// Data

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
          w={{ sm: '100%',md:'100%', xl: '100%' }}
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
          maxW={{ sm: '325px', md: '725px', lg: '1200px' }}
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
            <Box mb='20px' position='relative' borderRadius='20px' w='410px' h='410px' display='flex'  alignItems='center' paddingLeft='60px'  marginTop='20px'>
                  <Image src={progress} borderRadius='30px' w='80%' h='100%' objectFit='cover' />
            </Box>
            
          </Flex>
        </Card>
        {/* Car Informations */}
        <Card
          p='16px'
          maxH={{ lg: '410px' }}
          maxW={{ sm: '325px', md: '725px', lg: '1200px', xl: '100%' }}
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
                
                  <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                   justifyContent='center'
                   w='100%'
                    h='100%'
                  >
                    <Image
                      src={book1} /* Replace with the actual image source */
                      w='250px' /* Adjust the width as needed */
                      h='250px' /* Adjust the height as needed */
                      borderRadius='50%' /* Optional: Add a circular border to the image */
                      objectFit='cover'
                    />
                  </Box>
                
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
                  bg='linear-gradient(159.02deg, #a9d3f2 14.25%, #c7e9f7 56.45%, #d2ecf9 86.14%)' // Mild blue gradient
                  borderRadius='20px'
                >
                  <Flex direction='column' me='auto'>
                    <Text fontSize='xl' color='gray.400' mb='5px'>
                    *🩺 For Doctors*
                    </Text>
                    <Text color='black' fontSize='20px' fontWeight='bold'>
                    ◽Create patient profiles and assign tasks.
                    </Text>
                    <Text color='black' fontSize='20px' fontWeight='bold'>

                    ◽Prescribe personalized cognitive games.
                    </Text>
                    <Text color='black' fontSize='20px' fontWeight='bold'>

                    ◽Monitor and adjust therapy plans.
                    </Text>
                  </Flex>
                  
                </Flex>
                <Flex
                  align='center'
                  p='10px'
                  pe='0px'
                  justify='space-between'
                  bg='linear-gradient(159.02deg, #a9d3f2 14.25%, #c7e9f7 56.45%, #d2ecf9 86.14%)' // Mild blue gradient
                  borderRadius='20px'
                  w='80%'
                  h='230px'
                >
                <Flex direction='column' me='auto'>
                  <Box mb='20px' position='relative' borderRadius='20px' w='100%' h='300px'>
                    <Image src={doc1} borderRadius='20px' w='90%' h='90%' objectFit='cover'/>
                  </Box>
                  </Flex>
                </Flex>
                
                
                  
                
              </Grid>
            </Flex>
          </CardBody>
        </Card>
        {/* Profile Information */}
        <Card
          bgImage={bgProfile}
          bgSize='cover'
          p='16px'
          maxH={{ md: '410px' }}
          maxW={{ sm: '325px', md: '725px', lg: '1200px' }}
          gridArea={{ xl: '1 / 2 / 2 / 3', '2xl': 'auto' }}
        >
          <CardHeader p='12px 5px' mb='12px'>
            <Text fontSize='lg' color='#fff' fontWeight='bold'>
              ABOUT
            </Text>
          </CardHeader>
          <CardBody px='5px'>
            <Flex direction='column'>
              
            <Text fontSize='xl' color='#fff' fontWeight='bold' mb='22px' fontFamily='Algerian, sans-serif'>
            🌟 Clinicians, get ready!
            </Text>
            <Text fontSize='m' color='#fff' fontWeight='bold' mb='22px' fontFamily='Pacifico, cursive' >
            📈 📈Our platform will offer real-time monitoring, allowing you to track a patient's progress during home-based training and observe changes in their EEG profiles.
            </Text>
            <Text fontSize='m' color='#fff' fontWeight='bold' mb='22px' fontFamily='Pacifico, cursive' >            

            🎯We're in it for the long run! We'll measure and report on the long-term outcomes of this innovative therapy, ensuring ongoing improvement and high-quality care."
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
        <Card gridArea={{ xl: '1 /2 /2/ 5' }} p='8px'>
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
      sm: '1fr 1fr',
      md: '1fr 1fr',
      xl: 'repeat(2, 1fr)', // Added another column
    }}
    templateRows={{
      sm: '1fr auto',
      xl: '1fr',
    }}
    gap='20px'
  >
    <Flex direction='column' alignItems='center' justify='center' maxWidth='300px'>
      <Box mb='20px'>
        <Box mb='20px' position='relative' borderRadius='20px'>
          <Image src={avatar13} borderRadius='20px' w='100%' h='100%' objectFit='cover' paddingLeft='50px' />
        </Box>
      </Box>
      <Flex direction='column'>
        <Text fontSize='10px' color={'gray.400'} mb='10px' paddingLeft='70px'>
          game #1
        </Text>
        <Text fontSize='xl' color='#fff' fontWeight='bold' mb='10px' paddingLeft='70px'>
          CogniRecall Quest
        </Text>
        <Text
          fontSize='m'
          color={'gray.400'}
          fontWeight='400'
          mb='20px'
          paddingLeft='70px'
        >
          "Unlock the Power of Your Mind! Help the Smiley Smile by Concentrating and Having Fun! 😄✨"
        </Text>
      </Flex>
    </Flex>
    <Flex direction='column' alignItems='center' justify='center' maxWidth='300px'>
      <Box mb='40px' position='relative' borderRadius='20px'>
        <Image src={game2} borderRadius='20px' w='350px' h='200px' objectFit='cover' paddingLeft='50px' />
      </Box>
      <Flex direction='column'>
        <Text fontSize='10px' color={'gray.400'} mb='10px' paddingLeft='50px'>
          game #2
        </Text>
        <Text fontSize='xl' color='#fff' fontWeight='bold' mb='10px' paddingLeft='50px'>
          Mnemonic Mind Maze
        </Text>
        <Text fontSize='m' color={'gray.400'} mb='20px' paddingLeft='50px'>
          "Memory Maze Adventure! Sharpen Your Brain by Matching Cards and Mastering the Maze! 🧩🚀"
        </Text>
      </Flex>
    </Flex>
    <Flex direction='column' alignItems='center' justify='center' maxWidth='300px'>
      <Box mb='40px' position='relative' borderRadius='20px'>
        <Image src={hii} borderRadius='20px' w='350px' h='200px' objectFit='cover' paddingLeft='50px' />
      </Box>
    </Flex>
  </Grid>
</CardBody>

        </Card>
      </Grid>
    </Flex>
  );
}

export default Profile;
