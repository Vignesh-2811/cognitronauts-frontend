// Chakra Imports
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  Switch,
  Text,
  DarkMode,
} from '@chakra-ui/react';
import { Separator } from 'components/Separator/Separator';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function Configurator(props) {
  const { secondary, isOpen, onClose, fixed, ...rest } = props;
  const [switched, setSwitched] = useState(props.isChecked);

  // Chakra Color Mode
  let fixedDisplay = 'flex';
  if (props.secondary) {
    fixedDisplay = 'none';
  }
  let colorButton = 'white';
  const secondaryButtonColor = 'white';
  const settingsRef = React.useRef();
  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        onClose={props.onClose}
        placement={document.documentElement.dir === 'rtl' ? 'left' : 'right'}
        finalFocusRef={settingsRef}
        blockScrollOnMount={false}
      >
        <DrawerContent
          bg='linear-gradient(111.84deg, rgba(6, 11, 38, 0.94) 59.3%, rgba(26, 31, 55, 0) 100%)'
          backdropFilter='blur(42px)'
        >
          <DrawerHeader pt='24px' px='24px'>
            <DrawerCloseButton color='white' />
            <Text color='white' fontSize='xl' fontWeight='bold' mt='16px'>
              Cognitronauts Configurator
            </Text>
            <Text color='white' fontSize='md' mb='16px'>
              See your dashboard options.
            </Text>
            <Separator />
          </DrawerHeader>
          <DrawerBody w='340px' ps='24px' pe='40px'>
            <Flex flexDirection='column'>
              <Box
                display={fixedDisplay}
                justifyContent='space-between '
                mb='20px'
              >
                <DarkMode>
                  <Text color='white' fontSize='md' fontWeight='600' mb='4px'>
                    Navbar Fixed
                  </Text>
                  <Switch
                    colorScheme='brand'
                    isChecked={switched}
                    onChange={(event) => {
                      if (switched === true) {
                        props.onSwitch(false);
                        setSwitched(false);
                      } else {
                        props.onSwitch(true);
                        setSwitched(true);
                      }
                    }}
                  />
                </DarkMode>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
Configurator.propTypes = {
  secondary: PropTypes.bool,
  isOpen: PropTypes.func,
  onClose: PropTypes.func,
  fixed: PropTypes.bool,
};
