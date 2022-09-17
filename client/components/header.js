import Link from "next/link";

export default ({ currentUser }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">PatTix</a>
        </Link>

        <div className="d-flex justify-content-end">
          <ul className="nav d-flex align-items-center">
            {currentUser ? "Sign Out" : "Sign In/Up"}
          </ul>
        </div>
      </div>
    </nav>
  );
};
