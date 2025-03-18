import { NextResponse } from 'next/server';
import { generateFaceMorph } from '@/lib/replicateApi';

export async function POST(request: Request) {
  try {
    const { sourceImage, targetImage } = await request.json();

    if (!sourceImage || !targetImage) {
      return NextResponse.json(
        { error: 'Source and target images are required' },
        { status: 400 }
      );
    }

    const gifUrl = await generateFaceMorph(sourceImage, targetImage);

    return NextResponse.json({ gifUrl });
  } catch (error) {
    console.error('Error in morph API route:', error);
    return NextResponse.json(
      { error: 'Failed to generate face morph' },
      { status: 500 }
    );
  }
} 