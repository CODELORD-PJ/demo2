'use client';

import { FiDownload } from 'react-icons/fi';

interface ResultViewerProps {
  gifUrl: string;
}

export default function ResultViewer({ gifUrl }: ResultViewerProps) {
  const handleDownload = async () => {
    try {
      const response = await fetch(gifUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'face-morph.gif';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Failed to download GIF:', error);
    }
  };

  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-4">Result</h2>
      <div className="relative">
        <img
          src={gifUrl}
          alt="Morph Result"
          className="w-full rounded-lg"
        />
        <button
          onClick={handleDownload}
          className="absolute bottom-4 right-4 btn-primary flex items-center gap-2"
        >
          <FiDownload />
          Download GIF
        </button>
      </div>
    </div>
  );
} 