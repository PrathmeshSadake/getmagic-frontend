import Router, { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../context/authcontext";

const ProtectedRoutes = ({ children }) => {
  const { user } = useAuth;
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/home");
    }
  }, [router, user]);

  return <>{user ? children : null}</>;
};

export default ProtectedRoutes;
