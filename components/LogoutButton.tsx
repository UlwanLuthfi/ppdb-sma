import { useAuthStore } from "@/lib/authStore";

export default function LogoutButton() {
  const { logout } = useAuthStore();

  return (
    <button
      onClick={logout}
      type="button"
      className="btn btn-outline-primary fw-semibold"
    >
      Logout
    </button>
  );
}
