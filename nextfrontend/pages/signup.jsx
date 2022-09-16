import SignUpLayout from "../layouts/signuplayout";
import { useState, useRef, useEffect, useReducer } from "react";
import { validateArgCount } from "@firebase/util";


const handleAction = (e) => {
  e.preventDefault();
  // TODO- set the data for username and call firebase

  console.log(e.target)
  alert("You've just signed up! Get ready for some action!");
};

const formReducer = (state, e) => {
return {...state, [e.target.name]: e.target.value}
}
export default function SignUp(props) {
  const [formData, setFormData] = useState(""); //passing in a form Reducer function, and an empty initial value
  

  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <form onSubmit={handleAction} className="m-2 p-2"> {/*We are using a Form element here with a basic setup and a callback for on click*/}
        <fieldset className="p-5 m-2 gap-5 border border-black">
          <input name="name" type="name" placeholder="User Name" className="m-2" onChange={setFormData}/>
          <input name="email" type="email" placeholder="Email" className="m-2" onChange={setFormData}/>
          <input name="password" type="password" placeholder="Password" className="m-2" onChange={setFormData}/>
        </fieldset>
        <button
          type="submit"
          className=" border border-slate-600 bg-blue-200 w-20 font-bold text-orange-400"
        >
          Sign Up!
        </button>
      </form>
    </div>
  );
}

SignUp.PageLayout = SignUpLayout;
