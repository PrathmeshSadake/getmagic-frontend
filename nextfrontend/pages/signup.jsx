import SignUpLayout from "../layouts/signuplayout";
import { useState, useEffect } from "react";

export default function SignUp(props) {
  return (
    <div className="">
      <div className="flex flex-row items-center justify-center gap-5 h-screen">
        <input placeholder="User Name" className="flex justify-center align-middle" />
        <input placeholder="Password" />
      <button className=" border border-slate-600 bg-blue-200 w-20 font-bold text-orange-400"> Sign Up! </button>
      </div>
    </div>
  );
}

SignUp.PageLayout = SignUpLayout;
