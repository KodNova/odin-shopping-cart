import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <h1>404 page not found.</h1>
      <Link className="underline" to="/">
        Homepage
      </Link>
    </>
  );
}
