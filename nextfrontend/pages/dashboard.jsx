//Here we will check if a user has the auth as true and if yes, show user their dashboard
//If !auth is true, then we will have to push the user back to the home page
//Here only have a text field from a torm

import { useEffect, useState } from "react";
import { toast, Toast, ToastContainer } from "react-toastify";
import Navigation from "../components/navigation";
import Card from "../components/card";
import { useAuth } from "../context/authcontext";
import HomeLayout from "../layouts/homelayout";
import { db } from "../firebase-config";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
//Then
// Start with moving out the si and su work into AuthContext -> then add a signout too.
//Create a useAuth custom hook!(what!!!? Yay!!)
//Here wrap useContext into a useAuth hook that returns the current state of a user session and also, lets you logout users from
//anywhere on the platform
//Need to move the Firebase config vars to an env file inside next and then use NEXT_PROCESS_...
//See the auth notes in the next steps doc
// const [authToken, setAuthToken] = useState(null);

export default function Dashboard(props) {
  console.log(useAuth);
  //we create a useEffect hook here to test out the auth parts, to be deleted or reused later
  useEffect(() => {}, []);

  const toWrite = { FirstName: "APD", LastName: "D", Phone: "120212231232" };
  const colRef = collection(db, "usermaster");
  const firestore_db = addDoc(colRef, toWrite);
  return (
    <>
      <Navigation />
      <Card />
      <>Hey, you are in a protected route with this Auth</>
    </>
  );
}

Dashboard.PageLayout = HomeLayout;
