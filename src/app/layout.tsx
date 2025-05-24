import './globals.css';
import Header from '@/components/Header';
import { ClerkProvider } from '@clerk/nextjs';
import { AppSidebar } from '@/components/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';


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
