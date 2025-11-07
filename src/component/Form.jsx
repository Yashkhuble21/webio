import {useState} from "react";

export default function Form() {
    
   const [formData,setFormData] = useState({
    name:'',
    email:''
   })

   const [errors,SetErrors] = useState({})

   

   const validate = ()=>{
     const newErrors = {};

     if(formData.name==""){
        newErrors.name = "Name required*"
     }

     if(!formData.email.trim()){
        newErrors.email = "Email required*"
     }

     return newErrors;
   }

   const handleform = (e)=>{
        e.preventDefault()
        let validateResponse = validate();
        if(Object.keys(validateResponse).length > 0){
            alert(JSON.stringify(validateResponse));
            console.log(validateResponse);
            SetErrors(validateResponse)
            return
        }

        console.log('data validated');

        

   };

   const handleData = (e)=>{
        
        console.log(e.target)
        const {name,value} = e.target
        setFormData({...formData,[name]:value})
   };
   
   return(

    <div className="w-screen flex justify-center p-4">
    <form onSubmit={handleform} className="bg-white inline-block px-5 py-10 rounded-lg space-y-4">
        <div>
            <input type="text" placeholder="name" name="name" value={formData.name} onChange={handleData} className="border-2 grayscale-2 p-2" />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div>
            <input type="email" placeholder="email" name="email" value={formData.email} onChange={handleData} className="border-2 grayscale-2 p-2" />
            {errors.email && <p className="text-red-500 ">{errors.email}</p>}
        </div>
        
        <button type="submit" className="block my-4 p-2 border bg-sky-200">submit</button>
    </form> 
    </div>
   )
    ;
}