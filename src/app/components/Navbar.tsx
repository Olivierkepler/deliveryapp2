import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
        <Link href="/home">Home</Link>
        </li>
        <li>
        <Link href="/profile">Profile</Link>
        </li>
        <li>
        <Link href="/about">About</Link>
        </li>
        <li>
        <Link href="/contact">Contact</Link>

        </li>

        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
