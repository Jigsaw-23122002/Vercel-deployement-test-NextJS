import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <section>
        <nav>
          <ul>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/blog">
              <a>Blogs</a>
            </Link>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
