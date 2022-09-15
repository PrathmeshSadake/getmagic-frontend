import Link from "next/link";
import NavigationLayout from "../layouts/navigationlayout";

export default function Navigation(props) {
  return (
    <Link href="/">
      <a>Home</a>
    </Link>
  );
}


Navigation.PageLayout = NavigationLayout