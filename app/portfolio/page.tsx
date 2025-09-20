export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light tracking-wider text-black mb-4">
            PORTFOLIO
          </h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg">
            This will connect to your existing Vue portfolio
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-gray-500 mb-8">
            Your existing Vue portfolio will be integrated here
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