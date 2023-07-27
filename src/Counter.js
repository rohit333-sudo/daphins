//npm i react react-redux
//npm i redux
import React from 'react'
import { connect } from 'react-redux';
import {Button,Box, Flex,FormControl,FormLabel,Heading, Input} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
function Counter(props) {
    console.log(props)
   
  return (
    <>
    <Flex width="full" align="center" justifyContent="center">
      <Box  p={2}>
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input value={props.Email}  onChange={(e)=>{props.email(e.target.value)}} type="email" placeholder="123@gmail.com" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Name</FormLabel>
              <Input value={props.Name}  onChange={(e)=>{props.name(e.target.value)}} type="text" placeholder="Enter name" />
            </FormControl>
            <Button width="full" mt={4} type="submit">
            <Link to="/page2">Sign In</Link> 
            {/* Sign In */}
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
    </>
  )
  }

const mapStateToProps = (store) =>{
    return store;
  }
  const mapDispatchToProps = (dispatch) => {
    // return Object that contian aall function that responsible for changing the state of store
    return {
      name: (name) => {
        console.log("name dispatch",name)
        dispatch({type:"name",name:name})
      },
      email: (email) => {
        console.log("email dispatch",email)
        dispatch({type:"email",email:email})
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Counter);

