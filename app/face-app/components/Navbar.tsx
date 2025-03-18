import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-surface shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            AI Face Morph
          </Link>
          
          <div className="flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/morph" className="text-gray-600 hover:text-primary transition-colors">
              Morph
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 