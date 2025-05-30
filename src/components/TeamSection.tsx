
const TeamSection = () => {
  const teamMembers = [
    {
      name: "purushoth",
      role: "Lead Geneticist",
      description: "PhD in Molecular Biology with 15+ years in genomics research",
      emoji: "👨‍⚕️"
    },
    {
      name: "Mohamed rafeeq khan A",
      role: "AI Research Director",
      description: "Machine Learning expert specializing in healthcare applications",
      emoji: "👨‍💻"
    },
    {
      name: "raja samvirtha",
      role: "Bioinformatics Lead",
      description: "Expert in computational biology and genetic data analysis",
      emoji: "👩‍💼"
    },
    {
      name: "rishi sai",
      role: "Medical Advisor",
      description: "Clinical researcher with expertise in personalized medicine",
      emoji: "👨‍🔬"
    }
  ];

  return (
    <section id="team" className="py-20" style={{ backgroundColor: '#f5f6fa' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#2f3640' }}>Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the experts behind our groundbreaking gene interaction analysis platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-2xl text-gray-500">{member.emoji}</span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#2f3640' }}>{member.name}</h3>
              <p className="text-gray-600 font-medium mb-2">{member.role}</p>
              <p className="text-sm text-gray-500">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
