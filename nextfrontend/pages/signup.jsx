import SignUpLayout from "../layouts/signuplayout";
import { useState, useRef, useEffect, useReducer } from "react";
import Navigation from "../components/navigation.jsx";
import { useAuth } from "../context/authcontext";
import Router from "next/router";


export default function SignUp(props) {
  const [email, setEmail] = useState(""); //passing in a form Reducer function, and an empty initial value
  const [password, setPassword] = useState(""); //passing in a form Reducer function, and an empty initial value

  const {user, signup} = useAuth()

  const handleAction = async (e) => {
    e.preventDefault();
    try {
      const userCred = await signup(email,password);
      Router.push('/dashboard')
      console.log(userCred.user.accessToken);
    } catch (e) {
      console.log(`You have an error! ${e} ${user}`);
    }
  };

  return (
    <>
      <Navigation />
      <div className="flex flex-row items-center justify-center h-screen">
        <form onSubmit={handleAction} className="flex items-center m-2 p-2">
          {/*We are using a Form element here with a basic setup and a callback for on click*/}
          <fieldset className="p-5 m-2 gap-5">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="m-2"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="m-2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <button
            type="submit"
            className="group inline-flex items-center px-4 py-1.5 font-semibold
             text-white rounded-full
              border border-slate-600
               bg-slate-500 hover:bg-slate-700 "
          >
            Sign Up!
            <svg
              class="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
              fill="none"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              aria-hidden="true"
            >
              <path className="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path>
              <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}

SignUp.PageLayout = SignUpLayout;

