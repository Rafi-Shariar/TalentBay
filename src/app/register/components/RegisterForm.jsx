"use client";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { registerUser } from "../../actions/auth/registerUser";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    const payload = { email, password, name, photo };

    try {
      const res = await registerUser(payload);

      if (res.success) {
        toast.success("Successfully Registered!");
        router.push("/login");
      } else {
        toast.error(`HI, ${res.message}`);
      }
    } catch (err) {
      toast.error("Error, Something went wrong!");
      console.log(err);
    }
  };
  return (
    <div className="border border-sky-200 rounded-2xl p-16 shadow-xl">
      <h1 className="text-2xl font-semibold">Register Now !</h1>

      <form onSubmit={handleLogin} className="fieldset p-6">
        <label className="label text-lg">Photo URL</label>
        <input
          type="url"
          className="input w-[90%]"
          placeholder="provide your photo url"
          name="photo"
          required
        />

        <label className="label text-lg">Name</label>
        <input
          type="text"
          className="input w-[90%]"
          placeholder="Name"
          name="name"
          required
        />

        <label className="label text-lg">Email</label>
        <input
          type="email"
          className="input w-[90%]"
          placeholder="Email"
          name="email"
          required
        />

        <label className="label text-lg">Password</label>
        <input
          type="password"
          className="input w-[90%]"
          placeholder="Password"
          name="password"
          required
        />

        <button
          type="submit"
          className="btn btn-info btn-outline mt-4 rounded-full w-[90%]"
        >
          Register Now
        </button>

        <div className="divider"></div>

        <p className="text-base">
          Already have an account?{" "}
          <Link href={"/login"} className="text-sky-600 font-semibold">
            Login Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
