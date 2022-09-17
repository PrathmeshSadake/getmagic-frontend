import Link from "next/link";
import NavigationLayout from "../layouts/navigationlayout";

export default function Navigation(props) {
  return (
    <div className="flex flex-row justify-center align-middle p-2 gap-4 h-10 bg-red-200">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/signup">
        <a>Sign Up!</a>
      </Link>
      <Link href="/signin">
        <a>Sign in</a>
      </Link>
    </div>
  );
}

// Navigation.PageLayout = NavigationLayout
