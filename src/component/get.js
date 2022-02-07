import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Get() {
    const[post,setPost]=useState({
        email:"",
        password:""
      })
      useEffect(() => {
     axios.get(`https://jsonplaceholder.typicode.com/users/3`)
     .then((response) => {
          setPost(response.data);
          console.log("responce",response)
        });
      }, []);
  return (
      <>
      </>

  )
}
