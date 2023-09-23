import { Button, Flex, Spacer, Text } from '@chakra-ui/react';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import React from 'react';
import medusa from 'assets/img/Cognitive-Training.jpg';

const WelcomeCard = ({ firstName, lastName }) => {
  return (
    <Card
      p='0px'
      gridArea={{ md: '1 / 1 / 2 / 3', '2xl': 'auto' }}
      bgImage={medusa}
      bgSize='cover'
      bgPosition='50%'
    >
      <CardBody w='100%' h='100%'>
        <Flex flexDirection={{ sm: 'column', lg: 'row' }} w='100%' h='100%'>
          <Flex
            flexDirection='column'
            h='100%'
            p='22px'
            minW='60%'
            lineHeight='1.6'
          >
            <Text fontSize='28px' color='#fff' fontWeight='bold' mb='18px'>
              {firstName} {lastName}
            </Text>
            <Text
              fontSize='18'
              color='white'
              fontWeight='normal'
              mb='auto'
              style={{ fontStyle: 'italic' }}
            >
              Hey, awesome to have you back! 🌟<br />
              We're like your friendly genie, ready to grant your curiosity wishes! 🧞‍♂ <br />
              So, what's bubbling in your imaginative little mind today?
            </Text>
            <Spacer />
            <Flex align='center'>
              <Button
                p='0px'
                variant='no-hover'
                bg='transparent'
                my={{ sm: '1.5rem', lg: '0px' }}
              ></Button>
            </Flex>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default WelcomeCard;
