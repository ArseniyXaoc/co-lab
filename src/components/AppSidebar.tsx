import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarHeader,
} from '@/components/ui/sidebar';
import ProfileCard from './UserCard';
import menuItems from '@/utils/menuItems';
import Image from 'next/image';
import SidebarMenuGroup from './SidebarMenuGroup';

export function AppSidebar() {
  return (
    <Sidebar collapsible="none" className="border-none">
      {/* Header */}
      <SidebarHeader className="bg-sidebar-primary">
        <Image src="/logo.png" width={60} height={60} alt="logo" />
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="rounded-br-lg bg-sidebar-primary">
        <SidebarMenuGroup title="Explore" items={menuItems.explore} />
        <SidebarMenuGroup title="Plan" items={menuItems.plan} />
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="bg-white">
        <SidebarGroupLabel className="font-bold text-sm text-sidebar-primary">
          Your Team
        </SidebarGroupLabel>
        <ProfileCard
          imageSrc="/boy.png"
          name="Bon Jovi"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <ProfileCard
          imageSrc="/woman.png"
          name="Alice Cooper"
          description="Quia, aspernatur. Sunt."
        />
      </SidebarFooter>
    </Sidebar>
  );
}
