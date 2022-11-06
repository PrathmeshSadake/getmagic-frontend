import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const user = { name: "Prathmesh" };

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  });

  return <>{user ? children : null}</>;
};

export default ProtectedRoute;
