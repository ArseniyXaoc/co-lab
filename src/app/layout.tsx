import './globals.css';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import { ClerkProvider } from '@clerk/nextjs';
import { AppSidebar } from '@/components/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

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

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="grid grid-rows-layout grid-cols-layout">
          {/* Header */}
          <header className="col-start-2 row-start-1">
            <Header />
          </header>

          {/* Sidebar */}
          <aside className="col-start-1 row-start-1 row-span-2">
            <SidebarProvider>
              <AppSidebar />
            </SidebarProvider>
          </aside>

          {/* Main content */}
          <main className="col-start-2 row-start-2">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
