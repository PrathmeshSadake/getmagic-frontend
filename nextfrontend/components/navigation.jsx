import Link from "next/link";
import NavigationLayout from "../layouts/navigationlayout";
import { useAuth } from "../context/authcontext";

export default function Navigation(props) {
  
  const {user,signout} = useAuth()
  const handleSignout = () => {signout()}
  return (
    <div className="flex flex-row justify-center align-middle p-2 gap-4 h-10 bg-slate-200 font-extrabold">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/signup">
        <a>Sign Up!</a>
      </Link>
      <Link href="/signin">
        <a>Sign in</a>
      </Link>
      {user && <Link href="/signout"><a>Signout</a></Link>}
      {user && <button onClick={handleSignout} name="Signout"> Sign out </button>}
    </div>
  );
}

// Navigation.PageLayout = NavigationLayout
//      {() => {if(user) return(<Link> href="singout" <a>Signout</a></Link>)}}