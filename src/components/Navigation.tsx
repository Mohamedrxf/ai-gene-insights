
const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex space-x-8 overflow-x-auto py-4">
            <a href="#home" className="px-4 py-2 font-medium hover:text-green-500 transition-colors whitespace-nowrap" style={{ color: '#4cd137' }}>Home</a>
            <a href="#about" className="px-4 py-2 text-gray-600 hover:text-green-500 transition-colors whitespace-nowrap">About</a>
            <a href="#how-it-works" className="px-4 py-2 text-gray-600 hover:text-green-500 transition-colors whitespace-nowrap">How It Works</a>
            <a href="#team" className="px-4 py-2 text-gray-600 hover:text-green-500 transition-colors whitespace-nowrap">Team</a>
            <a href="#contact" className="px-4 py-2 text-gray-600 hover:text-green-500 transition-colors whitespace-nowrap">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
