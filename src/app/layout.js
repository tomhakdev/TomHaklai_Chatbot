import './globals.css'
import { portfolioData } from '../data/portfolioData'

export const metadata = {
  title: `${portfolioData.personal.name} - Portfolio Chat`,
  description: `Chat with ${portfolioData.personal.name} to learn about their background, skills, and experience as a ${portfolioData.personal.title}.`,
  keywords: 'portfolio, developer, full stack, react, next.js, web development',
  authors: [{ name: portfolioData.personal.name }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#212121" />
      </head>
      <body className="antialiased">
        <div className="min-h-screen bg-chat-bg text-chat-text">
          {children}
        </div>
      </body>
    </html>
  )
}