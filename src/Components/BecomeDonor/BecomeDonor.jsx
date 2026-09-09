import React, { useState } from "react";
import {
  Lock,
  Eye,
  EyeOff,
  Heart,
  Droplets,
  User,
  Phone,
  Mail,
  CalendarDays,
  MapPin,
  Users,
  ShieldCheck,
  ArrowRight,
  UserRoundPlus,
  Check,
  LockKeyhole
} from "lucide-react";

const BecomeDonor = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        phonenumber:"",
        DOB:"",
        confirmpass:"",
        BloodGrouup:"",
        Gender:"",
        Address:"",
      });
     
     const handleChange = (e) => {
       setForm({ ...form, [e.target.name]: e.target.value });
      };
     
  const handlesubmit=async (e)=>{
          e.preventDefault();
          console.log(form);
          
  }

  return (
    <div className="min-h-screen w-full overflow-hidden bg-white font-sans">

      {/* ================= MAIN CONTAINER ================= */}
      <div className="flex min-h-screen flex-col lg:flex-row">

        {/* ==================================================
            LEFT SECTION
        ================================================== */}
        
        <section className=" hidden lg:block relative flex min-h-[700px] w-full overflow-hidden bg-[#fff9f9] lg:min-h-screen lg:w-[52%]">

          {/* Left Content */}
          <div className="relative z-20 w-full px-6 py-8 sm:px-10 lg:w-[57%] lg:px-12 xl:px-16">

            {/* Logo */}
            <div className="mb-10 flex items-center gap-3">

              <div className="relative flex h-14 w-14 rotate-[-8deg] items-center justify-center rounded-[20px] bg-[#d7192d]">
                <Heart
                  className="h-8 w-8 rotate-[8deg] fill-white text-white"
                />

                <Droplets
                  className="absolute bottom-2 left-5 h-4 w-4 rotate-[8deg] text-white"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold leading-none text-[#18283a]">
                  LifeLink
                </h2>

                <p className="mt-1 text-[11px] text-gray-500">
                  Donate Today. Save Tomorrow.
                </p>
              </div>

            </div>


            {/* Hero Text */}
            <div>

              <span className="text-xs font-bold tracking-[1px] text-[#d7192d] sm:text-sm">
                BECOME A DONOR
              </span>

              <h1 className="mt-2 text-[36px] font-bold leading-[1.08] text-[#142536] sm:text-[42px] lg:text-[38px] xl:text-[44px]">
                Your Blood Can
                <span className="block text-[#d7192d]">
                  Save Lives
                </span>
              </h1>

              <p className="mt-4 max-w-[410px] text-sm leading-6 text-[#56616d] sm:text-base">
                Be the reason someone gets a second chance at life.
                Donate blood, make a difference, and be a hero.
              </p>

            </div>


            {/* Benefits */}
            <div className="mt-7 space-y-5">

              {/* Benefit 1 */}
              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff0f1]">
                  <Droplets className="h-6 w-6 text-[#d7192d]" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#26313d]">
                    Save Lives
                  </h3>

                  <p className="mt-1 max-w-[220px] text-xs leading-4 text-gray-500">
                    Your donation gives hope to those in need.
                  </p>
                </div>

              </div>


              {/* Benefit 2 */}
              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff0f1]">
                  <Heart className="h-6 w-6 text-[#d7192d]" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#26313d]">
                    Build Healthier Communities
                  </h3>

                  <p className="mt-1 max-w-[220px] text-xs leading-4 text-gray-500">
                    A stronger community starts with you.
                  </p>
                </div>

              </div>


              {/* Benefit 3 */}
              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff0f1]">
                  <Users className="h-6 w-6 text-[#d7192d]" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#26313d]">
                    It's Safe & Simple
                  </h3>

                  <p className="mt-1 max-w-[220px] text-xs leading-4 text-gray-500">
                    The process is quick, safe and well-supported.
                  </p>
                </div>

              </div>

            </div>


            {/* Be a Donor */}
            <div className="mt-7 -rotate-3 font-serif text-2xl italic text-[#d7192d]">
              Be a Donor
              <Heart className="ml-1 inline-block h-7 w-7" />
            </div>

          </div>


          {/* ================= DONATION IMAGE ================= */}
          <div className="absolute right-[-8%] top-0 hidden h-full w-[55%] lg:block">

            <img
              src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1000&q=80"
              alt="Blood donation"
              className="h-full w-full object-cover"
            />

            {/* Image Fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#fff9f9] via-transparent to-transparent" />

          </div>


          {/* Mobile Image */}
          <div className="relative mt-4 h-[280px] w-full lg:hidden">

            <img
              src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=900&q=80"
              alt="Blood donation"
              className="h-full w-full object-cover"
            />

          </div>


          {/* Bottom Red Decoration */}
          <div className="absolute -bottom-24 -left-16 hidden h-40 w-[700px] rotate-[-8deg] bg-[#d7192d] lg:block" />

        </section>


        {/* ==================================================
            RIGHT SECTION
        ================================================== */}

        <section className="relative overflow-hidden flex w-full items-center justify-center bg-white px-4 py-10 sm:px-8 lg:min-h-screen lg:w-[48%] lg:px-8 xl:px-12">

          {/* Top Red Decoration */}
          <div className="absolute -right-20 -top-20 h-40 w-64 rotate-[30deg] rounded-full bg-[#d7192d]" />


          {/* ================= FORM CARD ================= */}
          <div className="relative z-10 w-full max-w-[590px] rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] sm:p-8 lg:p-10">

            {/* Form Header */}
            <div className="mb-7">

              <div className="mb-2 flex items-center gap-3 text-[#d7192d]">

                <Droplets className="h-7 w-7" />

                <span className="h-[2px] w-10 bg-[#d7192d]" />

              </div>

              <h2 className="text-3xl font-bold text-[#172839] sm:text-[36px]">
                Become a Donor
              </h2>

              <p className="mt-2 max-w-[480px] text-sm leading-6 text-gray-500 sm:text-[15px]">
                Fill in your details to register as a blood donor
                and help save lives.
              </p>

            </div>


            {/* ================= FORM ================= */}
            <form onSubmit={handlesubmit}>

              {/* Row 1 */}
              <div className="mb-4 flex flex-col gap-4 sm:flex-row">

                {/* Full Name */}
                <div className="flex py-4 h-[53px] flex-1 items-center rounded-lg border border-gray-200 px-3 transition focus-within:border-[#d7192d] focus-within:ring-2 focus-within:ring-red-100">

                  <User className="mr-3 h-5 w-5 shrink-0 text-[#d7192d]" />

                  <input
                  value={form.name}
                  onChange={handleChange}
                  name="name"
                    type="text"
                    
                    placeholder="Full Name"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  />

                </div>


                {/* Phone */}
                <div className="flex py-4 h-[53px] flex-1 items-center rounded-lg border border-gray-200 px-3 transition focus-within:border-[#d7192d] focus-within:ring-2 focus-within:ring-red-100">

                  <Phone className="mr-3 h-5 w-5 shrink-0 text-[#d7192d]" />

                  <input
                  value={form.phonenumber}
                  name="phonenumber"
                  onChange={handleChange}
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  />

                </div>

              </div>


              {/* Row 2 */}
              <div className="mb-4 flex flex-col gap-4 sm:flex-row">

                {/* Email */}
                <div className="flex py-4 h-[53px] flex-1 items-center rounded-lg border border-gray-200 px-3 transition focus-within:border-[#d7192d] focus-within:ring-2 focus-within:ring-red-100">

                  <Mail className="mr-3 h-5 w-5 shrink-0 text-[#d7192d]" />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  />

                </div>


                {/* Date */}
                <div className="flex py-4 h-[53px] flex-1 items-center rounded-lg border border-gray-200 px-3 transition focus-within:border-[#d7192d] focus-within:ring-2 focus-within:ring-red-100">

                  <CalendarDays className="mr-3 h-5 w-5 shrink-0 text-[#d7192d]" />

                  <input
                  value={form.DOB}
                  name="DOB"
                  onChange={handleChange}
                    type="text"
                    placeholder="Date of Birth"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  />

                </div>

              </div>
              {/* Row 3 */}
              <div className="mb-4 flex flex-col gap-4 sm:flex-row">
                    {/* Address */}
              <div className="mb-4 flex h-[53px]  items-center rounded-lg border border-gray-200 py-4 px-3 md:px-8 transition focus-within:border-[#d7192d] focus-within:ring-2 focus-within:ring-red-100">

                <MapPin className="mr-3 h-5 w-5 shrink-0 text-[#d7192d]" />

                <input
                value={form.Address}
                onChange={handleChange}
                  type="text"
                  name="Address"
                  placeholder="Address"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                />

              </div>
                {/* Password */}
              <div className="mb-4 flex  items-center rounded-xl border border-gray-200 p-4 transition focus-within:border-[#d7192d] focus-within:ring-2 focus-within:ring-red-100">

                <Lock className="mr-4 h-6 w-6 shrink-0 text-[#d7192d]" />

                <input
                value={form.password}
                name="password"
                onChange={handleChange}
                  type={showPassword ? "text" : "password"}
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
              </div>
               <div className="mb-5 flex h-[62px] items-center rounded-xl border border-[#dfe3e8] px-4 transition focus-within:border-[#d7192d] focus-within:ring-2 focus-within:ring-red-100">

                <LockKeyhole className="mr-4 h-6 w-6 shrink-0 text-[#d7192d]" />

                <input
                value={form.confirmpass}
                onChange={handleChange}
                name="confirmpass"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
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

             

              {/* Blood Group + Gender */}
              <div className="mb-4 flex flex-col gap-4 sm:flex-row">

                {/* Blood Group */}
                <div className="flex min-h-[58px] flex-1 items-center rounded-lg border border-gray-200 px-3">

                  <Droplets className="mr-3 h-5 w-5 shrink-0 text-[#d7192d]" />

                  <div className="flex w-full flex-col">

                    <label className="text-[11px] text-gray-500">
                      Blood Group
                    </label>

                    <select name="BloodGroup" value={form.BloodGrouup} onChange={handleChange} className="w-full bg-transparent text-xs text-gray-500 outline-none">
                      <option>Select your blood group</option>
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                      <option>O+</option>
                      <option>O-</option>
                    </select>

                  </div>

                </div>


                {/* Gender */}
                <div className="flex min-h-[58px] flex-1 items-center rounded-lg border border-gray-200 px-3">

                  <Users className="mr-3 h-5 w-5 shrink-0 text-[#d7192d]" />

                  <div className="flex w-full flex-col">

                    <label className="text-[11px] text-gray-500">
                      Gender
                    </label>

                    <select name="Gender" onChange={handleChange} value={form.Gender} className="w-full bg-transparent text-xs text-gray-500 outline-none">
                      <option>Select your gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>

                  </div>

                </div>

              </div>


              {/* Terms */}
              <div className="mb-5 flex items-start gap-2">

                <input
                  id="terms"
                  type="checkbox"
                  className="mt-[2px] h-[18px] w-[18px] shrink-0 accent-[#d7192d]"
                />

                <label
                  htmlFor="terms"
                  className="text-xs leading-5 text-gray-500"
                >
                  I agree to the{" "}
                  <span className="font-semibold text-[#d7192d]">
                    Terms and Conditions
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-[#d7192d]">
                    Privacy Policy
                  </span>
                </label>

              </div>


              {/* Register Button */}
              <button
                type="submit"
                className="flex h-[53px] w-full items-center justify-center gap-3 rounded-lg bg-[#d7192d] text-sm font-semibold text-white transition hover:bg-[#bd1326] hover:shadow-lg"
              >

                <UserRoundPlus className="h-5 w-5" />

                <span>Register as Donor</span>

                <ArrowRight className="ml-1 h-5 w-5" />

              </button>

            </form>


            {/* Login */}
            <div className="my-6 text-center text-xs text-gray-400">

              Already a donor?

              <button className="ml-1 font-semibold text-[#d7192d]">
                Log In
              </button>

            </div>


            {/* ================= FEATURES ================= */}
            <div className="flex flex-col gap-4 rounded-xl bg-[#fff2f3] px-4 py-4 sm:flex-row sm:items-center sm:justify-around sm:gap-3">

              {/* Feature 1 */}
              <div className="flex flex-1 items-center gap-2">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d7192d] text-white">
                  <Droplets className="h-4 w-4" />
                </div>

                <div>
                  <h4 className="text-[10px] font-semibold text-gray-600">
                    Safe Process
                  </h4>

                  <p className="text-[8px] text-gray-400">
                    Your health comes first
                  </p>
                </div>

              </div>


              {/* Feature 2 */}
              <div className="flex flex-1 items-center gap-2">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d7192d] text-white">
                  <ShieldCheck className="h-4 w-4" />
                </div>

                <div>
                  <h4 className="text-[10px] font-semibold text-gray-600">
                    Verified Records
                  </h4>

                  <p className="text-[8px] text-gray-400">
                    Trusted & secure
                  </p>
                </div>

              </div>


              {/* Feature 3 */}
              <div className="flex flex-1 items-center gap-2">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d7192d] text-white">
                  <Heart className="h-4 w-4 fill-white" />
                </div>

                <div>
                  <h4 className="text-[10px] font-semibold text-gray-600">
                    Lasting Impact
                  </h4>

                  <p className="text-[8px] text-gray-400">
                    One donation, many lives
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

    </div>
  );
};

export default BecomeDonor;