import { Metadata } from 'next';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import { Toaster } from '@/components/ui/Toasts/toaster';
import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/utils/helpers';
import 'styles/main.css';
import { CSPostHogProvider } from '@/app/api/posthog/providers';
import { SpeedInsights } from "@vercel/speed-insights/next"

const title = 'CrammerAI';
const description = 'AI-powered study platform';

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description
  }
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body className="bg-black">
          <Navbar />
          <main
            id="skip"
            className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
          >
            {children}
            <SpeedInsights />
          </main>
          <Footer />
          <Suspense>
            <Toaster />
          </Suspense>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
