import React, {useState } from 'react'
import img4 from '../../package/components/assets/bgg.png'
import img5 from '../../package/components/assets/logo.png'
import {useNavigate} from 'react-router-dom';



export default function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const HandleLogin=(e)=>{
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem('user'));
    if(input.email === loggeduser.email && input.password === loggeduser.password)
    {
      localStorage.setItem('loggedin', true);
      navigate('/');
    }
    else{
      alert ('wrong credentials');
    }
  }
  return (
    <div className='flex flex-col flex-auto w-full h-screen'>
        <div className='h-full'>
            <div className='grid grid-cols-3 h-full'>
                <div className='bg-[#09ef83] h-screen' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',boxShadow: '0 0 10px #08d775', transition: 'box-shadow 0.3s' }}>
                    <img src={img4} style={{ width: '500px' ,transition: 'transform 0.3s', cursor: 'pointer',borderRadius:'10px' }}/>
                </div>
                    <div className='col-span-2 flex justify-center items-center'>
                        <div className='w-[600] px-8'>
                            <div className='mb-8'>
                            <div className='flex items-center'>
                                <h1 className='text-3xl font-semibold'>Welcome To Krish-Mart</h1>
                                <img src={img5} className="h-10 mr-3 mt-1"/>
                            </div>
                            </div>
                            <form>
                                <div className='mb-3'>
                                    <label className='font-medium mb-2 flex'>
                                       Email  
                                    </label>
                                    <input type='text' placeholder='enter your email' value={input.email} onChange={(e)=>setInput(e.target.value)} className='w-full border rounded-md bg-transparent border-gray-400'/>
                                    
                                </div>
                                <div className='mb-3'>
                                    <label  className='font-medium mb-2 flex'>Password</label>
                                    <input type='password' placeholder='enter your password' value={input.password} onChange={(e)=>setInput(e.target.value)} className='w-full border rounded-md bg-transparent border-gray-400'/>
                                </div>
                                <div className='flex justify-between mb-6'>
                                    <label>
                                        <input type='checkbox' className= 'mr-2'/>
                                        Remember me
                                    </label>
                                    
                                </div>
                                <button className='block bg-[#09ef83] text-white w-full py-2 px-2 rounded-md' onClick={HandleLogin}>Login!</button>
                            </form>
                        </div>
                    </div>
                
            </div>

        </div>
    </div>
  )
}
