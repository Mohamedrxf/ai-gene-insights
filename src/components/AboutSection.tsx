
const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
