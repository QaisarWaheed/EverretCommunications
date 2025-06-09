import { useNavigate } from "react-router";
import { useUser } from "../context/UserContext.tsx";

export const ProtectedRoutes = (children) => {
  const { user } = useUser();
  const navigate = useNavigate();
  return user ? children : navigate("/");
};
