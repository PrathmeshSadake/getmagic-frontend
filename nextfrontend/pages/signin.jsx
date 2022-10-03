import Navigation from "../components/navigation";
import SignUpLayout from "../layouts/signuplayout";
import { useState } from "react";
import { useAuth } from "../context/authcontext";
import { Router, useRouter } from "next/router"; //this is to push a user to Dashboard after signing in
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SignIn(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { user, signin } = useAuth();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth_return = await signin(email, password);
      router.push("/dashboard");
      console.log(
        `this is the returned value ${auth_return._tokenResponse.refreshToken}`
      );
      sessionStorage.setItem("Auth Token", auth_return.user.accessToken);
    } catch (e) {
      toast(`Ooooppss ${e}`, { autoClose: 2000 });
    }
  };
  return (
    <div className="font-bold">
      <Navigation />

      <form
        onSubmit={handleSubmit}
        className="flex items-center align-middle gap-2"
      >
        <fieldset className="gap-2 p-2 m-2">
          <div className="grid grid-cols-1 align-middle justify-center">
            <label className="p-2 m-2" for="email">
              Email
            </label>
            <input
              className="p-2 m-2"
              name="email"
              type="email"
              placeholder="Email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label for="password">Password 🔑 </label>
            <input
              className="p-2 m-2"
              name="passsword"
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button
              type="submit"
              className="group inline-flex items-center px-4 py-1.5 font-semibold
            text-white rounded-full
            border border-slate-600
            bg-slate-500 hover:bg-slate-700 "
            >
              Sign in
              <svg
                className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                fill="none"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                aria-hidden="true"
              >
                <path
                  className="opacity-0 transition group-hover:opacity-100"
                  d="M0 5h7"
                ></path>
                <path
                  className="transition group-hover:translate-x-[3px]"
                  d="M1 1l4 4-4 4"
                ></path>
              </svg>
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

SignIn.PageLayout = SignUpLayout;
