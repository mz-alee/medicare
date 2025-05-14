import { overpass } from '@/app/components/Fonts';
import Link from 'next/link';
import React from "react";
const   SignupForm = ({handleSubmit,onSubmit,register ,signupMutation}) => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <div className="bg-white p-6 sm:p-10 w-full max-w-[90vw] sm:max-w-[500px] lg:max-w-[600px] rounded-xl shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {[
            {
              name: "username",
              label: "Full Name",
              placeholder: "Mirza Ali",
              id: 1,
            },
            {
              name: "date_of_birth",
              label: "Date of Birth",
              placeholder: "DD/MM/YYYY",
              id: 2,
            },
            {
              name: "gender",
              label: "Gender",
              placeholder: "Female/Male",
              id: 3,
            },
            {
              name: "select_role",
              label: "select role",
              // placeholder: "Female/Male",
              id: 4,
            },
            {
              name: "email",
              label: "Email",
              placeholder: "example@gmail.com",
              id: 5,
            },
            {
              name: "phone_number",
              label: " Phone Number",
              placeholder: "number",
              id: 6,
            },
            {
              name: "password",
              label: "Password",
              placeholder: "Password",
              id: 7,
            },
            // {
            //   name: "confirm-password",
            //   label: "Confirm Password",
            //   placeholder: "Confirm Password",
            //   id: 6,
            // },
          ].map(({ name, id, label, placeholder }) => (
            <div key={id} className="flex flex-col">
              <label
                htmlFor={name}
                className={`${overpass.className} italic text-gray-700 text-sm `}
              >
                {label}
              </label>
              <input
                {...register(name)}
                id={id}
                type="text"
                placeholder={placeholder}
                className="border border-gray-300 text-[12px] lg:text-[0.8vw]  py-2 px-3 rounded outline-none text-gray-600"
              />
            </div>
          ))}

          <div className=" lg:hidden flex items-center  gap-1">
            <h1
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="1000"
              className="text-[12px] lg:text-[0.9vw]  "
            >
              if you already have an Account?
            </h1>
            <Link
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="1000"
              href="/Login"
              className=" text-blue-500 text-[12px] hover:text-[#132928]  "
            >
              Login
            </Link>
          </div>
          <button
            type="submit"
            className="bg-[#1e3837] text-white hover:text-[#132928] hover:bg-black/20 font-semibold italic px-6 py-2 rounded-full transition"
          >
            {signupMutation.isPending ? "Signing" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
