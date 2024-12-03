import {
  Map,
  Calendar1,
  LibraryBig,
  MousePointer2,
  Route,
  MapPinHouse,
  ListChecks,
  Wallet,
  LucideProps,
  MessageCircle,
  NotebookPen,
  Users,
} from 'lucide-react';

export type MenuItem = {
  icon: React.ComponentType<LucideProps>;
  title: string;
};

type MenuItems = {
  [key: string]: MenuItem[];
};

const menuItems: MenuItems = {
  explore: [
    {
      icon: Map,
      title: 'Map',
    },
    {
      icon: MapPinHouse,
      title: 'Destinations',
    },
    {
      icon: LibraryBig,
      title: 'Guides',
    },
    {
      icon: MousePointer2,
      title: 'Nearby',
    },
  ],
  plan: [
    {
      icon: Route,
      title: 'Itinerary',
    },
    {
      icon: Calendar1,
      title: 'Calendar',
    },
    {
      icon: ListChecks,
      title: 'Checklists',
    },
    {
      icon: Wallet,
      title: 'Budget',
    },
  ],
  collaborate: [
    {
      icon: MessageCircle,
      title: 'Chat',
    },
    {
      icon: NotebookPen,
      title: 'Shared Notes',
    },
    {
      icon: Users,
      title: 'Participants',
    },
  ],
};

export default menuItems;

/*
Explore
- Map
- Destinations
- Guides
- Attractions Nearby

Plan
- Itinerary
- Calendar
- Checklists
- Budget
- Bookings

Collaborate
- Chat
- Polls
- Shared Notes
- Participants

Notifications
- Activity Log
- Reminders

Profile
- My Profile
- My Trips
- Settings
*/
