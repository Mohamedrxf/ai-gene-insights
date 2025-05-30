
const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Input Genes",
      description: "Upload your genetic data or input specific gene sequences. Our platform accepts various formats and ensures data privacy and security."
    },
    {
      number: 2,
      title: "AI Analysis",
      description: "Our advanced AI algorithms analyze gene interactions, cross-reference with medical databases, and identify patterns associated with disease risks."
    },
    {
      number: 3,
      title: "Disease Prediction",
      description: "Receive comprehensive reports with disease risk assessments, confidence levels, and recommendations for further medical consultation."
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#2f3640' }}>How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our three-step process transforms genetic data into actionable health insights
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#4cd137' }}>
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2f3640' }}>{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
