import { useRouter } from "next/router";
import { useState } from "react";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (email === "admin@test.com" && password === "admin123") {
      localStorage.setItem("role", "admin");
      router.push("/admin/dashboard");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <input onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}
