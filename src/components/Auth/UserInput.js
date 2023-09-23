import { FormLabel, Input } from '@chakra-ui/react';
import GradientBorder from 'components/GradientBorder/GradientBorder';
import React from 'react';
import { useForm, useFormContext } from 'react-hook-form';

const UserInput = ({ label, placeholder, name, type }) => {
  const titleColor = 'black';
  const { register } = useFormContext();
  const errorColor = 'red.500';

  return (
    <>
      <FormLabel color={titleColor} ms='4px' fontSize='sm' fontWeight='normal'>
        {label}
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
            // base: 'rgb(19,21,54)',
            base: '#ffffff',
          }}
          border='transparent'
          borderRadius='20px'
          name={name}
          {...register(name)}
          fontSize='sm'
          size='lg'
          w={{ base: '100%', md: '346px' }}
          maxW='100%'
          h='46px'
          type={type}
          placeholder={placeholder}
        />
      </GradientBorder>
      {/* {errors[name] && <Text color={errorColor}>{errors[name].message}</Text>} */}
    </>
  );
};

export default UserInput;
