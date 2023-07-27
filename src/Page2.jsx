import {Input,Box,Flex, HStack, Stack ,Text,Card,CardBody,Image,Heading,Divider,CardFooter,Button,ButtonGroup} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import img1 from './empty1.png'
function Page2(props) {
    console.log('page 2',props)
   const [data,setData] =useState("")
   const [category,setCategory] =useState("")
   const [tempData,setTempData] =useState([])
    const {Name,Email}=props
    console.log('temp',tempData)
useEffect(()=>{
   
 const api= async ()=>
 {

 
      try
      {
     let res= await fetch('https://fakestoreapi.com/products')
        let data= await res.json()
        console.log('data',Object.values(data))
      setData(Object.values(data))
      setTempData(Object.values(data))

      }
      catch(err)
      {
        console.log('error',err)
      }
      try{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>  setCategory(Object.values(json)))
      }
      catch(err)
      {
        console.log('error',err)
      }
    }
   api();
   
},[])

const [selectedValue, setSelectedValue] = useState('');

const handleChange = (event) => {
  const value = event.target.value;
  setSelectedValue(value);
  console.log('val',value)
  if(value==='All')
    setTempData(data)
  else
  setTempData(data.filter((v,i)=>v.category===value));
};
const handleSearch = (event) => {
  const value = event.target.value;  console.log('val',value)
  if(value==='')

        setTempData(data)
  else
  setTempData(data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase())));
  
};
let textStyle={WebkitLineClamp:2,WebkitBoxOrient:'vertical',
overflow:'hidden',display:'-webkit-box'}
const [isOpen,setisOpen]=useState(false);
  return (
    <>
   <Stack>
    <HStack bg={'teal.200'} border={'2px solid'} height={'20'}>
        <Text style={{fontSize:'20px'}} color="blue">Name: {Name}</Text>
        <Text   style={{fontSize:'20px'}}  color="black">Email : {Email}</Text>
        <Button marginLeft={'auto'}><Link to='/pie'>Analyze</Link></Button>
        <select style={{marginLeft:"auto",height:'40px'}} value={selectedValue} onChange={handleChange}>
            <option>All</option>
          {
           category && category.map((val,i)=><option key={i}>{val}</option>)
        }
        </select>
        <Input onChange={handleSearch} placeholder='search here' w={'300px'} type='text' border={'2px solid'}></Input>
    </HStack>
   
    <Flex wrap={'wrap'} justify="space-between">
        {      
           tempData.length===0?<Image marginX={'auto'} src={img1}></Image>:tempData.map((val,i)=>{
    
            return(
            
<Box key={i}>


                <Card width={'350px'} height={''}>
                <CardBody>
                  <Image height={20}
                    src={val.image}   alt='img'
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='5'>
                    <Heading height='20px' size='xs'>{val.title}</Heading>
                    <Text style={isOpen?null:textStyle
                }
              >
                  {val.description}
                    </Text>
                    <Button onClick={()=>{setisOpen(!isOpen)}}>{isOpen?'less...':'more...'}</Button>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                      {val.category}
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
              </Box>
              
            )
        })

        }
    </Flex>
    </Stack>
    </>
  )
}


const mapStateToProps = (store) =>{
    return store;
  }

  export default connect(mapStateToProps)(Page2);


// export default Page2