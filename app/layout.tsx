import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SAPA 911 | I AM BROKE (Naija Screamer)',
  description: 'The premier emergency screaming app for broke people. Screams in Nigerian Pidgin, Yoruba, Igbo, Hausa and World Languages!',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📢</text></svg>',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-red-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
