import SignUpLayout from "../layouts/signuplayout";
import { useState, useRef, useEffect, useReducer } from "react";
import { validateArgCount } from "@firebase/util";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {getAuth} from 'firebase/auth'


const formReducer = (state, e) => {
return {...state, [e.target.name]: e.target.value}
}
export default function SignUp(props) {
const auth = getAuth()


  const [user, setUser] = useState(""); //passing in a form Reducer function, and an empty initial value
  const [email, setEmail] = useState(""); //passing in a form Reducer function, and an empty initial value
  const [password, setPassword] = useState(""); //passing in a form Reducer function, and an empty initial value

  const handleAction = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password) 
    //alert("You've just signed up! Get ready for some action!");
  };  


  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <form onSubmit={handleAction} className="m-2 p-2"> {/*We are using a Form element here with a basic setup and a callback for on click*/}
        <fieldset className="p-5 m-2 gap-5 border border-black">
          <input name="name" type="name" placeholder="User Name" className="m-2" onChange={(e)=> setUser(e.target.value)} />
          <input name="email" type="email" placeholder="Email" className="m-2" onChange={(e)=> setEmail(e.target.value)}/>
          <input name="password" type="password" placeholder="Password" className="m-2" onChange={(e)=> setPassword(e.target.value)} />
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
