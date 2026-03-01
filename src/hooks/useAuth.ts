import { useEffect } from "react";
import { useRouter } from "next/router";

export function useAuth(requiredRole: "admin" | "student") {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== requiredRole) {
      router.push("/auth/" + requiredRole + "-login");
    }
  }, []);
}
