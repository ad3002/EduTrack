// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <Link href="/" className="text-white">
        Home
      </Link>
    </nav>
  );
};

export default Navbar;