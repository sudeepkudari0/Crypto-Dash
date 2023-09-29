import {React,useEffect,useState} from 'react'
import { HStack} from '@chakra-ui/react'
import axios from 'axios'
import ExchangeCard from '../components/ExchangeCard'
// import {server} from '../components/Home' check for error here ... its not detecting the import
import { Container } from '@chakra-ui/react'
import Loader from '../components/Loader'

const Exchanges = () => {
  const [Exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchExchanges = async()=>{
      const {data} = await axios.get('https://api.coingecko.com/api/v3/exchanges?per_page=100');
        setExchanges(data);
        console.log(data)
        setLoading(false);
      }
      
      fetchExchanges();
    }
    , [])
    
    return (
      <Container maxW={'xl'}>
        {loading?<Loader/>:<>
        <HStack wrap={"wrap"}>
      {
        Exchanges.map((i)=>(
        <ExchangeCard key = {i.id} name = {i.name} img = {i.image} rank = {i.trust_score_rank} url = {i.url}/>       
         ))
      }

        </HStack>
        </>}

      </Container>
  )
}



export default Exchanges