import { useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <>
      <h1>404 error</h1>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </>
  );
}

export default NotFound;