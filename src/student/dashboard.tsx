import { useAuth } from "@/hooks/useAuth";

export default function StudentDashboard() {
  useAuth("student");

  return (
    <div>
      <h1>Student Dashboard</h1>
      <p>Here student will see own doubts and status</p>
    </div>
  );
}
