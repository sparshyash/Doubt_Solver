import { useAuth } from "@/hooks/useAuth";

export default function AdminDashboard() {
  useAuth("admin");

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Here teacher will see and solve doubts</p>
    </div>
  );
}
