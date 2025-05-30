
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" style={{ fontFamily: 'Segoe UI, system-ui, sans-serif' }}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Gene Interaction Disease Predictor</h1>
            <p className="text-lg text-gray-600">AI-based Prediction of Diseases from Gene Interactions</p>
          </div>
        </div>
      </header>

      {/* Navigation */}
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

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#2f3640' }}>
            Revolutionizing Disease Prediction
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to predict diseases through advanced gene interaction analysis. 
            Our cutting-edge platform combines genomics with machine learning to provide accurate disease risk assessments.
          </p>
          <button 
            className="px-8 py-4 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: '#4cd137' }}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20" style={{ backgroundColor: '#f5f6fa' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#2f3640' }}>About Our Technology</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Understanding gene interactions is crucial for predicting disease susceptibility and developing personalized treatments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2f3640' }}>Gene Interactions</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Genes don't work in isolation. They interact in complex networks that influence disease development. 
                Our platform analyzes these intricate relationships to identify patterns that traditional methods might miss.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By understanding how genes communicate and influence each other, we can better predict health outcomes 
                and identify potential therapeutic targets.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2f3640' }}>AI-Powered Analysis</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our advanced machine learning algorithms process vast amounts of genomic data to identify subtle 
                patterns and correlations that indicate disease risk.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through deep learning and neural networks, we can predict disease susceptibility with unprecedented 
                accuracy, enabling early intervention and personalized treatment strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#2f3640' }}>How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our three-step process transforms genetic data into actionable health insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#4cd137' }}>
                1
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2f3640' }}>Input Genes</h3>
              <p className="text-gray-600 leading-relaxed">
                Upload your genetic data or input specific gene sequences. Our platform accepts various formats 
                and ensures data privacy and security.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#4cd137' }}>
                2
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2f3640' }}>AI Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Our advanced AI algorithms analyze gene interactions, cross-reference with medical databases, 
                and identify patterns associated with disease risks.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#4cd137' }}>
                3
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2f3640' }}>Disease Prediction</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive comprehensive reports with disease risk assessments, confidence levels, 
                and recommendations for further medical consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20" style={{ backgroundColor: '#f5f6fa' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#2f3640' }}>Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experts behind our groundbreaking gene interaction analysis platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-2xl text-gray-500">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#2f3640' }}>Dr. Sarah Chen</h3>
              <p className="text-gray-600 font-medium mb-2">Lead Geneticist</p>
              <p className="text-sm text-gray-500">PhD in Molecular Biology with 15+ years in genomics research</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-2xl text-gray-500">👨‍💻</span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#2f3640' }}>Alex Rodriguez</h3>
              <p className="text-gray-600 font-medium mb-2">AI Research Director</p>
              <p className="text-sm text-gray-500">Machine Learning expert specializing in healthcare applications</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-2xl text-gray-500">👩‍💼</span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#2f3640' }}>Dr. Emily Watson</h3>
              <p className="text-gray-600 font-medium mb-2">Bioinformatics Lead</p>
              <p className="text-sm text-gray-500">Expert in computational biology and genetic data analysis</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-2xl text-gray-500">👨‍🔬</span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#2f3640' }}>Prof. Michael Kim</h3>
              <p className="text-gray-600 font-medium mb-2">Medical Advisor</p>
              <p className="text-sm text-gray-500">Clinical researcher with expertise in personalized medicine</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#2f3640' }}>Contact Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team to learn more about our technology or discuss collaboration opportunities
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-colors resize-vertical"
                  placeholder="Tell us about your inquiry or collaboration ideas..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-3 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: '#4cd137' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;
