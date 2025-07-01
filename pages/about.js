import Layout from '@/components/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const About = () => {
  const [state, setState] = useState([]);
  const fetchData = () =>{
    try{
       axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>setState(res.data))

    }
    catch(err){
      console.warn(err)
    }
   
  }
  useEffect(()=>{
    fetchData();

  },[])
  console.log(state)
  return (
    <Layout title={"About us page"}>
        <h2>About page</h2>
        <h2>User info</h2>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Username</td>
              <td>Email</td>
            </tr>
          </thead>

            <tbody>
              {state.map((users,id)=>{
                return (
                  <tr key={id}>
                    <td>{users.id}</td>
                    <td>{users.name}</td>
                    <td>{users.username}</td>
                    <td>{users.email}</td>
                  </tr>
                );
              })}
            </tbody>
        </table>
      
    </Layout>
  )
}

export default About;
