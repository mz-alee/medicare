"use client";
import React from "react";
import AuthLeft from "../components/AuthLeft";
import { overpass } from "../components/Fonts";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import logo from "../../../public/Images/Logo.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { resetUpdatePassword } from "../SignupApi";
import { useRouter } from 'next/navigation';

const ResetPassword = () => {
  const router = useRouter()
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });
  const updateMutation = useMutation({
    mutationFn: (data) => resetUpdatePassword(data),
    onSuccess: (data) => {
      router.push("/Login")
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (data) => {
    updateMutation.mutate(data)
    console.log(data);
  };
  return (
    <div className="authBg h-[100vh] w-full flex flex-col md:flex-row px-10">
      <div className="text-white flex  items-center md:w-100  fixed gap-3">
        <Image src={logo} alt="logo" className="w-20" />
        <h1
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-duration="1000"
          className="text-md md:text-[1.2vw] font-[500] italic"
        >
          MediScheduler
        </h1>
      </div>
      {/* left side  */}
      <div className="w-full lg:w-1/2 flex  justify-center items-center">
        <AuthLeft
          title="Reset Password?"
          text="password requirements"
          requirements={[
            "At least 8 characters",
            "Include an uppercase letter",
            "Include a number",
            "Include a special character",
          ]}
        />
      </div>
      {/* right side  */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="z-10 px-2  bg-white py-8  w-[80vw] sm:w-[40vw] flex justify-center items-center lg:h-[65vh]  rounded-xl ">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="flex flex-col w-full gap-3 px-3  ">
              <div>
                <label
                  htmlFor="password"
                  className={`${overpass.className} text-[12px] md:text-[1vw] italic text-gray-700`}
                >
                  new password
                </label>
                <input
                  id="password"
                  {...register("password")}
                  className="border outline-none  w-full border-gray-300 text-[12px] md:text-[0.9vw] py-2 text-gray-600 rounded px-2"
                  type="text"
                  placeholder="password"
                />
              </div>
              <div>
                <label
                  htmlFor="confirmpassword"
                  className={`${overpass.className} text-[12px] md:text-[1vw] italic text-gray-700`}
                >
                  confirm password
                </label>
                <input
                  {...register("token")}
                  id="confirmpassword"
                  className="border outline-none  w-full border-gray-300 text-[12px] md:text-[0.9vw] py-2 text-gray-600 rounded px-2"
                  type="text"
                  placeholder="password"
                />
              </div>
              <button className="bg-[#1e3837] flex items-center justify-center gap-2 text-white mt-5 hover:text-[#132928] hover:bg-black/20 font-[600] italic text-center px-4 w-full py-2 rounded-full">
                Send <FaArrowRight />
              </button>
              <Link
                href="/Login"
                className="underline text-[14px] font-[500] text-center text-[#1e3837] "
              >
                back to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

// import { overpass } from "@/app/components/Fonts";
// import Link from "next/link";
// import React from "react";
// import { FaArrowRight } from "react-icons/fa6";

// const ForgetRightSide = () => {
//   return (
//     <div className="z-10 px-2  bg-white py-8  w-[80vw] sm:w-[40vw] flex justify-center items-center lg:h-[45vh]  rounded-xl ">
//       <form className='w-full'>
//         <div className="flex flex-col w-full gap-1.5 px-3  ">
//           <label
//             htmlFor="email"
//             className={`${overpass.className} text-[12px] md:text-[1vw] italic text-gray-700`}
//           >
//             Email / Phone Number
//           </label>
//           <input
//             id="email"
//             className="border outline-none  w-full border-gray-300 text-[12px] md:text-[0.9vw] py-2 text-gray-600 rounded px-2"
//             type="email "
//             placeholder="example@gmail.com"
//           />
//           <button className="bg-[#1e3837] flex items-center justify-center gap-2 text-white mt-5 hover:text-[#132928] hover:bg-black/20 font-[600] italic text-center px-4 w-full py-2 rounded-full">
//             Send <FaArrowRight />
//           </button>
//           <Link
//             href="/Login"
//             className="underline text-[14px] font-[500] text-center text-[#1e3837] "
//           >
//             back to login
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ForgetRightSide;
