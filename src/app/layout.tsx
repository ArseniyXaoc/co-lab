import './globals.css';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import { ClerkProvider } from '@clerk/nextjs';
import { AppSidebar } from '@/components/AppSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`grid h-screen grid-rows-layout grid-cols-layout ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="col-start-2 col-span-1">
            <Header />
          </header>
          <aside className="row-start-1 row-span-2">
            <SidebarProvider>
              <AppSidebar />
            </SidebarProvider>
          </aside>
          <main className="row-start-2 col-start-2">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
