
const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
