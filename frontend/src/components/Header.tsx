import { Link } from "@tanstack/react-router";

const Header = () => (
  <header>
    <div className="p-2 flex gap-2">
      {/* So these two links are going to appear at the top of every page */}
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>{" "}
      <Link
        to="/posts"
        search={{ q: "post1" }}
        className="[&.active]:font-bold"
      >
        Posts
      </Link>
      header
    </div>
    <hr />
  </header>
);

export default Header;
