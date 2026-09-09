import React, { useState } from "react";

import {
  Heart,
  Droplets,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Users,
} from "lucide-react";

import { asserts } from "../../assets/assets";
import { useAppContext } from "../../AppContext/Appcontext";

const Login = () => {

const {navigate}=useAppContext()

const [showPassword, setShowPassword] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const  handlesubmit= async (e)=> {
      e.preventDefault();
      console.log("Done")
}


  return (
    <div className="min-h-screen overflow-hidden bg-white font-sans">

      <div className="flex min-h-screen flex-col lg:flex-row">

        {/* =====================================================
            LEFT SIDE
        ===================================================== */}
        <section className=" hidden lg:block relative min-h-[720px] w-full overflow-hidden bg-[#fff8f8] lg:min-h-screen lg:w-1/2">

          {/* Soft background decoration */}
          <div className="absolute -right-24 top-28 h-52 w-52 rounded-full bg-[#ffeaea]" />

          <div className="absolute -left-32 bottom-20 h-72 w-72 rounded-full bg-[#fff0f0]" />


          {/* Content */}
          <div className="relative z-20 h-full px-7 pt-9 sm:px-12 lg:px-12 xl:px-16">

            {/* ================= LOGO ================= */}
            <div className="flex items-center gap-4">

              <div className="relative flex h-16 w-16 items-center justify-center">

                <Heart
                  className="absolute h-16 w-16 fill-[#d7192d] text-[#d7192d]"
                />

                <Droplets
                  className="relative z-10 h-7 w-7 text-white"
                />

              </div>

              <div>

                <h1 className="text-3xl font-bold tracking-tight text-[#17283a] sm:text-[38px]">
                  Life<span className="text-[#d7192d]">Link</span>
                </h1>

                <p className="text-[11px] text-gray-500 sm:text-xs">
                  Donate Today. Save Tomorrow.
                </p>

              </div>

            </div>


            {/* ================= HERO TEXT ================= */}
            <div className="mt-12 sm:mt-14">

              <h2 className="text-[38px] font-bold leading-[1.08] text-[#142536] sm:text-[46px]">

                Together We

                <span className="block text-[#d7192d]">
                  Save Lives
                </span>

              </h2>

              <p className="mt-5 max-w-[280px] text-[15px] leading-[1.5] text-[#596774]">
                Your small act of kindness
                can make a big difference.
                Log in to continue making
                an impact.
              </p>

            </div>


            {/* ================= BENEFITS ================= */}
            <div className="relative z-20 mt-7 space-y-5">

              {/* Save Lives */}
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ffe8e9]">
                  <Droplets className="h-6 w-6 text-[#d7192d]" />
                </div>

                <div>

                  <h3 className="text-sm font-semibold text-[#17283a]">
                    Save Lives
                  </h3>

                  <p className="mt-1 max-w-[210px] text-xs leading-4 text-gray-500">
                    Your donation gives hope
                    to those in need.
                  </p>

                </div>

              </div>


              {/* Healthier Communities */}
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ffe8e9]">
                  <Heart className="h-6 w-6 text-[#d7192d]" />
                </div>

                <div>

                  <h3 className="text-sm font-semibold text-[#17283a]">
                    Build Healthier
                    <br />
                    Communities
                  </h3>

                  <p className="mt-1 max-w-[210px] text-xs leading-4 text-gray-500">
                    A stronger community
                    starts with you.
                  </p>

                </div>

              </div>


              {/* Safe */}
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ffe8e9]">
                  <Users className="h-6 w-6 text-[#d7192d]" />
                </div>

                <div>

                  <h3 className="text-sm font-semibold text-[#17283a]">
                    It's Safe & Simple
                  </h3>

                  <p className="mt-1 max-w-[210px] text-xs leading-4 text-gray-500">
                    The process is quick,
                    safe and well-supported.
                  </p>

                </div>

              </div>

            </div>
            {/* ================= BE A DONOR ================= */}
            <div className="absolute bottom-12 left-12 z-30 sm:left-16">

              <div className="-rotate-3 font-serif text-2xl italic text-[#d7192d]">
                Be a Donor

                <Heart className="ml-1 inline-block h-7 w-7" />

              </div>

            </div>


            {/* ================= RED BOTTOM WAVE ================= */}
            <div className="absolute -bottom-20 left-[-8%] z-40 h-[105px] w-[125%] rotate-[6deg] rounded-[50%] bg-[#d7192d]" />

            <div className="absolute -bottom-12 left-[-5%] z-30 h-[55px] w-[110%] rotate-[9deg] rounded-[50%] bg-[#b90f20]" />

          </div>

        </section>


        {/* =====================================================
            RIGHT SIDE
        ===================================================== */}
        <section className="relative flex min-h-screen w-full items-center justify-center bg-white px-5 py-12 sm:px-8 lg:w-1/2 lg:px-10">

          {/* Top-right decoration */}
          <div className="absolute -right-20 -top-20 h-52 w-72 rounded-full bg-[#fff0f0]" />

          <div className="absolute right-10 top-8 z-10">

            <Droplets className="h-9 w-9 text-[#d7192d]" />

            <span className="absolute left-8 top-5 h-[2px] w-12 rotate-[-5deg] bg-[#d7192d]" />

          </div>


          {/* ================= LOGIN CARD ================= */}
          <div className="relative z-20 w-full max-w-[540px] rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_8px_35px_rgba(0,0,0,0.07)] sm:p-10 lg:p-11">

            {/* Header */}
            <div className="mb-8">

              <h2 className="text-[30px] font-bold text-[#152536] sm:text-[34px]">
                Welcome Back
              </h2>

              <p className="mt-1 text-[15px] text-gray-500">
                Log in to your LifeLink account
              </p>

            </div>


            {/* ================= FORM ================= */}
            <form onSubmit={handlesubmit}>

              {/* Email */}
              <div className="mb-4 flex h-[62px] items-center rounded-xl border border-gray-200 px-4 transition focus-within:border-[#d7192d] focus-within:ring-2 focus-within:ring-red-100">

                <Mail className="mr-4 h-6 w-6 shrink-0 text-[#d7192d]" />

                <input
                  type="email"
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                />

              </div>


              {/* Password */}
              <div className="mb-4 flex h-[62px] items-center rounded-xl border border-gray-200 px-4 transition focus-within:border-[#d7192d] focus-within:ring-2 focus-within:ring-red-100">

                <Lock className="mr-4 h-6 w-6 shrink-0 text-[#d7192d]" />

                <input
                  type={showPassword ? "text" : "password"}
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-3 text-gray-400 hover:text-gray-600"
                >

                  {showPassword ? (
                    <Eye className="h-5 w-5" />
                  ) : (
                    <EyeOff className="h-5 w-5" />
                  )}

                </button>

              </div>


              {/* Remember + Forgot */}
              <div className="mb-7 flex items-center justify-between">

                <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-500">

                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-5 w-5 accent-[#d7192d]"
                  />

                  Remember me

                </label>
                  <button type="button" className="text-sm font-semibold text-[#d7192d] hover:underline">Forgot Password?</button>

              </div>


              {/* Login */}
              <button 
                type="submit"

                className="flex h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-[#d7192d] text-[15px] font-semibold text-white transition hover:bg-[#bd1326] hover:shadow-lg"
              >

                Log In

                <ArrowRight className="h-5 w-5" />

              </button>

            </form>


            {/* ================= OR ================= */}
            <div className="my-7 flex items-center gap-5">

              <div className="h-px flex-1 bg-gray-200" />

              <span className="text-sm text-gray-500">
                Or
              </span>

              <div className="h-px flex-1 bg-gray-200" />

            </div>


            {/* ================= GOOGLE ================= */}
            <button
              type="button"
              className="mb-3 flex h-[54px] w-full items-center justify-center gap-3 rounded-xl border border-gray-200 text-sm text-gray-600 transition hover:bg-gray-50"
            >

              <img className="w-5 h-5" src={asserts.Google_icon} alt="Google icon" />

              Continue with Google

            </button>


            {/* ================= APPLE ================= */}
            <button
              type="button"
              className="flex h-[54px] w-full items-center justify-center gap-3 rounded-xl border border-gray-200 text-sm text-gray-600 transition hover:bg-gray-50"
            >

             <img className="w-5 h-5" src={asserts.apple_icon} alt="apple icon" />

              Continue with Apple

            </button>


            {/* ================= SIGN UP ================= */}
            <div className="mt-9 text-center text-sm text-gray-500">

              Don't have an account?

              <button onClick={()=>navigate('./register')}
                type="button"
                className="ml-2 font-semibold text-[#d7192d] hover:underline"
              >
                Sign Up
              </button>

            </div>

          </div>

        </section>

      </div>

    </div>
  );
};

export default Login;