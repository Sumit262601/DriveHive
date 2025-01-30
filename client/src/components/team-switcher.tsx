import * as React from "react"

import {
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    url: string,
    logo: React.ElementType
  }[]
}) {
  const [activeTeam] = React.useState(teams[0])

  return (
    <Link to={activeTeam.url}>
      <SidebarMenuButton tooltip={activeTeam.name}
        size="lg"
        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
          <activeTeam.logo className="size-4" />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">
            {activeTeam.name}
          </span>
        </div>
      </SidebarMenuButton>
    </Link>
  )
}
