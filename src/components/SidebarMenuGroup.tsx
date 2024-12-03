import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import type { MenuItem } from '@/utils/menuItems';

type SidebarMenuGroupProps = {
  title: string;
  items: MenuItem[];
};

const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, items }) => (
  <SidebarGroup>
    <SidebarGroupLabel className="text-text">{title}</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu className="pl-2">
        {items.map((item) => (
          <SidebarMenuButton asChild key={item.title} className="hover:bg-sidebar-hover">
            <a href="#" className="flex items-center gap-2 p-2 group/menu">
              <item.icon size={16} className="text-white group-hover/menu:text-sidebar-primary" />
              <span className="text-text-secondary group-hover/menu:text-sidebar-primary">
                {item.title}
              </span>
            </a>
          </SidebarMenuButton>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
);

export default SidebarMenuGroup;
