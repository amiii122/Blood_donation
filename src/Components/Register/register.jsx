import React, { useState } from "react";
import {
  Heart,
  Droplet,
  Users,
  UserRound,
  Mail,
  Phone,
  CalendarDays,
  LockKeyhole,
  Eye,
  EyeOff,
  Building2,
  ArrowRight,
  Check,
} from "lucide-react";

import { useAppContext } from '../../AppContext/Appcontext';

const Signup = () => {

  const {navigate}=useAppContext()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [Donorform, setDonorForm] = useState({
    name: "",
    email: "",
    password: "",
    phonenumber:"",
    DOB:"",
    confirmpass:"",
  });

  const handleChange = (e) => {
    setDonorForm({ ...Donorform, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans">

      <div className="flex min-h-screen flex-col lg:flex-row">

        {/* =====================================================
            LEFT SIDE
           ===================================================== */}

        <section className=" hidden lg:block relative min-h-[760px] w-full overflow-hidden bg-[#fff8f8] lg:min-h-screen lg:w-[52%]">

          {/* Background circles */}

          <div className="absolute -right-20 top-20 h-60 w-60 rounded-full bg-[#ffeef0]" />

          <div className="absolute -left-28 bottom-24 h-72 w-72 rounded-full bg-[#fff0f1]" />

          <div className="absolute left-[45%] top-[38%] h-64 w-64 rounded-full bg-[#ffe7e9]" />


          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="relative z-10 h-full px-7 pt-8 sm:px-12 lg:px-12 xl:px-[72px]">

            {/* =================================================
                LOGO
            ================================================= */}

            <div className="flex items-center gap-4">

              <div className="relative flex h-[65px] w-[75px] items-center justify-center">

                <Heart
                  className="absolute h-[68px] w-[68px] fill-[#d7192d] text-[#d7192d]"
                />

                <Droplet
                  className="relative z-10 h-7 w-7 fill-white text-white"
                />

              </div>

              <div>

                <h1 className="text-[34px] font-bold leading-none tracking-tight text-[#17283a] sm:text-[42px]">

                  Life<span className="text-[#d7192d]">Link</span>

                </h1>

                <p className="mt-1 text-xs text-[#65758a] sm:text-sm">
                  Donate Today. Save Tomorrow.
                </p>

              </div>

            </div>


            {/* =================================================
                HERO TEXT
            ================================================= */}

            <div className="relative z-20 mt-12 sm:mt-14">

              <h2 className="text-[38px] font-bold leading-[1.08] tracking-tight text-[#17283a] sm:text-[48px]">

                Be a Part of

                <span className="block text-[#d7192d]">
                  Something Bigger
                </span>

              </h2>

              <p className="mt-5 max-w-[330px] text-[15px] leading-[1.5] text-[#5f7083] sm:text-base">

                Join LifeLink and help save lives.
                <br />

                It only takes a few minutes to
                <br />

                make a lifelong impact.

              </p>

            </div>


            {/* =================================================
                DECORATIVE HEART
            ================================================= */}

            <div className="absolute right-[17%] top-[29%] z-20">

              <div className="relative">

                <Heart
                  className="h-14 w-14 rotate-[-15deg] text-[#d7192d]"
                />

                <div className="absolute -left-12 bottom-0 h-[2px] w-14 rotate-[-8deg] bg-[#d7192d]" />

              </div>

            </div>


            {/* =================================================
                BENEFITS
            ================================================= */}

            <div className="absolute left-7 top-[49%] z-30 space-y-5 sm:left-12 lg:left-[72px]">

              {/* Donate Blood */}

              <div className="flex items-center gap-4">

                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#ffe8e9]">

                  <Droplet
                    className="h-6 w-6 fill-[#d7192d] text-[#d7192d]"
                  />

                </div>

                <div>

                  <h3 className="text-sm font-semibold text-[#355579]">
                    Donate Blood
                  </h3>

                  <p className="mt-1 max-w-[190px] text-xs leading-4 text-[#718198]">
                    Your donation gives hope
                    <br />
                    to those in need.
                  </p>

                </div>

              </div>


              {/* Help People */}

              <div className="flex items-center gap-4">

                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#ffe8e9]">

                  <Users className="h-6 w-6 text-[#d7192d]" />

                </div>

                <div>

                  <h3 className="text-sm font-semibold text-[#355579]">
                    Help People
                  </h3>

                  <p className="mt-1 max-w-[190px] text-xs leading-4 text-[#718198]">
                    A stronger community
                    <br />
                    starts with you.
                  </p>

                </div>

              </div>


              {/* Build Future */}

              <div className="flex items-center gap-4">

                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#ffe8e9]">

                  <Heart className="h-6 w-6 fill-[#d7192d] text-[#d7192d]" />

                </div>

                <div>

                  <h3 className="text-sm font-semibold text-[#355579]">
                    Build a
                    <br />
                    Healthier Future
                  </h3>

                  <p className="mt-1 max-w-[190px] text-xs leading-4 text-[#718198]">
                    Together we can
                    <br />
                    save more lives.
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                DONOR IMAGE
            ================================================= */}

            {/* <div className="absolute bottom-[70px] right-[-20px] z-20 hidden h-[55%] w-[58%] md:block lg:right-[-15px] lg:h-[57%] lg:w-[59%]">

              <img
                src={donorImage}
                alt="Blood donation illustration"
                className="h-full w-full object-contain object-bottom"
              />

            </div> */}


            {/* =================================================
                BE A DONOR TEXT
            ================================================= */}

            <div className="absolute bottom-[115px] left-[12%] z-40 hidden sm:block">

              <div className="flex items-center">

                <span className="font-serif text-3xl italic text-[#d7192d]">
                  Be a Donor
                </span>

                <Heart
                  className="ml-2 h-9 w-9 text-[#d7192d]"
                />

              </div>

            </div>


            {/* =================================================
                BOTTOM RED WAVES
            ================================================= */}

            <div className="absolute bottom-[-75px] left-[-10%] z-50 h-[125px] w-[125%] rotate-[7deg] rounded-[50%] bg-[#ed1028]" />

            <div className="absolute bottom-[-100px] left-[-5%] z-40 h-[120px] w-[115%] rotate-[10deg] rounded-[50%] bg-[#c80d20]" />

          </div>

        </section>


        {/* =====================================================
            RIGHT SIDE
        ===================================================== */}

        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white px-5 py-10 sm:px-8 lg:w-[48%] lg:px-10">

          {/* Background decoration */}

          <div className="absolute right-[-60px] top-[-70px] h-60 w-72 rounded-full bg-[#fff0f1]" />

          <div className="absolute bottom-[-90px] right-[-80px] h-60 w-72 rounded-full bg-[#fff1f2]" />


          {/* =================================================
              FORM CARD
          ================================================= */}

          <div className="relative z-20 w-full max-w-[630px] rounded-2xl bg-white p-7 shadow-[0_5px_30px_rgba(0,0,0,0.06)] sm:p-9 lg:p-10">

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="mb-7">

              <div className="mb-4 flex items-center gap-4">

                <Droplet
                  className="h-8 w-8 fill-[#d7192d] text-[#d7192d]"
                />

                <div className="h-[2px] w-12 bg-[#d7192d]" />

              </div>

              <h2 className="text-[30px] font-bold leading-tight text-[#142536] sm:text-[36px]">

                Create Your Account

              </h2>

              <p className="mt-2 max-w-[500px] text-[15px] leading-6 text-[#8492a6]">

                Join LifeLink and be a hero. Register now to help
                <br className="hidden sm:block" />
                save lives and make a difference.

              </p>

            </div>


            {/* =================================================
                FORM
            ================================================= */}

            <form>

              {/* ============================
                  NAME + EMAIL
              ============================ */}

              <div className="mb-4 flex flex-col gap-4 sm:flex-row">

                {/* Name */}

                <div className="flex py-3 h-[62px] flex-1 items-center rounded-xl border border-[#dfe3e8] px-4 transition focus-within:border-[#d7192d] focus-within:ring-2 focus-within:ring-red-100">

                  <UserRound className="mr-4 h-6 w-6 shrink-0 text-[#d7192d]" />

                  <input
                    onChange={handleChange}
                    value={Donorform.name}
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-transparent text-sm text-[#172536] outline-none placeholder:text-[#98a3b3]"
                  />

                </div>


                {/* Email */}

                <div className="flex py-3 h-[62px] flex-1 items-center rounded-xl border border-[#dfe3e8] px-4 transition focus-within:border-[#d7192d] focus-within:ring-2 focus-within:ring-red-100">

                  <Mail className="mr-4 h-6 w-6 shrink-0 text-[#d7192d]" />

                  <input
                    type="email"
                    onChange={handleChange}
                    value={Donorform.email}
                    name="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-[#98a3b3]"
                  />

                </div>

              </div>


              {/* ============================
                  PHONE + DOB
              ============================ */}

              <div className="mb-4 flex flex-col gap-4 sm:flex-row">

                {/* Phone */}

                <div className="flex py-3 h-[62px] flex-1 items-center rounded-xl border border-[#dfe3e8] px-4 transition focus-within:border-[#d7192d] focus-within:ring-2 focus-within:ring-red-100">

                  <Phone className="mr-4 h-6 w-6 shrink-0 text-[#d7192d]" />

                  <input
                    type="tel"
                    value={Donorform.phonenumber}
                    name="phonenumber"
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-[#98a3b3]"
                  />

                </div>


                {/* Date */}

                <div className="flex py-3 h-[62px] flex-1 items-center rounded-xl border border-[#dfe3e8] px-4 transition focus-within:border-[#d7192d] focus-within:ring-2 focus-within:ring-red-100">

                  <CalendarDays className="mr-4 h-6 w-6 shrink-0 text-[#d7192d]" />

                  <div className="w-full">

                    <input
                      type="text"
                      onChange={handleChange}
                      value={Donorform.DOB}
                      name="DOB"
                      placeholder="Date of Birth"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-[#98a3b3]"
                    />

                    <span className="text-[11px] text-[#98a3b3]">
                      DD/MM/YYYY
                    </span>

                  </div>

                </div>

              </div>


              {/* ============================
                  PASSWORD
              ============================ */}

              <div className="mb-4  flex h-[62px] items-center rounded-xl border border-[#dfe3e8] px-4 transition focus-within:border-[#d7192d] focus-within:ring-2 focus-within:ring-red-100">

                <LockKeyhole className="mr-4 h-6 w-6 shrink-0 text-[#d7192d]" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={Donorform.password}
                  onChange={handleChange}
                  name="password"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-[#98a3b3]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-3 text-[#8d99a9] hover:text-[#d7192d]"
                >

                  {showPassword ? (
                    <Eye className="h-5 w-5" />
                  ) : (
                    <EyeOff className="h-5 w-5" />
                  )}

                </button>

              </div>


              {/* ============================
                  CONFIRM PASSWORD
              ============================ */}

              <div className="mb-5 flex h-[62px] items-center rounded-xl border border-[#dfe3e8] px-4 transition focus-within:border-[#d7192d] focus-within:ring-2 focus-within:ring-red-100">

                <LockKeyhole className="mr-4 h-6 w-6 shrink-0 text-[#d7192d]" />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={Donorform.confirmpass}
                  onChange={handleChange}
                  name="confirmpass"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-[#98a3b3]"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="ml-3 text-[#8d99a9] hover:text-[#d7192d]"
                >

                  {showConfirmPassword ? (
                    <Eye className="h-5 w-5" />
                  ) : (
                    <EyeOff className="h-5 w-5" />
                  )}

                </button>

              </div>


           
          


              {/* =================================================
                  SIGN UP BUTTON
              ================================================= */}

              <button
                type="submit"
                className="flex h-[56px] w-full items-center justify-center gap-4 rounded-xl bg-[#d7192d] text-[15px] font-semibold text-white shadow-sm transition duration-200 hover:bg-[#bd1024] hover:shadow-lg"
              >

                Sign Up

                <ArrowRight className="h-5 w-5" />

              </button>

            </form>


            {/* =================================================
                LOGIN
            ================================================= */}

            <div className="mt-7 text-center text-sm text-[#8a96a7]">

              Already have an account?

              <button onClick={()=>navigate('./login')}
                type="button"
                className="ml-2 font-semibold text-[#d7192d] hover:underline"
              >
                Log In
              </button>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
};

export default Signup;