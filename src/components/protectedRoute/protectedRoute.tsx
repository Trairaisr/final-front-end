import { Navigate } from "react-router-dom";

export default function protectedRoute(props: {
  isLoggedIn: boolean;
  children: React.JSX.Element;
}) {
  if (!props.isLoggedIn) return <Navigate to="/" replace />; //we need to add login route

  return props.children;
}
