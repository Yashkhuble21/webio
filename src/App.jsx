import { useState,useEffect } from 'react'
import './App.css'
import Hello from './component/Hello'
import Form from './component/Form';
import Users from './component/Users';



function App() {
  
  // const [message,setMessage] = useState('');

  // const handlemessage = (message)=>{
  //   setMessage(message)
  // }

  // const [form,setForm] = useState([{
  //   name:'',
  //   email:''
  // }])


  const users = [
        {name:'yash',email:'yash@gmail.com'},
        {name:'bhavin',email:'bhavin@gmail.com'}
    ];

  const [data,setData] = useState([{ coin: 'Bitcoin' }, { coin: 'Ethereum' }]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false)

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then(res =>{
        if(!res.ok) throw new Error('error in response',res.message)

        return res.json()
    }).then(data =>{
       setData(data.coins);
      setLoading(false);
    }).catch(error =>{
      setError(error);
      setLoading(false);
    });
  },[])

   if (loading) return <div>Loading...</div>
   if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      {data.map((element,index) =>{
        console.log(element)
        return (<div key={element.item.coin_id}> 
          {element.item.name}  {element.item.coin_id}
        </div>)
      })}
    {/* <Form />
    <Users users={users} /> */}
    {/* <h1>On Board</h1>
    <Hello name="Yash" handlemessage={handlemessage} setVisibility={setVisibility} />
    {message} */}
    </>
  )
}

export default App
