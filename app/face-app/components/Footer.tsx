export default function Footer() {
  return (
    <footer className="bg-surface border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2024 AI Face Morph. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername/face-morph-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="/privacy"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 