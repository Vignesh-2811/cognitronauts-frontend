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
  toast,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { submitRegisterEvent } from 'redux/actions/auth';
import 'react-datepicker/dist/react-datepicker.css';
// Icons
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
// Custom Components
import AuthFooter from 'components/Footer/AuthFooter';
import GradientBorder from 'components/GradientBorder/GradientBorder';

// Assets
import signUpImage from 'assets/img/signup.png';
import { FormProvider, useForm } from 'react-hook-form';
import AuthBanner from 'components/Auth/AuthBanner';
import UserInput from 'components/Auth/UserInput';
import { connect } from 'react-redux';
import useNotify from '../../utils/notify.js';

function SignUp({ submitRegisterEvent }) {
  const methods = useForm();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = methods;
  const titleColor = 'white';
  const textColor = 'gray.400';
  const toast = useToast();
  const [selectedDate, setSelectedDate] = useState(null);
  const notify = useNotify();

  // Handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      setValue('dateOfBirth', date);
    }
  };

  const onSubmit = async (data) => {
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.dateOfBirth ||
      !data.number ||
      !data.password ||
      !data.confirmPassword
    ) {
      notify({
        status: 'error',
        description: 'Please provide all the fields',
      });
      return;
    }
    if (data.password !== data.confirmPassword) {
      notify({
        status: 'error',
        description: 'Password and confirm password do not match',
      });
      return;
    }

    data.dateOfBirth = new Date(data.dateOfBirth).toISOString().split('T')[0];

    const { confirmPassword, ...payload } = data;

    try {
      const res = await submitRegisterEvent(payload);
      console.log(res);
      if (res === 201) {
        notify({
          status: 'success',
          description: 'User created successfully, Login',
        });
      } else {
        notify({
          status: 'error',
          description: res.data.error,
        });
      }
    } catch (error) {
      // console.log(error);
    }
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
              <FormProvider {...methods}>
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
                      name='role'
                      {...register('role')}
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
                  <UserInput
                    name='firstName'
                    label='First Name'
                    placeholder='Your first name'
                    type='text'
                  />
                  <UserInput
                    name='lastName'
                    label='Last Name'
                    placeholder='Your last name'
                    type='text'
                  />
                  <UserInput
                    name='email'
                    label='Email'
                    placeholder='Your email address'
                    type='email'
                  />

                  <FormLabel
                    color={titleColor}
                    ms='4px'
                    fontSize='sm'
                    fontWeight='normal'
                  >
                    Date Of Birth
                  </FormLabel>

                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat='dd/MM/yyyy'
                  />
                  <UserInput
                    name='number'
                    label='Number'
                    placeholder='Your Number'
                    type='text'
                  />
                  <UserInput
                    name='password'
                    label='Password'
                    placeholder='Password'
                    type='password'
                  />
                  <UserInput
                    name='confirmPassword'
                    label='Confirm Password'
                    placeholder='Confirm Password'
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
                    SIGN UP
                  </Button>
                </FormControl>
              </FormProvider>
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
        <AuthBanner
          img={signUpImage}
          text='MIND METAMORPHOSIS'
          slogan='REFORGE, RENEW, REDESIGN!'
        />
      </Flex>
    </Flex>
  );
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {
  submitRegisterEvent,
})(SignUp);
