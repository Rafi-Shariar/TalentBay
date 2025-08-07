'use client';
import Link from "next/link";
import React from "react";
import { signIn} from "next-auth/react"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const res = await signIn("credentials", {email,password, callbackUrl:'/', redirect:false})


    if(res?.ok){
      toast.success('logged In');
      router.push('/');

    }
    else{
      toast.error('Login failed');
    }

  

  };
  return (
    <div className="border border-sky-200 rounded-2xl p-16 shadow-xl">
      <h1 className="text-2xl font-semibold">Login</h1>

      <form onSubmit={handleLogin} className="fieldset p-6">
        <label className="label text-lg">Email</label>
        <input
          type="email"
          className="input w-[90%]"
          placeholder="Email"
          name="email"
        />

        <label className="label text-lg">Password</label>
        <input
          type="password"
          className="input w-[90%]"
          placeholder="Password"
          name="password"
        />

        <button
          type="submit"
          className="btn btn-info btn-outline mt-4 rounded-full w-[90%]"
        >
          Login Now
        </button>

        <div className="divider">

        </div>

        <p className="text-base">Don't have an account? <Link href={'/register'} className="text-sky-600 font-semibold">Register Now</Link></p>
      </form>
    </div>
  );
};

export default LoginForm;
