import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode, useContext } from 'react';
  import { FiServer } from 'react-icons/fi';
  import { GoLocation } from 'react-icons/go';
  import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
  import { AiOutlineClockCircle } from 'react-icons/ai';
  import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import PayForm from './PayForm';
import AddToBalanceForm from './AddToBalanceForm';
import { BlockchainContext } from '../context/BlockchainContext';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  function StatsCard(props) {
    const { title, stat, icon, bgColor } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}
        backgroundColor={bgColor}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function CurrentTotals() {
    const {renterBalance, due, duration,renter} = useContext(BlockchainContext);
    return (
      <>
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Welcome Akash! Here are your stats.
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'BNB Credit'}
            stat={renterBalance}
            icon={<MdOutlineAccountBalanceWallet size={'3em'} />}
          />
          <StatsCard
            title={'BNB Due'}
            stat={due}
            icon={<AiOutlineClockCircle size={'3em'} />}
          />
          <StatsCard
            title={'Ride Minutes'}
            stat={duration}
            icon={<RiMoneyDollarBoxLine size={'3em'} />}
          />
          <StatsCard
            title={'Bike Status'}
            bgColor={renter && renter.active ? 'green' : 'red'}
            // stat={'7'}
            // icon={<RiMoneyDollarBoxLine size={'3em'} />}
          />
        </SimpleGrid>
        <Flex justifyContent={'center'} alignItems={'center'}>
            <AddToBalanceForm/>
            <PayForm/>
        </Flex>
      </Box>
      <ToastContainer autoClose={3000}/>
      </>
    );
  }