import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import TablesProjectRow from 'components/Tables/TablesProjectRow';

// Data

// Icons

function Tables({ userData, history }) {
  const [patients, setPatients] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [assignedPatients, setAssignedPatients] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    const fetchAssignedPatients = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/users/getPatients/${userData._id}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAssignedPatients(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };
    fetchAssignedPatients();
  }, [userData._id]);

  useEffect(() => {
    const fetchUnassignedPatients = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/api/users/getUnassignedPatients'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };
    fetchUnassignedPatients();
  }, []);

  const handleAdd = async (patientId, doctorId) => {
    try {
      const response = await fetch(
        'http://localhost:5000/api/users/updatePatients',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            patientId: patientId,
            doctorId: doctorId,
          }),
        }
      );
      if (!response.ok) {
        throw new Error('Failed to add patient.');
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const navigateToDashboard = (userId) => {
    console.log('id: ', userId);
    setSelectedUserId(userId);
    history.push(`/admin/dashboard`);
  };

  return (
    <Flex
      direction='column'
      pt={{ base: '120px', md: '75px' }}
      bg={{
        base: 'dark blue',
      }}
    >
      <Button onClick={() => setIsOpen(true)}>Add Clients</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Clients</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {patients.map((patient) => (
              <Flex key={patient.id} justifyContent='space-between' mb={2}>
                <Text>{patient.firstName}</Text>
                <Button onClick={() => handleAdd(patient._id, userData._id)}>
                  Add
                </Button>
              </Flex>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Card my='22px' overflowX={{ sm: 'scroll', xl: 'hidden' }} pb='0px'>
        <CardHeader p='6px 0px 22px 0px'>
          <Flex direction='column'>
            <Text fontSize='lg' color='#fff' fontWeight='bold' mb='.5rem'>
              Doctor Dashboard
            </Text>
            <Flex align='center'></Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant='simple' color='#fff'>
            <Thead>
              <Tr my='.8rem' ps='0px'>
                <Th
                  ps='0px'
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'
                >
                  ID
                </Th>
                <Th
                  ps='0px'
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'
                >
                  Name
                </Th>
                {/* <Th
                  ps='0px'
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'
                >
                  Date Of Birth
                </Th> */}
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'
                >
                  Contact
                </Th>
                <Th borderBottomColor='#56577A'></Th>
              </Tr>
            </Thead>
            <Tbody>
              {assignedPatients.map((patient) => {
                return (
                  <TablesProjectRow
                    key={patient._id}
                    onClick={() => navigateToDashboard(patient._id)}
                    name={patient.firstName}
                    profile={patient.dateOfBirth}
                    contact={patient.phoneNumber}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
  };
};

export default connect(mapStateToProps)(Tables);
