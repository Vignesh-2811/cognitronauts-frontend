// Chakra imports
import {
  Box,
  Button,
  DarkMode,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Switch,
  Text,
  useToast,
} from '@chakra-ui/react';

// Assets
import signInImage from 'assets/img/signin.jpg';
import AuthBanner from 'components/Auth/AuthBanner';
import UserInput from 'components/Auth/UserInput';
import { loginEvent } from 'redux/actions/auth';

// Custom Components
import AuthFooter from 'components/Footer/AuthFooter';
import GradientBorder from 'components/GradientBorder/GradientBorder';
import { useForm, FormProvider } from 'react-hook-form';
import useNotify from 'utils/notify';
import { connect, useDispatch } from 'react-redux';
import { ADD_JWT_TOKEN } from 'redux/reducers/auth.js';
import { useHistory } from 'react-router-dom';

function SignIn({ loginEvent }) {
  const titleColor = 'white';
  const textColor = 'gray.400';
  const methods = useForm();
  const notify = useNotify();
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    // console.log(data);
    if (!data.email || !data.password) {
      notify({
        status: 'error',
        description: 'Please provide all the fields',
      });
      return;
    }

    try {
      const res = await loginEvent(data);
      if (res.status === 200) {
        notify({
          status: 'success',
          description: 'Login successfull',
        });
        if (res.data.role === 'Doctor') {
          history.push('/admin/dashboard');
        } else {
          history.push('/client/dashboard');
        }
      } else {
        notify({
          status: 'error',
          description: res.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex position='relative'>
      <Flex
        minH='100vh'
        h={{ base: '120vh', lg: 'fit-content' }}
        w='100%'
        maxW='1044px'
        mx='auto'
        pt={{ sm: '100px', md: '0px' }}
        flexDirection='column'
        me={{ base: 'auto', lg: '50px', xl: 'auto' }}
      >
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: 'none' }}
          mx={{ base: 'auto', lg: 'unset' }}
          ms={{ base: 'auto', lg: 'auto' }}
          w={{ base: '100%', md: '50%', lg: '450px' }}
          px='50px'
        >
          <Flex
            direction='column'
            w='100%'
            background='transparent'
            mt={{ base: '50px', md: '150px', lg: '160px', xl: '245px' }}
            mb={{ base: '60px', lg: '95px' }}
          >
            <Heading color={titleColor} fontSize='32px' mb='10px'>
              Good day!
            </Heading>
            <Heading color={titleColor} fontSize='32px' mb='10px'>
              Nice to see you :)
            </Heading>
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'
            >
              Enter your email and password to sign in
            </Text>
            <FormProvider {...methods}>
              <FormControl>
                <UserInput
                  name='email'
                  label='Email'
                  placeholder='Enter your email'
                  type='text'
                />
                <UserInput
                  name='password'
                  label='Password'
                  placeholder='Enter your password'
                  type='password'
                />
                <Button
                  variant='brand'
                  fontSize='10px'
                  type='submit'
                  w='100%'
                  maxW='350px'
                  h='45'
                  mb='20px'
                  mt='20px'
                  onClick={handleSubmit(onSubmit)}
                >
                  SIGN IN
                </Button>
              </FormControl>
            </FormProvider>
            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'
            ></Flex>
          </Flex>
        </Flex>
        <Text
          mb='36px'
          ms='4px'
          color={textColor}
          fontWeight='bold'
          fontSize='14px'
        >
          Al
        </Text>
        <Box
          w={{ base: '335px', md: '450px' }}
          mx={{ base: 'auto', lg: 'unset' }}
          ms={{ base: 'auto', lg: 'auto' }}
          mb='80px'
        >
          <AuthFooter />
        </Box>

        <AuthBanner
          img={signInImage}
          text="UNLOCK YOUR BRAIN 'S POTENTIAL:"
          slogan='REWIRE, REIMAGINE, REDISCOVER!'
        />
      </Flex>
    </Flex>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { loginEvent })(SignIn);
