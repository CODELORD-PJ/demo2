import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        AI Face Morph
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
        Create seamless face morphing GIFs with our powerful AI technology.
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <div className="card p-6 max-w-sm">
          <div className="text-center mb-4">
            <div className="bg-primary/10 inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-medium">Upload Images</h3>
          </div>
          <p className="text-gray-600 text-center">
            Upload two facial images that you want to morph between.
          </p>
        </div>
        
        <div className="card p-6 max-w-sm">
          <div className="text-center mb-4">
            <div className="bg-secondary/10 inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18"></path>
                <circle cx="12" cy="12" r="9"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-medium">AI Processing</h3>
          </div>
          <p className="text-gray-600 text-center">
            Our AI seamlessly processes the transformation between faces.
          </p>
        </div>
        
        <div className="card p-6 max-w-sm">
          <div className="text-center mb-4">
            <div className="bg-primary/10 inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="8 17 12 21 16 17"></polyline>
                <line x1="12" y1="12" x2="12" y2="21"></line>
                <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium">Download GIF</h3>
          </div>
          <p className="text-gray-600 text-center">
            Get your high-quality morphing animation as a downloadable GIF.
          </p>
        </div>
      </div>
      
      <Link href="/morph" className="btn-primary text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all">
        Start Morphing Now
      </Link>
    </div>
  );
} 