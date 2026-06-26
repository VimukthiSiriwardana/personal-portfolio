function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-sky-400">
          VS
        </h1>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 text-slate-300 font-medium">
          <li className="hover:text-sky-400 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-sky-400 cursor-pointer transition">
            About
          </li>

          <li className="hover:text-sky-400 cursor-pointer transition">
            Skills
          </li>

          <li className="hover:text-sky-400 cursor-pointer transition">
            Projects
          </li>

          <li className="hover:text-sky-400 cursor-pointer transition">
            Contact
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;