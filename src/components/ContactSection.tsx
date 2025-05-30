
const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
