import * as React from "react"
import {
  UserRound,
  LogOut ,
  Trash2,
  Star,
  FileText,
  LayoutDashboard, 
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Logout",
    url: "/logout",
    logo: LogOut,
  },
  teams: [
    {
      name: "User Data",
      logo: UserRound ,
      url: "/login",
    }
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
      isActive: true
    },
    {
      title: "Files",
      url: "/files",
      icon: FileText,
      isActive: true
    },
    {
      title: "Favourites",
      url: "/favourites",
      icon: Star,
      isActive: true
    },
    {
      title: "Trash",
      url: "/trash",
      icon: Trash2 ,
      isActive: true
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
