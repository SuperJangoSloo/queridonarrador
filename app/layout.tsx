import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Premium Video Editor Portfolio | Cinematic Content Creator',
  description: 'Explore stunning video editing and cinematic content creation portfolio. Award-winning video editor specializing in commercial productions, music videos, and digital content.',
  keywords: ['video editor', 'content creator', 'cinematography', 'video production', 'portfolio'],
  openGraph: {
    title: 'Premium Video Editor Portfolio',
    description: 'Cinematic video editing and content creation',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-dark-900 text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
