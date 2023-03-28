import { Stack, Box, Flex, Center } from "@chakra-ui/react"
import Bike from "./Bike"
import CurrentTotals from "./CurrentTotals"
import Bike1 from '../assets/s100rr.jpg'
import Bike2 from '../assets/Bullet.jpg'
import Bike3 from '../assets/1250.jpg'
import RenterForm from "./RenterForm"
import { useContext, useState } from "react"
import { BlockchainContext } from "../context/BlockchainContext"
import ClipLoader from "react-spinners/ClipLoader"

const Dashboard = () => {
    const {renterExists, currentAccount} = useContext(BlockchainContext)
    let [loading, setLoading] = useState(true);
    return (
        <Stack 
        as={Box}
        textAlign={'center'}
        spacing={{base: 8, md: 14}}
        py={{base:20, md:36}}>
        {renterExists == null && currentAccount ? <Center><ClipLoader loading={loading} size={75} /></Center> : renterExists ? <CurrentTotals/> : <RenterForm/>}
        <Flex justifyContent={'center'} alignItems={'center'}>
            <Bike bike={Bike3}/>
            <Bike bike={Bike1}/>
            <Bike bike={Bike2}/>
        </Flex>
        </Stack>
    )
}
export default Dashboard
