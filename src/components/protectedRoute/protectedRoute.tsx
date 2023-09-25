import { Navigate } from "react-router-dom";

export default function protectedRoute(props: {
  isLoggedIn: boolean;
  children: React.JSX.Element;
}) {
  if (!props.isLoggedIn) return <Navigate to="/login" replace />; 

  return props.children;
}
