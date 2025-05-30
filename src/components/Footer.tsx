
const Footer = () => {
  return (
    <footer className="py-12" style={{ backgroundColor: '#2f3640' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Gene Interaction Disease Predictor</h3>
            <p className="text-gray-300 leading-relaxed">
              Advancing healthcare through AI-powered genetic analysis and disease prediction.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#how-it-works" className="block text-gray-300 hover:text-white transition-colors">How It Works</a>
              <a href="#team" className="block text-gray-300 hover:text-white transition-colors">Team</a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>research@genepredictor.ai</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Research Blvd, Science City, SC 12345</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Gene Interaction Disease Predictor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
