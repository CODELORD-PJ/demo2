'use client';

import { useState } from 'react';
import UploadBox from '@/components/UploadBox';
import ResultViewer from '@/components/ResultViewer';
import Loader from '@/components/Loader';

export default function MorphPage() {
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [targetImage, setTargetImage] = useState<string | null>(null);
  const [resultGif, setResultGif] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleMorph = async () => {
    if (!sourceImage || !targetImage) {
      setError('Please upload both source and target images');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/morph', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sourceImage,
          targetImage,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate morph GIF');
      }

      const data = await response.json();
      setResultGif(data.gifUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Create Face Morph GIF</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <UploadBox
          title="Source Image"
          image={sourceImage}
          onImageChange={setSourceImage}
        />
        <UploadBox
          title="Target Image"
          image={targetImage}
          onImageChange={setTargetImage}
        />
      </div>

      <div className="text-center mb-8">
        <button
          onClick={handleMorph}
          disabled={isLoading || !sourceImage || !targetImage}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Generate Morph GIF
        </button>
      </div>

      {isLoading && <Loader />}
      
      {error && (
        <div className="text-error text-center mb-8">
          {error}
        </div>
      )}

      {resultGif && <ResultViewer gifUrl={resultGif} />}
    </div>
  );
} 