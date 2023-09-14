import { useToast } from '@chakra-ui/react';

const useNotify = () => {
  const toast = useToast();

  const notify = ({ status, description }) => {
    console.log('object');
    const title = status === 'success' ? 'Success' : 'Error';
    return toast({
      title: title,
      description: description,
      status: status,
      duration: 5000,
      isClosable: true,
    });
  };

  return notify;
};

export default useNotify;
