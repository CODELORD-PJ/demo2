export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About AI Face Morph</h1>
      
      <div className="prose prose-lg">
        <p>
          AI Face Morph is a cutting-edge web application that utilizes artificial intelligence to create seamless morphing animations between two facial images.
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">How It Works</h2>
        <p>
          Our application uses advanced deep learning technology powered by the Replicate API to analyze facial features and create a smooth transition between two images. The AI identifies key facial landmarks and generates intermediate frames to create a seamless morphing effect.
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">Technology Stack</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Next.js - A React framework for production-grade applications</li>
          <li>React - For building a dynamic user interface</li>
          <li>Tailwind CSS - For styling and responsive design</li>
          <li>Replicate API - For accessing state-of-the-art AI models</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">Privacy</h2>
        <p>
          We value your privacy. The images you upload are processed securely and are not stored permanently on our servers. All processing is done through secure API calls, and we do not share your data with third parties.
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
        <p>
          Have questions or feedback? Feel free to reach out to us at <a href="mailto:contact@example.com" className="text-primary hover:underline">contact@example.com</a>.
        </p>
      </div>
    </div>
  );
} 