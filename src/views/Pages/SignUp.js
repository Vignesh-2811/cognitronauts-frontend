// Chakra imports
import {
  Box,
  Button,
  DarkMode,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Select,
  Switch,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { register } from 'redux/actions/auth';
import 'react-datepicker/dist/react-datepicker.css';
// Icons
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
// Custom Components
import AuthFooter from 'components/Footer/AuthFooter';
import GradientBorder from 'components/GradientBorder/GradientBorder';

// Assets
import signUpImage from 'assets/img/signup.png';

function SignUp({ register }) {
  const titleColor = 'white';
  const textColor = 'gray.400';

  const [selectedDate, setSelectedDate] = useState(null);

  // Handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      // Handle the selected date in real-time
      console.log('Selected Date:', date);
    } else {
      console.log('Date cleared.');
    }
  };

  const onSubmit = async (data) => {
    console.log(object);
  };

  return (
    <Flex position='relative' overflow={{ lg: 'hidden' }}>
      <Flex
        flexDirection='column'
        h={{ sm: 'initial', md: 'unset' }}
        w={{ base: '90%' }}
        maxW='1044px'
        mx='auto'
        justifyContent='space-between'
        pt={{ sm: '100px', md: '0px' }}
        me={{ base: 'auto', lg: '50px', xl: 'auto' }}
      >
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: 'none' }}
          flexDirection='column'
          mx={{ base: 'auto', lg: 'unset' }}
          ms={{ base: 'auto', lg: 'auto' }}
          mb='50px'
          w={{ base: '100%', md: '50%', lg: '42%' }}
        >
          <Flex
            direction='column'
            textAlign='center'
            justifyContent='center'
            align='center'
            mt={{ base: '60px', md: '140px', lg: '200px' }}
            mb='50px'
          >
            <Text
              fontSize='4xl'
              lineHeight='39px'
              color='white'
              fontWeight='bold'
            >
              Welcome!
            </Text>
          </Flex>
          <GradientBorder p='2px' me={{ base: 'none', lg: '30px', xl: 'none' }}>
            <Flex
              background='transparent'
              borderRadius='30px'
              direction='column'
              p='40px'
              minW={{ base: 'unset', md: '430px', xl: '450px' }}
              w='100%'
              mx={{ base: '0px' }}
              bg={{
                base: 'rgb(19,21,56)',
              }}
            >
              {/*                 
              <Text
                fontSize='xl'
                color={textColor}
                fontWeight='bold'
                textAlign='center'
                mb='22px'>
                Register With
              </Text> */}
              <HStack spacing='15px' justify='center' mb='22px'>
                {/* <GradientBorder borderRadius='15px'>
                  <Flex
                    _hover={{ filter: "brightness(120%)" }}
                    transition='all .25s ease'
                    cursor='pointer'
                    justify='center'
                    align='center'
                    bg='rgb(19,21,54)'
                    w='71px'
                    h='71px'
                    borderRadius='15px'>
                    <Link href='#'>
                      <Icon
                        color={titleColor}
                        as={FaFacebook}
                        w='30px'
                        h='30px'
                        _hover={{ filter: "brightness(120%)" }}
                      />
                    </Link>
                  </Flex>
                </GradientBorder> */}
                {/* <GradientBorder borderRadius='15px'>
                  <Flex
                    _hover={{ filter: "brightness(120%)" }}
                    transition='all .25s ease'
                    cursor='pointer'
                    justify='center'
                    align='center'
                    bg='rgb(19,21,54)'
                    w='71px'
                    h='71px'
                    borderRadius='15px'>
                    <Link href='#'>
                      <Icon
                        color={titleColor}
                        as={FaApple}
                        w='30px'
                        h='30px'
                        _hover={{ filter: "brightness(120%)" }}
                      />
                    </Link>
                  </Flex>
                </GradientBorder> */}
                {/* <GradientBorder borderRadius='15px'>
                  <Flex
                    _hover={{ filter: "brightness(120%)" }}
                    transition='all .25s ease'
                    cursor='pointer'
                    justify='center'
                    align='center'
                    bg='rgb(19,21,54)'
                    w='71px'
                    h='71px'
                    borderRadius='15px'>
                    <Link href='#'>
                      <Icon
                        color={titleColor}
                        as={FaGoogle}
                        w='30px'
                        h='30px'
                        _hover={{ filter: "brightness(120%)" }}
                      />
                    </Link>
                  </Flex>
                </GradientBorder> */}
              </HStack>
              {/* <Text
                fontSize='lg'
                color='gray.400'
                fontWeight='bold'
                textAlign='center'
                mb='22px'
              >
                or
              </Text> */}
              <FormControl>
                <FormLabel
                  color={titleColor}
                  ms='4px'
                  fontSize='sm'
                  fontWeight='normal'
                >
                  Role
                </FormLabel>
                <GradientBorder
                  mb='24px'
                  h='50px'
                  w={{ base: '100%', lg: 'fit-content' }}
                  borderRadius='20px'
                >
                  <Select
                    color={titleColor}
                    bg={{
                      base: 'rgb(19,21,54)',
                    }}
                    border='transparent'
                    borderRadius='20px'
                    fontSize='sm'
                    size='lg'
                    w={{ base: '100%', md: '346px' }}
                    maxW='100%'
                    h='46px'
                    defaultValue=''
                  >
                    <option value='Patient' style={{ color: 'black' }}>
                      Patient
                    </option>
                    <option value='Doctor' style={{ color: 'black' }}>
                      Doctor
                    </option>
                  </Select>
                </GradientBorder>
                <FormLabel
                  color={titleColor}
                  ms='4px'
                  fontSize='sm'
                  fontWeight='normal'
                >
                  First Name
                </FormLabel>
                <GradientBorder
                  mb='24px'
                  h='50px'
                  w={{ base: '100%', lg: 'fit-content' }}
                  borderRadius='20px'
                >
                  <Input
                    color={titleColor}
                    bg={{
                      base: 'rgb(19,21,54)',
                    }}
                    border='transparent'
                    borderRadius='20px'
                    fontSize='sm'
                    size='lg'
                    w={{ base: '100%', md: '346px' }}
                    maxW='100%'
                    h='46px'
                    type='text'
                    placeholder='Your first name'
                  />
                </GradientBorder>
                <FormLabel
                  color={titleColor}
                  ms='4px'
                  fontSize='sm'
                  fontWeight='normal'
                >
                  Last Name
                </FormLabel>
                <GradientBorder
                  mb='24px'
                  h='50px'
                  w={{ base: '100%', lg: 'fit-content' }}
                  borderRadius='20px'
                >
                  <Input
                    color={titleColor}
                    bg={{
                      base: 'rgb(19,21,54)',
                    }}
                    border='transparent'
                    borderRadius='20px'
                    fontSize='sm'
                    size='lg'
                    w={{ base: '100%', md: '346px' }}
                    maxW='100%'
                    h='46px'
                    type='text'
                    placeholder='Your last name'
                  />
                </GradientBorder>

                <FormLabel
                  color={titleColor}
                  ms='4px'
                  fontSize='sm'
                  fontWeight='normal'
                >
                  Date Of Birth
                </FormLabel>

                <GradientBorder
                  mb='24px'
                  h='25px'
                  w={{ base: '50%', lg: 'fit-content' }}
                  borderRadius='20px'
                >
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat='dd/MM/yyyy'
                    // style={{ marginTop: '2px' }}
                  />
                </GradientBorder>
                <FormLabel
                  color={titleColor}
                  ms='4px'
                  fontSize='sm'
                  fontWeight='normal'
                >
                  Email
                </FormLabel>
                <GradientBorder
                  mb='24px'
                  h='50px'
                  w={{ base: '100%', lg: 'fit-content' }}
                  borderRadius='20px'
                >
                  <Input
                    color={titleColor}
                    bg={{
                      base: 'rgb(19,21,54)',
                    }}
                    border='transparent'
                    borderRadius='20px'
                    fontSize='sm'
                    size='lg'
                    w={{ base: '100%', md: '346px' }}
                    maxW='100%'
                    h='46px'
                    type='email'
                    placeholder='Your email address'
                  />
                </GradientBorder>
                <FormLabel
                  color={titleColor}
                  ms='4px'
                  fontSize='sm'
                  fontWeight='normal'
                >
                  Phone Number
                </FormLabel>
                <GradientBorder
                  mb='24px'
                  h='50px'
                  w={{ base: '100%', lg: 'fit-content' }}
                  borderRadius='20px'
                >
                  <Input
                    color={titleColor}
                    bg={{
                      base: 'rgb(19,21,54)',
                    }}
                    border='transparent'
                    borderRadius='20px'
                    fontSize='sm'
                    size='lg'
                    w={{ base: '100%', md: '346px' }}
                    maxW='100%'
                    h='46px'
                    type='text'
                    placeholder='Your phone number'
                  />
                </GradientBorder>
                <FormLabel
                  color={titleColor}
                  ms='4px'
                  fontSize='sm'
                  fontWeight='normal'
                >
                  Password
                </FormLabel>
                <GradientBorder
                  mb='24px'
                  h='50px'
                  w={{ base: '100%', lg: 'fit-content' }}
                  borderRadius='20px'
                >
                  <Input
                    color={titleColor}
                    bg={{
                      base: 'rgb(19,21,54)',
                    }}
                    border='transparent'
                    borderRadius='20px'
                    fontSize='sm'
                    size='lg'
                    w={{ base: '100%', md: '346px' }}
                    maxW='100%'
                    h='46px'
                    type='password'
                    placeholder='Your password'
                  />
                </GradientBorder>
                <FormLabel
                  color={titleColor}
                  ms='4px'
                  fontSize='sm'
                  fontWeight='normal'
                >
                  Confirm Password
                </FormLabel>
                <GradientBorder
                  mb='24px'
                  h='50px'
                  w={{ base: '100%', lg: 'fit-content' }}
                  borderRadius='20px'
                >
                  <Input
                    color={titleColor}
                    bg={{
                      base: 'rgb(19,21,54)',
                    }}
                    border='transparent'
                    borderRadius='20px'
                    fontSize='sm'
                    size='lg'
                    w={{ base: '100%', md: '346px' }}
                    maxW='100%'
                    h='46px'
                    type='password'
                    placeholder='Confirm your password'
                  />
                </GradientBorder>
                <FormControl display='flex' alignItems='center' mb='24px'>
                  {/* <DarkMode>
                    <Switch id='remember-login' colorScheme='brand' me='10px' />
                  </DarkMode> */}

                  {/* <FormLabel
                    color={titleColor}
                    htmlFor='remember-login'
                    mb='0'
                    fontWeight='normal'
                  >
                    Remember me
                  </FormLabel> */}
                </FormControl>
                <Button
                  variant='brand'
                  fontSize='10px'
                  type='submit'
                  w='100%'
                  maxW='350px'
                  h='45'
                  mb='20px'
                  mt='20px'
                  // onClick={handleSubmit(onSubmit)}
                >
                  SIGN UP
                </Button>
              </FormControl>
            </Flex>
          </GradientBorder>
        </Flex>
        <Box
          w={{ base: '335px', md: '450px' }}
          mx={{ base: 'auto', lg: 'unset' }}
          ms={{ base: 'auto', lg: 'auto' }}
          mb='90px'
        >
          <AuthFooter />
        </Box>
        <Box
          display={{ base: 'none', lg: 'block' }}
          overflowX='hidden'
          h='100%'
          maxW={{ md: '50vw', lg: '50vw' }}
          minH='100vh'
          w='960px'
          position='absolute'
          left='0px'
        >
          <Box
            bgImage={signUpImage}
            w='100%'
            h='100%'
            bgSize='cover'
            bgPosition='50%'
            position='absolute'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Box
              bg='rgba(255, 255, 255, 0.7)'
              p={8}
              borderRadius='md'
              backdropFilter='blur(0.25px)'
              textAlign='center'
            >
              <Text
                textAlign='center'
                color='black'
                letterSpacing='8px'
                fontSize='20px'
                fontWeight='500'
              >
                MIND METAMORPHOSIS:
              </Text>
              <Text
                textAlign='center'
                color='black'
                letterSpacing='8px'
                fontSize='36px'
                fontWeight='bold'
                bgClip='text !important'
                bg='linear-gradient(94.56deg, #FFFFFF 79.99%, #21242F 102.65%)'
              >
                REFORGE, RENEW, REDESIGN!
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignUp;
