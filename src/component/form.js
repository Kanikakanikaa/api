import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

export default function Formm() {

  const[post,setPost]=useState({
    email:"",
    password:""
  })

 const handleSubmit=(e)=>{
     e.preventDefault(post);
 }
     const emp_data={
       email: "",
        password:""
     }
     useEffect(() => {
      getPosts();
    }, []);
   
    const getPosts = async () => {
     const responce =  await axios.post(`https://jsonplaceholder.typicode.com/users`,{emp_data})
     console.log("====",responce);
   }
    const handleChange=(e)=>{
      setPost({post:e.target.value})

    }


  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email"  value={post.email} onChange={handleChange}/>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name="password" value={post.pwd} onChange={handleChange}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}
