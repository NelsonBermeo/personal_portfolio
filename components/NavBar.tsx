import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="p-4 bg-gray-800 text-white">
            <ul className="flex space-x-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;