# AI Face Morph App

A Next.js application that creates smooth face morphing GIFs using AI technology. Upload two face images and watch them seamlessly transform into one another.

## Features

- Modern, responsive UI with Tailwind CSS
- Drag & drop image upload
- Real-time image preview
- AI-powered face morphing
- GIF generation and download
- Mobile-friendly design

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Replicate API for face morphing

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/face-morph-app.git
   cd face-morph-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Replicate API token:
   ```
   REPLICATE_API_TOKEN=your_replicate_api_token_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Setup

This project uses the Replicate API for face morphing. You'll need to:

1. Sign up for a Replicate account at [https://replicate.com](https://replicate.com)
2. Get your API token from the account settings
3. Add the token to your `.env.local` file

## Usage

1. Navigate to the Morph page
2. Upload two face images (source and target)
3. Click "Generate Morph GIF"
4. Wait for the AI to process the images
5. Download the resulting GIF

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 