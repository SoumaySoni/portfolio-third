export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-indigo-600">Soumay.dev</h1>
        <div className="space-x-6 hidden md:flex text-gray-700 font-medium">
          <a href="#about" className="hover:text-indigo-600 transition">About</a>
          <a href="#projects" className="hover:text-indigo-600 transition">Projects</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
        </div>
      </div>
    </nav>
  )
}
