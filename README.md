
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

# [My Portfolio Website](https://cdemzy.dev/)

I have decided to utilize Next.js for a newer version of my portfolio for faster performance than a regular `create-react-app` project. This website is deployed with Vercel!

## Tech Stack

Backend:

- [Next.js](nextjs.org) (14.2.3)
- [TypeScript](https://react.dev/learn/typescript) (Layout, Components, & Data)
- [React](https://react.dev) (.tsx)
- [Dotenv](https://www.npmjs.com/package/dotenv) (Tokens)
- [Contact Form](https://web3forms.com/) (Contact Form Email API)
- [Mapbox-gl](https://www.mapbox.com/) (Interactive Map) *Coming Soon*

Frontend:

- [Tailwind CSS](https://tailwindcss.com) (Styling)
- [Framer Motion](https://www.framer.com/motion/) (Animations)
- [clsx](https://www.npmjs.com/package/clsx) (Tailwind Package)

## Getting Started

- Make sure you have Node.js v20.14.0+ installed on your computer.
- Install Dependencies: `npm install`
- Add `env` tokens inside your `next.config.mjs` file *(Make the `next.config.mjs` file as it is git ignored)*.
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_EMAIL_TOKEN: 'YOUR-TOKEN-HERE',
    },
};

export default nextConfig;
```
- Start Developing: `npm run dev`
