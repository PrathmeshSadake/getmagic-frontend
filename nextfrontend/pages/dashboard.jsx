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

export default function Dashboard(props) {
  console.log(useAuth);
  //we create a useEffect hook here to test out the auth parts, to be deleted or reused later
  // useEffect(() => {
  //   console.log(`setting up useEffect`);
  //   const toWrite = { FirstName: "APD", LastName: "D", Phone: "120212231232" };
  //   const colRef = collection(db, "usermaster");
  //   const firestore_db = addDoc(colRef, toWrite);
  //   return console.log(`leaving useEffect`);
  // }, []);

  return (
    <>
      <Navigation />
      <Card />
      <>Hey, you are in a protected route with this Auth</>
    </>
  );
}

Dashboard.PageLayout = HomeLayout;
