import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../context/authcontext";

export function ProtectedRoutes({ children }) {
  const { user } = useAuth();

  const router = useRouter();
  
  useEffect(() => {
    if (!user) {
      router.push("/home");
    }
  }, [user]);

  return <>{user ? children : null}</>;
};