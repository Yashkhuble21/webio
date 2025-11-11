import { useState,useEffect } from 'react'
import './App.css'
import Hello from './component/Hello'
import Form from './component/Form';
import Users from './component/Users';
import {Card} from './component/Card';



function App() {
  
  // const [message,setMessage] = useState('');

  // const handlemessage = (message)=>{
  //   setMessage(message)
  // }

  // const [form,setForm] = useState([{
  //   name:'',
  //   email:''
  // }])

  const [formdata,setform] = useState({
    name:'',
    email:'',
    phone:'',
    address:''
  })

  const validateform = ()=>{
       let errors = {}

      if(formdata.name == ""){
        errors.name = "*Name is required!"
      }

      if(formdata.email == ""){
        errors.email = "*Email is required!"
      }
      
      return errors
  }
  const [errors,setError] = useState({})
  const handleformdata = (e)=>{
    e.preventDefault()
    const errors =  validateform();
    console.log(errors.length)
    if(Object.keys(errors).length > 0 ){
      setError(errors)
      return false
    }
    setError({})
    return true
  }
 
  return (
    <>
     <div className='form-container h-screen'>
        <form action="" onSubmit={handleformdata}>
          <div className="input-block">
            <label htmlFor="name">Full Name</label>
            <input type="text" className='input-form' value={formdata.name} onChange={(e)=>setform({...formdata,name:e.target.value})} id='name' placeholder='Full Name' />
            {errors.name && <div className='text-red-500'>{errors.name}</div>}
          </div>
          <div className="input-block">
            <label htmlFor="email">Email Address</label>
            <input type="email" className='input-form' value={formdata.email} onChange={(e)=>setform({...formdata,email:e.target.value})} id='email' placeholder='Email' />
            {errors.email && <div className='text-red-500'>{errors.email}</div>}
          </div>
          <div className="input-block-two">
          <div className="input-block">
            <label htmlFor="phone">Phone No.</label>
            <input type="tel" className='input-form' value={formdata.phone} onChange={(e)=>setform({...formdata,phone:e.target.value})} id='phone' placeholder='Phone No..' />
            {errors.phone && <div className='text-red-500'>{errors.phone}</div>}
          </div>
          <div className="input-block">
            <label htmlFor="addres">Address</label>
            <input type="tel" className='input-form' value={formdata.address} onChange={(e)=>setform({...formdata,address:e.target.value})} id='address' placeholder='Address..' />
            {errors.address && <div className='text-red-500'>{errors.address}</div>}
          </div>
          </div>
          <div className="input-block">

          <button className='w-full' type='submit' >Submit</button>
          </div>
        </form>
     </div>
     <div className="container">
        <div className="card-container">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
     </div>
    </>
  )
}

export default App
