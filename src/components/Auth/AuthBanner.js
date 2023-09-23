import { Box, Text } from '@chakra-ui/react';
import signUpImage from '../../assets/img/signup.png';
import React from 'react';

const AuthBanner = ({ img, text, slogan }) => {
  return (
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
        bgImage={img}
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
            {text}
            {/* MIND METAMORPHOSIS: */}
          </Text>
          <Text
            textAlign='center'
            color='black'
            letterSpacing='8px'
            fontSize='36px'
            fontWeight='bold'
            bgClip='text !important'
            // bg='linear-gradient(94.56deg, #FFFFFF 79.99%, #21242F 102.65%)'
            bg='linear-gradient(94.56deg, #000000)'

          >
            {slogan}
            {/* REFORGE, RENEW, REDESIGN! */}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthBanner;
