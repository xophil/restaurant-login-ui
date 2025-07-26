import './App.css'
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import { Link } from 'react-router-dom';





function Home(){
    const [phone, setPhone] = useState('');
    return(
        <>
        {/**BACKGROUND WITH DOTS */}
        <div className="bg-[url('/public/dots.svg')] bg-repeat flex justify-center items-center min-h-screen">
            {/**THE MAIN WHITE CONTAINER */}
        <div id="container" className='bg-white p-2 m-2 text-center w-130 h-150'> 

            <div className='p-5'> {/**TO ADJUST THE MARGINS WITHIN THE WHITE CONTAINER */}



                <h1 className='header'>Welcome 👋</h1>
            <h2 id='sub-header' className='mx-3'>Login or Sign up to manage your restaurant and cafe digitally</h2>
            
            {/**This is for Phone Number Input Field */}
            <form> {/**This is for entering phone number ---- the container for it */}
                <div className='flex flex-row gap-2 border-1 rounded-md w-110 h-12 mx-3 border-gray-300'>
                    {/**This is the phone number input field, using react-phone-input-2 */}
                    <PhoneInput                                                         
                            country={'np'}
                            value={phone}
                            onChange={setPhone}
                            inputClass=' !h-full !border-none !pl-4 !text-[16px]'
                            buttonClass='!bg-white !p-4 !border-r !border-gray-200'
                            inputProps={{
                                name: 'phone',
                                required: true,
                                autoFocus: true
                            }}
                            />
                </div>

                <p className='policy'>By signing up, you agree to out <Link to="/Policy" className='links'>Privacy Policies</Link> & <Link to="/Terms" className='links'>Terms and Conditions</Link> </p>

                <input type='submit' className='bg-[#d90819] rounded-md w-110 h-10 m-3 text-white cursor-pointer' value="Continue"/> {/**SUBMIT BUTTON */}
            </form>

            <div className='flex flex-row gap-2 items-center justify-center p-3'>
                <div className='border-1 h-0 w-50 border-gray-200'></div>
                <p className=''>or</p>
                <div className='border-1 h-0 w-50 border-gray-200'></div>
            </div>                    
            

            <button id="log-btn" className='flex flex-row items-center justify-center gap-2 rounded-md border-1 p-2 px-5 cursor-pointer w-110 h-10 m-2 border-gray-300'> <FcGoogle id='icon'/> Continue with Google</button>
            <button id="log-btn" className='flex flex-row items-center justify-center gap-2 rounded-md border-1 p-2 px-5 cursor-pointer w-110 h-10 m-2 border-gray-300'> <FaApple id='icon'/> Continue with Apple</button>
            <button id="log-btn" className='flex flex-row items-center justify-center gap-2 rounded-md border-1 p-2 px-5 cursor-pointer w-110 h-10 m-2 border-gray-300'> <MdOutlineEmail id='icon'/> Use email instead</button>







            </div>
            
        </div>
        </div>
        </>
    )
}


export default Home