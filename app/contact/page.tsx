export default function Contact() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light tracking-wider text-black mb-4">
            CONTACT
          </h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-8 text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            Add your contact information and form here
          </p>
          <a 
            href="/" 
            className="inline-block px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}