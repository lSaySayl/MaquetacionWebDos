import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {

  const error = useRouteError();

  return (
    <div>
      <h1>{error.status}</h1>
      <p>Page not found</p>
      <p>{error.statusText || error.message} </p>
      <Link to = "/">Volver al home</Link>
    </div>
  );
};

export default NotFound;
