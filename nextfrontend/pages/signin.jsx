import Navigation from "../components/navigation";
import SignUpLayout from "../layouts/signuplayout";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { useRouter } from "next/router"; //this is to push a user to Dashboard after signing in
export default function SignIn(props) {
  //TODO on Sep 17th
  // onSubmit, call Firebase singinwithemailandpassword and get auth object -> have it go to useContext
  // In dashboard use the auth object(see dashboard.jsx after this)
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

const handleSubmit = async (e) => {
    const auth = getAuth();
    e.preventDefault();
    try {
      const auth_return = await signInWithEmailAndPassword(auth, email, password);
      console.log(`this is the returned value ${auth_return._tokenResponse.refreshToken}`)
      sessionStorage.setItem('Auth Token', auth_return.user.accessToken)
      // const router = useRouter()
      // router.push('/dashboard')
    } catch (e) {
      console.log(
        `You have this error, will be replacaed with Toastify -> ${e}`
      );
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
          <input
            className="p-2 m-2"
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="p-2 m-2"
            name="passsword"
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
              class="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
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
        </fieldset>
      </form>
    </div>
  );
}

SignIn.PageLayout = SignUpLayout;
