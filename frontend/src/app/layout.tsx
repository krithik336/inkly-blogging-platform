import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Onest } from 'next/font/google';
import './globals.css';
import { ToasterProvider } from './providers/toaster';

const onest = Onest({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Inkly - Blogs powered by intelligence',
    template: '%s | Inkly',
  },

  description:
    'Inkly is an AI-powered blogging platform that helps creators generate SEO-optimized blogs faster using intelligent writing tools.',

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en" suppressHydrationWarning>

      <body
        className={`bg-gray-50 dark:bg-dark-secondary min-h-screen flex flex-col ${onest.className}`}
      >

        <ThemeProvider disableTransitionOnChange>

          <ToasterProvider />

          <div className="isolate flex flex-col flex-1">
            {children}
          </div>

        </ThemeProvider>

      </body>

    </html>

  );

}