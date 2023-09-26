import React, { useState } from 'react'
import './Users.css'
import axios from 'axios'

const Users = () => {
    const [data,setData]=useState([])
    const fetchUsers=async ()=>{
      const responce= await axios.get('https://jsonplaceholder.typicode.com/users')
        setData(responce.data)
    }
    
  return (
    <div className='users'>
        i am a user
        <div className=''>
            <button onClick={fetchUsers}>Get users</button>
            {data.map((user)=>(
                <div key={user.id}>
                    {user.name}
                    <p>{user.email}</p>
                    <p style={{color:'red'}}>{user.address.street}</p>
                </div>
            ))}
          </div>   
    </div>
  )
}

export default Users