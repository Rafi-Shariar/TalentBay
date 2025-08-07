import React from 'react';
import picture from '../assets/authImages/loginImg.png';
import Image from 'next/image';
import LoginForm from './components/LoginForm';
import Navbar from '../components/Navbar';
const Login = () => {
    return (
        <div className='min-h-screen max-w-7xl mx-auto'>
            
            <section className='flex flex-col md:flex-row items-center justify-center gap-10 mt-16'>
                <div className='md:w-1/2'>
                    <LoginForm/>

                </div>

                <div className='md:w-1/2 '>
                    <Image src={picture} alt='Login Image' width={600} height={400}></Image>
                </div>
            </section>
        </div>
    );
};

export default Login;