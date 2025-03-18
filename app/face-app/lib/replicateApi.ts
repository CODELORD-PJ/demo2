import axios from 'axios';

export async function generateFaceMorph(sourceImage: string, targetImage: string) {
  try {
    // Replicate API expects base64 strings without the prefix
    const cleanSourceImage = sourceImage.split(',')[1];
    const cleanTargetImage = targetImage.split(',')[1];
    
    // Using a more reliable Replicate model for face morphing
    const response = await axios.post(
      'https://api.replicate.com/v1/predictions',
      {
        version: "c5bbf1c79a2e1c141eaee0470e3332bd2fa080ced0963c6b019a642e5ef05de6",
        input: {
          source_image: cleanSourceImage,
          target_image: cleanTargetImage,
          num_frames: 30,
          loop: true,
          duration: 3
        }
      },
      {
        headers: {
          'Authorization': `Token ${process.env.REPLICATE_API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Replicate returns a URL to poll for results
    const predictionUrl = response.data.urls.get;
    
    // Poll for results (normally this would be better with webhooks)
    let result;
    let attempts = 0;
    const maxAttempts = 30;
    
    while (!result && attempts < maxAttempts) {
      attempts++;
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds between polls
      
      const statusResponse = await axios.get(predictionUrl, {
        headers: {
          'Authorization': `Token ${process.env.REPLICATE_API_TOKEN}`
        }
      });
      
      if (statusResponse.data.status === 'succeeded') {
        result = statusResponse.data.output;
      } else if (statusResponse.data.status === 'failed') {
        throw new Error('Face morph generation failed: ' + statusResponse.data.error);
      }
    }
    
    if (!result) {
      throw new Error('Timed out waiting for face morph generation');
    }
    
    return result; // This should be the URL to the generated GIF
  } catch (error) {
    console.error('Error generating face morph:', error);
    throw new Error('Failed to generate face morph');
  }
} 