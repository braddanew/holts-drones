# Holt's Drones Chatbot Setup

## Environment Configuration

Create a `.env.local` file in the root directory of your project (`holts-drones/`) with the following content:

```
OPENAI_API_KEY=your_openai_api_key_here
```

### Getting Your OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in to your OpenAI account
3. Click "Create new secret key"
4. Copy the generated key
5. Paste it in your `.env.local` file

**Important:** Never commit your `.env.local` file to version control. It's already included in `.gitignore`.

## Running Locally

1. Install dependencies (if not already done):
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

4. Look for the blue chat button in the bottom-right corner of the page

## Testing the Chatbot

1. Click the chat button to open the chat window
2. Type a message like "What services do you offer?"
3. The assistant should respond with information about Holt's Drones services

## Deployment to Vercel

1. Add your environment variable in Vercel:
   - Go to your Vercel dashboard
   - Navigate to your project settings
   - Go to "Environment Variables"
   - Add `OPENAI_API_KEY` with your actual API key

2. Deploy your project:
   ```bash
   npm run build
   ```

## Troubleshooting

- **"OpenAI API key not configured" error**: Make sure your `.env.local` file exists and contains a valid API key
- **Chat not responding**: Check the browser console for errors and ensure your API key has sufficient credits
- **Styling issues**: Make sure Tailwind CSS is properly configured (should already be set up)

## Features Included

✅ Modern, responsive chat widget with Tailwind CSS
✅ Floating chat button in bottom-right corner
✅ Chat history with user and assistant messages
✅ Loading indicators and error handling
✅ Professional Holt's Drones branding
✅ OpenAI GPT-3.5-turbo integration
✅ Production-ready for Vercel deployment

